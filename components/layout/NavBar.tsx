
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MusicPlayer from '../feature/MusicPlayer';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skill", label: "Skill" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-20 backdrop-blur bg-transparent m-1">
      <div className="mx-auto max-w-7xl px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="text-white font-bold text-xl hover:text-primary transition-colors">
          Trian Aprilianto
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <MusicPlayer />
          <Link
            href="#contact"
            className="btn btn-outline hover:!text-white"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
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
          className="lg:hidden bg-neutral-900/10 px-4 py-6 rounded-b-xl shadow-md"
        >
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-lg text-white hover:text-primary transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="btn btn-outline w-full mt-2 hover:!text-black hover:bg-lime-500"
                onClick={() => setIsOpen(false)}
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
