import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string; eyebrow: string };

const slides: Slide[] = [
  { src: "/img/hero.jpg", alt: "Modern architecture at dusk", eyebrow: "Architecture · Interiors · BIM" },
  { src: "/img/p1.jpg", alt: "Hospitality interior lobby", eyebrow: "Hospitality · Interiors" },
  { src: "/img/p2.jpg", alt: "Commercial building facade", eyebrow: "Commercial · Facades" },
  { src: "/img/p3.jpg", alt: "Residential tower exterior", eyebrow: "Residential · Towers" },
  { src: "/img/p4.jpg", alt: "Workspace fit-out interior", eyebrow: "Workplace · Fit-outs" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = slides[active]!;
  const start = () => {
    stop();
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 5500);
  };

  const stop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const goTo = (i: number) => {
    setActive(i);
    start();
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="hero-slides"
      onMouseEnter={stop}
      onMouseLeave={start}
      role="region"
      aria-label="Featured projects carousel"
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`hero-slide ${i === active ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${s.src})` }}
          aria-hidden={i !== active}
        />
      ))}

      {/* gradient + content overlay */}
      <div className="hero-slides__veil" />
      <div className="hero-slides__content container">
        <div className="row">
          <div className="col-lg-9">
            <p className="eyebrow mb-3" key={current.eyebrow}>
              {current.eyebrow}
            </p>
            <h1 className="mb-4">
              Precision drawings for buildings that outlive the drawings.
            </h1>
            <p className="lead mb-5">
              Archvello Design is an integrated multidisciplinary studio offering design
              documentation, coordination, BIM consultancy and visualization across the
              architecture, interiors and engineering disciplines.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-gold" href="/projects">View Projects</a>
              <a className="btn btn-ghost" href="/contact">Start a Project</a>
            </div>
          </div>
        </div>
      </div>

      {/* slide counter + dots */}
      <div className="hero-slides__nav">
        <span className="hero-slides__counter">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="hero-slides__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-slides__dot ${i === active ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
