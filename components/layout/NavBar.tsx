'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MusicPlayer from '../feature/MusicPlayer';
import ThemeToggle from '../feature/ThemeToggle';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skill", label: "Skill" },
    { href: "/#contact", label: "Contact" },
  ];

  const NAV_HEIGHT = 72;

  // smooth scroll handler for internal anchors
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    // For home link, we don't need to prevent default
    if (href === "/") {
      setIsOpen(false);
      return;
    }
    
    // For other links, handle smooth scrolling
    e.preventDefault();
    setIsOpen(false);
    
    // Check if it's a special "More About Me" link
    if (href === "#footer") {
      // Scroll to footer
      const footer = document.getElementById('footer');
      if (footer) {
        const y = footer.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      return;
    }
    
    // Extract hash from href (e.g., "/#projects" -> "projects")
    const hash = href.split('#')[1];
    if (!hash) return;
    
    const el = document.getElementById(hash);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // fallback: navigate to href if element not found
      window.location.hash = `#${hash}`;
    }
  };

  return (
    <div className="fixed top-0 w-full z-20 backdrop-blur bg-base-100/0 ">
      <div className="mx-auto max-w-7xl px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-accent font-bold text-xl hover:brightness-95 transition-colors">
          Trian Aprilianto
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-200 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={(e) => handleNavClick(e, "#footer")}
            className="text-gray-200 hover:text-accent transition-colors"
          >
            More About Me
          </button>
          <ThemeToggle />
          <MusicPlayer />
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="btn bg-accent text-accent-contrast dark:text-black hover:bg-accent-strong rounded-md border-0"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-accent">
          <Image
            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-neutral-900/0 px-4 py-10 rounded-b-4xl shadow-md"
        >
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-lg text-gray-200 hover:text-accent transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={(e) => handleNavClick(e, "#footer")}
                className="block w-full text-lg text-gray-200 hover:text-accent transition py-2"
              >
                More About Me
              </button>
            </li>
            <li className="flex justify-center py-2">
              <ThemeToggle />
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="btn w-full bg-accent text-accent-contrast dark:text-black hover:bg-accent-strong border-0"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
