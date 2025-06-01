'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [activeOption, setActiveOption] = useState('For Anyone');

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  return (
    <section id="about" className="py-16 bg-gray-1000">
      <div className="container mx-auto px-4">
        <div className="about-container flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="section intro relative">
              <div className="content">
                {/* Gradasi di sisi kiri dan kanan dihapus */}

                <div className="options flex flex-wrap gap-4 mb-8">
                  {[ 'For Anyone', 'Small Business', 'Student', 'Freelancer', 'Events', 'Projects'].map((option) => (
                    <div
                      key={option}
                      className={`option ${option} cursor-pointer px-4 py-2 rounded-full text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white ${
                        activeOption === option ? 'btn btn-outline is--active bg-gray-900/0 dark:bg-gray-100/0' : ''
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                    </div>
                  ))}
                </div>

                <div className="texts">
                  <h1 className={`text For Anyone text-2xl text-white mb-4 ${activeOption === 'For Anyone' ? 'block' : 'hidden'}`}>
                    Hi there! I’m just starting out as a small designer & developer, and I love helping people bring their ideas to life through thoughtful, affordable thing.
                  </h1>
                  <h1 className={`text Small Business text-2xl text-white mb-4 ${activeOption === 'Small Business' ? 'block' : 'hidden'}`}>
                    Need a logo, promo banner, or Instagram feed that looks clean and attractive? I offer affordable designs to help build your brand presence.
                  </h1>
                  <h1 className={`text Student text-2xl text-white mb-4 ${activeOption === 'Student' ? 'block' : 'hidden'}`}>
                    I design posters, presentations, infographics, and other academic visuals to help you communicate your ideas more clearly and professionally.
                  </h1>
                  <h1 className={`text Freelancer text-2xl text-white mb-4 ${activeOption === 'Freelancer' ? 'block' : 'hidden'}`}>
                    Build your personal website brand with simple, clean visual with mini portfolios to social media templates that reflect your skills and style.
                  </h1>
                  <h1 className={`text Events text-2xl text-white mb-4 ${activeOption === 'Events' ? 'block' : 'hidden'}`}>
                    Digital invitations, e-certificates, flyers, and promotional materials for your seminars, workshops, or community events — tailored to your needs.
                  </h1>
                  <h1 className={`text Projects text-2xl text-white mb-4 ${activeOption === 'Projects' ? 'block' : 'hidden'}`}>
                    Got a creative idea or side project? I can help you turn it into visuals that are simple, effective, and ready to use.
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-8">
              <a href="#contact" className="text-gray-300 hover:text-white">Connect</a>
              <a href="https://x.com/trianapril12" className="text-gray-300 hover:text-white">GitHub</a>
              <a href="https://x.com/trianapril12" className="text-gray-300 hover:text-white">Twitter/X</a>
              <a href="https://linkedin.com/in/trianaprilianto3" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="https://instagram.com/trianapriliant" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="mailto:trianaprilinto3@gmail.com" className="text-gray-300 hover:text-white">Email</a>
            </div>
          </div>

          <div className="relative w-full aspect-[3/4] lg:flex-1">
            <Image
              src="/images/profile/profile.png"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
