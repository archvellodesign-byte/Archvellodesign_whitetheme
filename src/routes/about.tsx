import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio | Archvello Design" },
      {
        name: "description",
        content:
          "Archvello Design is a 480-strong architecture, interiors and BIM studio working with practices in London, New York, Dubai and Singapore.",
      },
      { property: "og:title", content: "About the Studio | Archvello Design" },
      {
        property: "og:description",
        content:
          "Meet the multidisciplinary team behind our documentation, coordination and BIM consultancy work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  ["Standards first", "Your templates, families and naming conventions — never ours imposed on you."],
  ["One accountable team", "A named lead per project, not a rotating pool of resources."],
  ["Drawings that build", "Every sheet is checked against constructability, not just geometry."],
  ["Transparent programme", "Weekly issue logs and a delivery tracker you can see at any time."],
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The studio"
        title="Built around drawings, standards and people"
        lead="Eighteen years of documentation practice, delivered by architects and engineers trained in global design standards."
      />

      <section>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 reveal">
              <img
                src="/img/about.jpg"
                alt="Architects reviewing construction drawings in the studio"
                className="img-fluid"
                loading="lazy"
                width={1200}
                height={900}
              />
            </div>
            <div className="col-lg-6 reveal">
              <p className="eyebrow mb-2">Who we are</p>
              <h2 className="mb-3">An extension of your practice</h2>
              <div className="rule mb-4"></div>
              <p className="text-muted-2">
                We work alongside practices in London, New York, Dubai and Singapore on
                large-scale, iconic developments — from early design intent through to
                issued-for-construction sets and as-built handover.
              </p>
              <p className="text-muted-2">
                Our teams plug directly into your workflow, so what we hand back reads as
                if your own team drew it.
              </p>
              <Link className="btn btn-ghost mt-3" to="/contact">
                Talk to the studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="row text-center g-4 reveal">
            {[
              ["20+", "Specialists"],
              ["200+", "Projects Delivered"],
              ["5", "Countries"],
              ["8+", "Years of Practice"],
            ].map(([n, l]) => (
              <div className="col-6 col-md-3 stat" key={l}>
                <div className="num">{n}</div>
                <div className="lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 reveal">
              <p className="eyebrow mb-2">How we work</p>
              <h2 className="mb-3">Our principles</h2>
              <div className="rule"></div>
            </div>
            <div className="col-lg-8 reveal">
              {values.map(([name, desc]) => (
                <div className="sector" key={name}>
                  <span>{name}</span>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
