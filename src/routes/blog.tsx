import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { posts } from "@/components/site/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal | Archvello Design on BIM, Interiors & Documentation" },
      {
        name: "description",
        content:
          "Notes from the studio on ISO 19650, hospitality interior detailing, scan-to-BIM retrofits and construction documentation practice.",
      },
      { property: "og:title", content: "Journal | Archvello Design" },
      {
        property: "og:description",
        content:
          "Practical writing on BIM standards, interior detailing and documentation workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Journal"
        title="Notes from the studio"
        lead="Practical writing on standards, detailing and the technology behind our delivery."
      />

      <section>
        <div className="container">
          <div className="row g-4">
            {posts.map((p) => (
              <div className="col-md-6 col-lg-4 reveal" key={p.slug}>
                <article className="service h-100">
                  <div className="num">{p.cat}</div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <p className="eyebrow mt-3 mb-0">{p.date}</p>
                </article>
              </div>
            ))}
          </div>
          <div className="mt-5 reveal">
            <Link className="btn btn-ghost" to="/contact">
              Subscribe to studio updates
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
