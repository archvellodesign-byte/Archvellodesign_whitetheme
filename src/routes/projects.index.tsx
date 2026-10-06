import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { projects } from "@/components/site/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Archvello Design Architecture Studio" },
      {
        name: "description",
        content:
          "Selected hospitality, commercial, residential and BIM projects documented and coordinated by Archvello Design.",
      },
      { property: "og:title", content: "Projects | Archvello Design" },
      {
        property: "og:description",
        content:
          "Browse our hospitality, commercial, residential and BIM delivery projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const filters = [
  ["all", "All"],
  ["hospitality", "Hospitality"],
  ["commercial", "Commercial"],
  ["residential", "Residential"],
  ["bim", "BIM"],
] as const;

function ProjectsPage() {
  const [active, setActive] = useState<string>("all");
  const shown = projects.filter((p) => active === "all" || p.cat === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Selected work"
        title="Projects"
        lead="A cross-section of documentation, coordination and visualization work delivered for clients worldwide."
      />

      <section>
        <div className="container">
          <div className="mb-4 reveal">
            {filters.map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`filter-btn${active === key ? " active" : ""}`}
                onClick={() => setActive(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="row g-4">
            {shown.map((p) => (
              <div className="col-md-6 reveal" key={p.slug}>
                <Link className="tile" to="/projects/$slug" params={{ slug: p.slug }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <div className="cap">
                    <span>{p.label}</span>
                    <h3>{p.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
