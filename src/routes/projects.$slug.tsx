import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { projects } from "@/components/site/site-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found | Archvello Design" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} | Archvello Design Projects` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.title} | Archvello Design` },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <SiteLayout>
      <PageHero eyebrow="404" title="Project not found" lead="This project may have moved." />
      <section>
        <div className="container">
          <Link className="btn btn-gold" to="/projects">
            Back to projects
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero eyebrow={project.label} title={project.title} lead={project.summary} />

      <section>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 reveal">
              <img
                src={project.img}
                alt={project.title}
                className="img-fluid mb-4"
                loading="lazy"
                width={1024}
                height={768}
              />
              <h2 className="mb-3">Scope of delivery</h2>
              <div className="rule mb-4"></div>
              {project.details.map((d) => (
                <div className="sector" key={d}>
                  <span className="text-muted-2">{d}</span>
                </div>
              ))}
              <Link className="btn btn-gold mt-4" to="/contact">
                Discuss a similar project
              </Link>
            </div>
            <div className="col-lg-4 reveal">
              <div className="service">
                <p className="eyebrow mb-3">Project facts</p>
                {[
                  ["Client", project.client],
                  ["Location", project.location],
                  ["Year", project.year],
                  ["Scope", project.scope],
                ].map(([k, v]) => (
                  <div className="sector" key={k}>
                    <span>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <p className="eyebrow mb-2">More work</p>
          <h2 className="mb-4">Other projects</h2>
          <div className="row g-4">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <div className="col-md-4 reveal" key={p.slug}>
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
    </SiteLayout>
  );
}
