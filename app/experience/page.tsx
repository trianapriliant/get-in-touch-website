'use client';

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { experienceData } from '@/data/experience';

export default function ExperiencePage() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Work Experience</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            
            {/* Experience Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent transform translate-x-[-50%]"></div>
                
                {/* Experience items */}
                {experienceData.map((exp, index) => (
                  <div 
                    key={exp.id} 
                    className="relative pl-12 pb-12"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-2 w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                      activeExperience === index 
                        ? 'border-[#2AF5D2] bg-[#2AF5D2]' 
                        : 'border-accent bg-background'
                    }`}>
                      {activeExperience === index && (
                        <div className="w-2 h-2 bg-background rounded-full"></div>
                      )}
                    </div>
                    
                    {/* Experience card */}
                    <div 
                      className={`bg-background rounded-xl shadow-md p-6 border cursor-pointer transition-all ${
                        activeExperience === index 
                          ? 'border-[#2AF5D2] shadow-lg' 
                          : 'border-accent hover:border-accent-strong'
                      }`}
                      onClick={() => setActiveExperience(index)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                          <p className="text-lg text-accent">{exp.company}</p>
                        </div>
                        <span className="mt-2 md:mt-0 px-3 py-1 bg-accent text-accent-contrast rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-foreground/80 mb-4">{exp.description}</p>
                      
                      {activeExperience === index && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <span className="text-accent mr-2">•</span>
                                <span className="text-foreground/80">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        </main>

      <Footer />
    </div>
  );
}