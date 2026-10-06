import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { team } from "@/components/site/site-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team | Archvello Design" },
      {
        name: "description",
        content: "Meet the senior architects, BIM specialists and documentation leaders behind Archvello Design.",
      },
      { property: "og:title", content: "Meet the Team | Archvello Design" },
      {
        property: "og:description",
        content: "The senior-led team behind Archvello Design's drawings, coordination and project delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The people"
        title="Meet the team behind the drawings"
        lead="A senior-led studio — the people you brief are the people who draw, coordinate and sign off your packages."
      />
      <section className="team-page">
        <div className="container">
          <div className="row g-5">
            {team.map((member, index) => (
              <div className="col-md-6" key={member.name}>
                <article className="team-profile">
                  <img
                    src={member.img}
                    alt={`${member.name}, ${member.role} at Archvello Design`}
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  <div className="team-profile__copy">
                    <span className="team-profile__number">0{index + 1}</span>
                    <span className="role">{member.role}</span>
                    <h2>{member.name}</h2>
                    <p>{member.text}</p>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}