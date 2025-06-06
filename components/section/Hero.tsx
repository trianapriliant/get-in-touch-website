"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const words = ["Developer", "Modder", "Planner", "Creator"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* LATAR BACKGROUND INTERAKTIF */}
      <div
        className="absolute w-72 h-72 bg-lime-500/20 rounded-full pointer-events-none blur-2xl transition-all duration-50"
        style={{
          top: mouse.y - 150,
          left: mouse.x - 150,
        }}
      />

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
        <Link href="#about">
          <button className="btn bg-lime-500 hover:!text-black dark:!text-black hover:bg-lime-600 rounded-3xl border-0">Dive in</button>
        </Link>
      </div>
    </div>
  );
}
