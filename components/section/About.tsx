'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

export default function About() {
  const [activeOption, setActiveOption] = useState('For Anyone');

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  // tambahkan variants di atas return atau di file scope
  const imgVariants = {
    rest: {
      scale: 1,
      y: 0,
      filter: "grayscale(100%) contrast(95%)",
      boxShadow: "0px 8px 24px rgba(0,0,0,0.18)",
    },
    hover: {
      scale: 1.035,
      y: -6,
      filter: "grayscale(0%) contrast(104%) saturate(115%)",
      boxShadow: "0px 20px 50px rgba(0,0,0,0.32)",
    },
  }

  const overlayVariants = {
    rest: { y: 12, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  }

  // Variants for tab animation
  const tabVariants = {
    inactive: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    },
    active: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-16 bg-gray-1000">
      <div className="container mx-auto px-4">
        {/* pastikan pada large screens baris disejajarkan di tengah vertikal */}
        {/* batasi lebar baris dan center seluruh block agar tidak menempel ke tepi */}
        <div className="about-container flex flex-col lg:flex-row gap-8 lg:items-center min-h-[60vh] max-w-6xl mx-auto justify-center">
          {/* teks diatur agar ter-center vertikal di kolomnya; beri padding kanan untuk keseimbangan */}
          <div className="flex-1 flex flex-col justify-center pr-6 lg:pr-12">
            <div className="section intro relative">
              <div className="content">
                {/* Gradasi di sisi kiri dan kanan dihapus */}

                <div className="options flex flex-wrap gap-4 mb-8">
                  {[ 'For Anyone', 'Small Business', 'Student', 'Freelancer', 'Events', 'Projects'].map((option) => (
                    <motion.div
                      key={option}
                      className={`option ${option} cursor-pointer px-4 py-2 rounded-full transition-colors ${
                        activeOption === option
                          ? 'is--active bg-accent text-accent-contrast'
                          : 'text-gray-900 dark:text-gray-300 hover:text-accent hover:bg-accent/10'
                      }`}
                      onClick={() => handleOptionClick(option)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                    </motion.div>
                  ))}
                </div>

                <div className="texts" style={{ minHeight: '120px' }}>
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={activeOption}
                      variants={tabVariants}
                      initial="inactive"
                      animate="active"
                      exit="inactive"
                      className="text text-2xl text-white mb-4"
                    >
                      {activeOption === 'For Anyone' && (
                        "Hi there! I'm just starting out as a small designer & developer, and I love helping people bring their ideas to life through thoughtful, affordable thing."
                      )}
                      {activeOption === 'Small Business' && (
                        "Need a logo, promo banner, or Instagram feed that looks clean and attractive? I offer affordable designs to help build your brand presence."
                      )}
                      {activeOption === 'Student' && (
                        "I design posters, presentations, infographics, and other academic visuals to help you communicate your ideas more clearly and professionally."
                      )}
                      {activeOption === 'Freelancer' && (
                        "Build your personal website brand with simple, clean visual with mini portfolios to social media templates that reflect your skills and style."
                      )}
                      {activeOption === 'Events' && (
                        "Digital invitations, e-certificates, flyers, and promotional materials for your seminars, workshops, or community events — tailored to your needs."
                      )}
                      {activeOption === 'Projects' && (
                        "Got a creative idea or side project? I can help you turn it into visuals that are simple, effective, and ready to use."
                      )}
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-8">
              <a href="#contact" className="text-gray-300 hover:text-accent transition-colors">Connect</a>
              <a href="https://x.com/trianapril12" className="text-gray-300 hover:text-accent transition-colors">GitHub</a>
              <a href="https://x.com/trianapril12" className="text-gray-300 hover:text-accent transition-colors">Twitter/X</a>
              <a href="https://linkedin.com/in/trianaprilianto3" className="text-gray-300 hover:text-accent transition-colors">LinkedIn</a>
              <a href="https://instagram.com/trianapriliant" className="text-gray-300 hover:text-accent transition-colors">Instagram</a>
              <a href="mailto:trianaprilinto3@gmail.com" className="text-gray-300 hover:text-accent transition-colors">Email</a>
            </div>
          </div>

          <motion.div
            className="relative flex-none w-full lg:w-[520px] rounded-lg overflow-hidden self-center"
             initial="rest"
             whileHover="hover"
             animate="rest"
             variants={imgVariants}
             transition={{ duration: 0.28, ease: "easeOut" }}
             style={{ willChange: "transform, filter, boxShadow" }}
           >
            {/* Use explicit width/height so image won't grow to fill viewport height on large screens.
                Adjust lg:w and height below to taste (now wider on desktop). */}
            <Image
              src="/images/profile/profile.png"
              alt="Profile"
              width={520}
              height={700}
              sizes="(max-width: 640px) 60vw, 520px"
              className="object-cover w-full h-auto"
            />

            {/* overlay judul muncul saat hover */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white"
              variants={overlayVariants}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <h3 className="text-sm font-semibold">Trian Aprilianto</h3>
              <p className="text-xs text-gray-200">Designer & Developer</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
