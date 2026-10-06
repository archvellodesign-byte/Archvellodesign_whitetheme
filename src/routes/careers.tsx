import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { roles } from "@/components/site/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Join Archvello Design" },
      {
        name: "description",
        content:
          "Open roles for BIM coordinators, architectural technologists, visualization artists and interior detailers at Archvello Design.",
      },
      { property: "og:title", content: "Careers | Archvello Design" },
      {
        property: "og:description",
        content: "Open roles across BIM, documentation, interiors and visualization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Careers"
        title="Work on buildings that outlive the drawings"
        lead="We hire people who care about the detail — and give them the projects to prove it."
      />

      <section>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 reveal">
              <p className="eyebrow mb-2">Open roles</p>
              <h2 className="mb-3">Now hiring</h2>
              <div className="rule mb-4"></div>
              <p className="text-muted-2">
                {/* Don't see your role? Send a portfolio and we'll keep you in mind for the
                next opening. */}
                We’re always interested in connecting with creative minds who share our passion for architecture, innovation, and thoughtful design. Send us your portfolio, and let's explore the possibilities of working together.
              </p>
              <Link className="btn btn-ghost mt-2" to="/contact">
                Send an open application
              </Link>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                {roles.map((r) => (
                  <div className="col-md-6 reveal" key={r.title}>
                    <article className="service h-100">
                      <div className="num">{r.type}</div>
                      <h3>{r.title}</h3>
                      <p>{r.text}</p>
                      <p className="eyebrow mt-3 mb-0">{r.location}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
