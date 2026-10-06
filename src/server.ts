import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: https://www.archvellodesign.com/sitemap.xml
`;

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.archvellodesign.com/</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/about</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/team</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/careers</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/blog</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/projects</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/contact</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/projects/meridian-grand-hotel</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/projects/northline-corporate-campus</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/projects/civic-centre-bim-delivery</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.archvellodesign.com/projects/casa-lumiere-residence</loc>
    <lastmod>2026-10-06</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
`;

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);

    if (url.pathname === "/robots.txt") {
      return new Response(ROBOTS_TXT, {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    if (url.pathname === "/sitemap.xml") {
      return new Response(SITEMAP_XML, {
        headers: { "content-type": "application/xml; charset=utf-8" },
      });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
