'use client';
import { useState } from 'react';

export default function AboutSection() {
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
                  {['For Anyone', 'recruiters', 'design-directors', 'product-designers', 'product-managers', 'engineers'].map((option) => (
                    <div
                      key={option}
                      className={`option ${option} cursor-pointer px-4 py-2 rounded-full text-gray-300 hover:text-white ${
                        activeOption === option ? 'is--active bg-gray-100/50' : ''
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                    </div>
                  ))}
                </div>

                <div className="texts">
                  <h1 className={`text For Anyone text-2xl text-white mb-4 ${activeOption === 'For Anyone' ? 'block' : 'hidden'}`}>
                    Hello there, I’m a designer who cares about making beautiful things that help people.
                  </h1>
                  <h1 className={`text recruiters text-2xl text-white mb-4 ${activeOption === 'recruiters' ? 'block' : 'hidden'}`}>
                    I’m a product designer with 15 years of experience across brand and product, at companies large and small. I’m not actively looking for a new role.
                  </h1>
                  <h1 className={`text design-directors text-2xl text-white mb-4 ${activeOption === 'design-directors' ? 'block' : 'hidden'}`}>
                    I take pride in my craft, and love mentoring earlier career designers. I develop cross functional partnerships, and thrive in complex, ambiguous environments.
                  </h1>
                  <h1 className={`text product-designers text-2xl text-white mb-4 ${activeOption === 'product-designers' ? 'block' : 'hidden'}`}>
                    I’m a systems thinker with a high bar for quality. From process to pixels, I’ll collaborate with you, learn from you, and help make something we’re proud of.
                  </h1>
                  <h1 className={`text product-managers text-2xl text-white mb-4 ${activeOption === 'product-managers' ? 'block' : 'hidden'}`}>
                    I bring end-to-end product acumen, from vision and strategy to discovery and delivery. I’ll partner closely with you to generate the highest impact possible.
                  </h1>
                  <h1 className={`text engineers text-2xl text-white mb-4 ${activeOption === 'engineers' ? 'block' : 'hidden'}`}>
                    I’m highly technical and while I’m not an engineer, I know my way around & can speak “fluently” with you; I built{' '}
                    <a href="https://billysweeney.com/" className="underline">this.site</a>,{' '}
                    <a href="https://ratio.haus/" target="_blank" rel="noopener noreferrer" className="underline">this.one</a>, and{' '}
                    <a href="https://gibberishfactory.com/" target="_blank" rel="noopener noreferrer" className="underline">this.too</a>.
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-8">
              <a href="#contact" className="text-gray-300 hover:text-white">Connect</a>
              <a href="https://x.com/yourusername" className="text-gray-300 hover:text-white">Twitter/X</a>
              <a href="https://linkedin.com/in/yourusername" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="https://instagram.com/yourusername" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white">Email</a>
            </div>
          </div>

          <div className="profile-image w-full lg:flex-1">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full max-h-[1000px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
