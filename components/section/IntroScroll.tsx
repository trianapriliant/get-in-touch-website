"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title?: string;
  subtitle?: string;
  targetId?: string; // id to scroll to when pressing the button
};

export default function IntroScroll({
  title = "Welcome — take a moment",
  subtitle = "Scroll gently to explore the portfolio. Try a slow scroll to see the horizontal gallery unfold.",
  targetId = "projects",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const linesRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.from(linesRef.current, {
        y: 28,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });

      // subtle arrow pulse
      gsap.fromTo(
        ".intro-scroll__arrow",
        { y: 0, opacity: 0.9 },
        { y: 5, opacity: 1, repeat: -1, yoyo: true, duration: 0.9, ease: "sine.inOut" }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const NAV_HEIGHT = 60;
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section ref={rootRef} className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
          ref={(el) => { linesRef.current[0] = el; }}
        >
          {title}
        </h2>

        <p
          className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-base md:text-lg mb-1"
          ref={(el) => { linesRef.current[1] = el; }}
        >
          {subtitle}
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={onClick}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-contrast dark:text-black hover:bg-accent-strong transition"
            aria-label={`Scroll to ${targetId}`}
            ref={(el) => { linesRef.current[2] = el; }}
          >
            Scroll to portfolio
            <svg
              className="intro-scroll__arrow w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}