import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HeroSlider } from "@/components/site/HeroSlider";
import { projects } from "@/components/site/site-data";
import { ClientCarousel } from "@/components/site/ClientCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archvello Design | Architecture, Interiors & BIM Studio" },
      {
        name: "description",
        content:
          "Archvello Design is a multidisciplinary architecture studio delivering design documentation, BIM consultancy, interiors and 3D visualization for global AEC projects.",
      },
      {
        property: "og:title",
        content: "Archvello Design | Architecture, Interiors & BIM Studio",
      },
      {
        property: "og:description",
        content:
          "Design documentation, BIM consultancy, interiors and 3D visualization for hospitality, commercial, residential and healthcare projects worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    num: "01",
    title: "Architecture Documentation",
    text: "Full construction documentation sets produced in BIM and CAD, aligned with AIA and RIBA standards for large-scale developments.",
  },
  {
    num: "02",
    title: "Interior Documentation",
    text: "Detailing and coordination for hospitality and workplace interiors, from concept package to tender-ready drawings.",
  },
  {
    num: "03",
    title: "BIM Consultancy",
    text: "LOD 100–500 modelling, clash detection, BEP authoring and model audits delivered by a dedicated BIM team.",
  },
  {
    num: "04",
    title: "MEPF Coordination",
    text: "Integrated engineering modelling, documentation and multi-discipline coordination using industry-leading toolsets.",
  },
  {
    num: "05",
    title: "3D Visualization",
    text: "Photoreal interior and exterior renders, walkthroughs and flythroughs crafted in 3ds Max and Unreal Engine.",
  },
  {
    num: "06",
    title: "Scan to BIM",
    text: "Point-cloud conversion into accurate as-built models for retrofit, restoration and facility management workflows.",
  },
];

const sectors = [
  ["Hospitality", "Resorts, city hotels and branded residences"],
  ["Corporate / Commercial", "Workplaces, headquarters and fit-outs"],
  ["Retail", "Flagships, malls and large-format developments"],
  ["Residential", "Villas, apartments and condominium towers"],
  ["Mixed-Use", "Integrated districts and podium developments"],
  ["Healthcare & Institutional", "Hospitals, universities and campuses"],
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <HeroSlider />

      {/* Stats */}
      <section className="section-alt py-5">
        <div className="container">
          <div className="row text-center g-4 reveal">
            {[
              ["480+", "Specialists"],
              ["2,900", "Projects Delivered"],
              ["31", "Countries"],
              ["18", "Years of Practice"],
            ].map(([n, l]) => (
              <div className="col-6 col-md-3 stat" key={l}>
                <div className="num">{n}</div>
                <div className="lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container">
          <div className="row align-items-end mb-5 reveal">
            <div className="col-lg-7">
              <p className="eyebrow mb-2">What we do</p>
              <h2 className="mb-3">A one-stop documentation partner</h2>
              <div className="rule"></div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <p className="text-muted-2 mb-0">
                From early design intent to issued-for-construction sets, our teams plug
                directly into your workflow and standards.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {services.map((s) => (
              <div className="col-md-6 col-lg-4 reveal" key={s.num}>
                <article className="service">
                  <div className="num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior drafting — split feature (mirrored) */}
      <section className="split-feature split-feature--reverse">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6 split-feature__panel order-2 order-lg-1">
              <div className="split-feature__inner split-feature__inner--left reveal">
                <p className="eyebrow mb-3">Interior Drafting</p>
                <h2 className="split-feature__title mb-4">
                  Turning design intent
                  <br />
                  into documentation.
                </h2>
                <p className="text-muted-2 split-feature__lead">
                  We help interior designers transform design information into
                  organized drawing documentation across layouts, elevations,
                  joinery, furniture, ceilings and detailed elements.
                </p>
                <div className="split-feature__chips">
                  {[
                    "Furniture Layouts",
                    "General Arrangement Plans",
                    "Flooring Plans",
                    "Ceiling Plans",
                    "Lighting Plans",
                    "Finish Plans",
                    "Enlarged Plans",
                    "Room Elevations",
                    "Wall Elevations",
                    "Feature-Wall Elevations",
                    "Kitchen Elevations",
                    "Bathroom Elevations",
                    "Wardrobe Elevations",
                    "Joinery Elevations",
                    "Custom Furniture",
                    "Millwork",
                    "Kitchen Cabinetry",
                    "Bespoke Interior Elements",
                  ].map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <Link className="split-feature__cta" to="/contact">
                  Request Interior Drafting Quote <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <figure className="split-feature__media mb-0">
                <img
                  src="/img/interior.jpg"
                  alt="Bright modern living room interior with gallery wall"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <span className="split-feature__num">02</span>
                <span className="split-feature__tag">Interior</span>
              </figure>
            </div>
          </div>
        </div>
      </section>


      {/* Drafting detail — split feature */}
      <section className="split-feature section-alt">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6">
              <figure className="split-feature__media mb-0">
                <img
                  src="/img/about.jpg"
                  alt="Architect hand-drawing detailed construction plans"
                  loading="lazy"
                />
                <span className="split-feature__num">01</span>
                <span className="split-feature__tag">Architectural</span>
              </figure>
            </div>
            <div className="col-lg-6 split-feature__panel">
              <div className="split-feature__inner reveal">
                <p className="eyebrow mb-3">Architectural Drafting</p>
                <h2 className="split-feature__title mb-4">
                  From plans
                  <br />
                  to details.
                </h2>
                <p className="text-muted-2 split-feature__lead">
                  We support architectural teams with drafting and documentation
                  requirements across different stages of project production.
                </p>
                <div className="split-feature__chips">
                  {[
                    "Floor Plans",
                    "Detailed Plans",
                    "Furniture Plans",
                    "Roof Plans",
                    "Enlarged Plans",
                    "Existing-Condition Plans",
                    "As-Built Drawings",
                    "Internal Elevations",
                    "External Elevations",
                    "Building Sections",
                    "Wall Sections",
                    "Enlarged Sections",
                    "Architectural Details",
                    "Door Details",
                    "Window Details",
                    "Stair Details",
                    "Wall Details",
                    "Floor Details",
                    "Ceiling Details",
                    "Construction Details",
                    "Drawing Set Preparation",
                    "Drawing Revisions",
                  ].map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <Link className="split-feature__cta" to="/contact">
                  Request Architectural Drafting Quote <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-alt">
        <div className="container">
          <div className="row align-items-end mb-4 reveal">
            <div className="col-lg-6">
              <p className="eyebrow mb-2">Selected work</p>
              <h2 className="mb-3">Projects</h2>
              <div className="rule"></div>
            </div>
            <div className="col-lg-6 text-lg-end mt-4 mt-lg-0">
              <Link className="btn btn-ghost" to="/projects">All projects</Link>
            </div>
          </div>
          <div className="row g-4">
            {projects.map((p) => (
              <div className="col-md-6 reveal" key={p.slug}>
                <Link className="tile" to="/projects/$slug" params={{ slug: p.slug }}>
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} />
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

      {/* About */}
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
              <p className="eyebrow mb-2">The studio</p>
              <h2 className="mb-3">Built around drawings, standards and people</h2>
              <div className="rule mb-4"></div>
              <p className="text-muted-2">
                Our architects and engineers are trained in global design standards and
                construction technology, working alongside practices in London, New York,
                Dubai and Singapore on large-scale, iconic developments.
              </p>
              <p className="text-muted-2">
                Every engagement starts with your templates, families and naming
                conventions — so what we hand back reads as if your own team drew it.
              </p>
              <Link className="btn btn-ghost mt-3" to="/about">More about the studio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 reveal">
              <p className="eyebrow mb-2">Our clients</p>
              <h2 className="mb-3">Trusted project partnerships</h2>
              <div className="rule"></div>
            </div>
          </div>
          <ClientCarousel />
        </div>
      </section>

      {/* Sectors */}
      <section className="section-alt">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 reveal">
              <p className="eyebrow mb-2">Expertise</p>
              <h2 className="mb-3">Sectors we serve</h2>
              <div className="rule"></div>
            </div>
            <div className="col-lg-8 reveal">
              {sectors.map(([name, desc]) => (
                <div className="sector" key={name}>
                  <span>{name}</span>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container text-center reveal">
          <p className="eyebrow mb-2">Get in touch</p>
          <h2 className="mb-4">Ready to brief a project?</h2>
          <Link className="btn btn-gold" to="/contact">Request a quote</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
