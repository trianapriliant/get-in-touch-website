'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MusicPlayer from '../feature/MusicPlayer';
import ThemeToggle from '../feature/ThemeToggle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
      router.push(href);
    }
  };

  const menuVariants = {
    open: {
      clipPath: `circle(100% at 90% 2rem)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(0% at 90% 2rem)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const listVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <div className="fixed top-0 w-full z-20 backdrop-blur bg-base-100/0 ">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed inset-0 z-50 h-screen w-screen lg:hidden"
      >
        <motion.div
          variants={menuVariants}
          className="absolute inset-0 h-full w-full bg-base-100"
        />
        <motion.ul
          variants={listVariants}
          className="absolute grid h-full w-full content-center gap-4 px-10"
        >
          {navLinks.map(link => (
            <motion.li key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-3xl text-foreground/80 hover:text-accent transition text-center"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <button
              onClick={(e) => handleNavClick(e, "#footer")}
              className="block w-full text-3xl text-foreground/80 hover:text-accent transition py-2 text-center"
            >
              More About Me
            </button>
          </motion.li>
          <motion.li variants={itemVariants} className="flex justify-center py-2">
            <ThemeToggle />
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="btn w-full bg-accent text-accent-contrast hover:bg-accent-strong border-0"
            >
              Let&apos;s Talk
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>

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
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={(e) => handleNavClick(e, "#footer")}
            className="text-foreground/80 hover:text-accent transition-colors"
          >
            More About Me
          </button>
          <ThemeToggle />
          <MusicPlayer />
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="btn bg-accent text-accent-contrast hover:bg-accent-strong rounded-md border-0"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="relative z-50 lg:hidden text-accent">
          <Image
            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
