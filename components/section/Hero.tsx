"use client";

import { useEffect, useState } from "react";

const words = ["Developer", "Modder", "Planner", "Creator"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // tinggi navbar dalam px — sesuaikan
  const NAV_HEIGHT = 72;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT - 12;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // typing effect
  useEffect(() => {
    const currentWord = words[index % words.length];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* ISI HERO */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 mx-4">
          Small Designer <br />
          + <span className="text-lime-600 dark:!text-lime-500">{text}</span>
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 mx-6">
          Offering custom web design and development — along with a range of small to medium creative digital projects.
        </p>
        <button
          onClick={() => scrollToSection("about")}
          className="btn bg-lime-500 hover:!text-black dark:!text-black hover:bg-lime-600 rounded-3xl border-0"
          aria-label="Scroll to about"
        >
          Dive in
        </button>
      </div>
    </div>
  );
}
