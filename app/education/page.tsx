'use client';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { educationData } from '@/data/education';

export default function EducationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">My Educational Journey</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {educationData.map((edu) => (
                  <div 
                    key={edu.id} 
                    className="bg-black rounded-xl shadow-md p-6 border border-[#078f7a]"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                        <p className="text-lg text-[#2AF5D2]">{edu.degree}</p>
                      </div>
                      <span className="mt-2 md:mt-0 px-3 py-1 bg-[#078f7a] text-white rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-400">GPA: {edu.gpa}</span>
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