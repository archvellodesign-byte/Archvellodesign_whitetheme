import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import archvelloLogo from "@/assets/archvello-design-logo.png";

const megaMenus = [
  {
    to: "/about",
    label: "About",
    groups: [
      {
        heading: "Studio",
        links: [
          { to: "/about", label: "About Archvello" },
          { to: "/team", label: "Meet the Team" },
          { to: "/careers", label: "Careers" },
          { to: "/blog", label: "Journal" },
        ],
      },
      {
        heading: "Work",
        links: [
          { to: "/projects", label: "All Projects" },
          { to: "/contact", label: "Start a Project" },
        ],
      },
    ],
  },
  {
    to: "/projects",
    label: "Projects",
    groups: [
      {
        heading: "By Sector",
        links: [
          { to: "/projects", label: "Hospitality" },
          { to: "/projects", label: "Commercial" },
          { to: "/projects", label: "Residential" },
          { to: "/projects", label: "BIM" },
        ],
      },
      {
        heading: "Explore",
        links: [
          { to: "/projects", label: "All Projects" },
          { to: "/contact", label: "Start a Project" },
        ],
      },
    ],
  },
] as const;

const servicesMega = {
  intro: {
    index: "03 — Our Services",
    title: "Architectural &\nInterior Drafting",
    text: "Professional drafting and documentation support built around your standards and workflow.",
  },
  architectural: [
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
  ],
  interior: [
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
  ],
} as const;

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/blog", label: "Blog", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

function useSiteEffects() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const nav = document.querySelector(".arch .navbar");
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".arch .reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);
}

export function SiteHeader() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand brand-logo" to="/" aria-label="Archvello Design — Home">
          <img src={archvelloLogo} alt="Archvello Design" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.slice(0, 1).map((l) => (
              <li className="nav-item" key={l.to}>
                <Link
                  className="nav-link"
                  to={l.to}
                  activeProps={{ className: "nav-link active" }}
                  activeOptions={{ exact: l.exact }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {megaMenus.slice(0, 1).map((m) => (
              <li className="nav-item has-mega" key={m.label}>
                <Link className="nav-link" to={m.to}>
                  {m.label} <span className="mega-caret">▾</span>
                </Link>
                <div className="mega-menu">
                  <div className="container">
                    <div className="row g-4">
                      {m.groups.map((g) => (
                        <div className="col-lg-6" key={g.heading}>
                          <p className="mega-heading">{g.heading}</p>
                          <ul className="mega-list">
                            {g.links.map((gl) => (
                              <li key={gl.label}>
                                <Link to={gl.to}>
                                  <span className="mega-arrow">→</span> {gl.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {/* Services — rich mega panel */}
            <li className="nav-item has-mega">
              <Link className="nav-link" to="/" hash="services" activeProps={{ className: "nav-link" }}>
                Services <span className="mega-caret">▾</span>
              </Link>
              <div className="mega-menu mega-services">
                <div className="container">
                  <div className="row g-4">
                    <div className="col-lg-3">
                      <p className="mega-heading">{servicesMega.intro.index}</p>
                      <h3 className="mega-services__title">
                        Architectural &<br />
                        Interior Drafting
                      </h3>
                      <p className="mega-services__text">{servicesMega.intro.text}</p>
                    </div>
                    <div className="col-6 col-lg-3">
                      <p className="mega-heading">Interior Drafting</p>
                      <ul className="mega-plain">
                        {servicesMega.interior.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <Link className="mega-explore" to="/" hash="services">
                        Explore Interior Drafting →
                      </Link>
                    </div>
                    <div className="col-6 col-lg-3">
                      <p className="mega-heading">Architectural Drafting</p>
                      <ul className="mega-plain">
                        {servicesMega.architectural.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <Link className="mega-explore" to="/" hash="services">
                        Explore Architectural Drafting →
                      </Link>
                    </div>
                    
                    <div className="col-lg-3 d-none d-lg-block">
                      <Link className="mega-card" to="/" hash="services">
                        <img
                          src="/img/interior.jpg"
                          alt="Interior documentation support"
                          loading="lazy"
                        />
                        <span className="mega-card__label">Documentation</span>
                        <span className="mega-card__title">
                          Your standards.
                          <br />
                          Our support.
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {megaMenus.slice(1).map((m) => (
              <li className="nav-item has-mega" key={m.label}>
                <Link className="nav-link" to={m.to}>
                  {m.label} <span className="mega-caret">▾</span>
                </Link>
                <div className="mega-menu">
                  <div className="container">
                    <div className="row g-4">
                      {m.groups.map((g) => (
                        <div className="col-lg-6" key={g.heading}>
                          <p className="mega-heading">{g.heading}</p>
                          <ul className="mega-list">
                            {g.links.map((gl) => (
                              <li key={gl.label}>
                                <Link to={gl.to}>
                                  <span className="mega-arrow">→</span> {gl.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {navLinks.slice(1).map((l) => (
              <li className="nav-item" key={l.to}>
                <Link
                  className="nav-link"
                  to={l.to}
                  activeProps={{ className: "nav-link active" }}
                  activeOptions={{ exact: l.exact }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-gold" to="/contact">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <Link to="/" className="navbar-brand brand-logo mb-3">
              <img src={archvelloLogo} alt="Archvello Design" />
            </Link>
            <p className="text-muted-2 mb-0">
              Design documentation, coordination and BIM consultancy for the global AEC
              industry.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <p className="eyebrow mb-3">Navigate</p>
            <div className="d-flex flex-column gap-2">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <p className="eyebrow mb-3">Studio</p>
            <div className="d-flex flex-column gap-2">
              <span className="text-muted-2">42/13 Vijay-Park, Moujpur, New Delhi, India</span>
              <a href="mailto:info@archvellodesign.com">info@archvellodesign.com</a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-muted-2 mb-0" style={{ fontSize: ".82rem" }}>
          © {new Date().getFullYear()} Archvello Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="page-hero">
      <div className="container">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="mb-3">{title}</h1>
        {lead ? <p className="lead text-muted-2 mb-0">{lead}</p> : null}
      </div>
    </header>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useSiteEffects();
  return (
    <div className="arch">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
