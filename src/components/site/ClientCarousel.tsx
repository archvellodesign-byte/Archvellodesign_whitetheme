import { useEffect, useState } from "react";
import helenaPortrait from "@/assets/client-helena.jpg";
import adrianPortrait from "@/assets/client-adrian.jpg";
import sulinPortrait from "@/assets/client-sulin.jpg";
import { testimonials } from "@/components/site/site-data";

const portraits = [helenaPortrait, adrianPortrait, sulinPortrait];

export function ClientCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % testimonials.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const show = (index: number) => setActive((index + testimonials.length) % testimonials.length);

  return (
    <div
      className="client-carousel reveal"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="client-carousel__track">
        {testimonials.map((testimonial, index) => (
          <figure
            className={`client-slide${index === active ? " is-active" : ""}`}
            aria-hidden={index !== active}
            key={testimonial.name}
          >
            <img
              className="client-slide__portrait"
              src={portraits[index]}
              alt={`${testimonial.name}, ${testimonial.role}`}
              loading="lazy"
              width={1024}
              height={1024}
            />
            <span className="client-slide__mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              <p>{testimonial.quote}</p>
            </blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="client-carousel__controls">
        <button type="button" onClick={() => show(active - 1)} aria-label="Previous client">←</button>
        <div className="client-carousel__dots" aria-label="Choose a client testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              className={index === active ? "is-active" : ""}
              onClick={() => show(index)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={index === active ? "true" : undefined}
              key={testimonial.name}
            />
          ))}
        </div>
        <button type="button" onClick={() => show(active + 1)} aria-label="Next client">→</button>
      </div>
    </div>
  );
}