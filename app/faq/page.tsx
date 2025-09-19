'use client';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Answers to common questions about my work, process, and approach
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black rounded-xl shadow-md p-8 border border-[#078f7a]">
                <h2 className="text-2xl font-bold mb-6 text-[#2AF5D2]">What inspires your design philosophy?</h2>
                <p className="text-gray-300 mb-8">
                  I believe that great design is the intersection of art and functionality. My inspiration comes from 
                  observing how people interact with technology in their daily lives. I strive to create interfaces that 
                  are not only visually appealing but also intuitive and accessible to everyone. Nature, architecture, 
                  and minimalism heavily influence my aesthetic choices.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-[#2AF5D2]">How do you approach a new project?</h2>
                <p className="text-gray-300 mb-8">
                  Every project begins with understanding the problem we&apos;re trying to solve. I spend time researching the 
                  target audience, analyzing competitors, and defining clear objectives. From there, I move to sketching 
                  initial concepts, creating wireframes, and iterating based on feedback. I believe in collaborative design, 
                  working closely with developers, stakeholders, and end-users throughout the process.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-[#2AF5D2]">What tools do you use in your workflow?</h2>
                <p className="text-gray-300 mb-8">
                  My toolkit varies depending on the project phase. For design, I primarily use Figma for its collaborative 
                  features and real-time co-editing capabilities. For development, I work with React, Next.js, and TypeScript, 
                  leveraging Tailwind CSS for styling. I also use Git for version control, VS Code as my primary editor, and 
                  Chrome DevTools for debugging. For prototyping, I sometimes use tools like Principle or Framer.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-[#2AF5D2]">How do you stay updated with industry trends?</h2>
                <p className="text-gray-300 mb-8">
                  The tech industry evolves rapidly, so continuous learning is essential. I regularly follow design and 
                  development blogs, listen to podcasts, and participate in online communities. I also attend virtual 
                  conferences and workshops whenever possible. Experimenting with new technologies in personal projects 
                  helps me stay hands-on with emerging trends. Sharing knowledge through mentoring and writing also 
                  reinforces my learning.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-[#2AF5D2]">What makes a project successful in your opinion?</h2>
                <p className="text-gray-300">
                  Success isn&apos;t just about aesthetics or technical excellence—it&apos;s about impact. A successful project solves 
                  real problems for real people. It meets business objectives while providing an exceptional user experience. 
                  Key factors include clear communication between all stakeholders, iterative design and development processes, 
                  thorough testing, and measurable outcomes. Most importantly, a successful project is one that continues 
                  to evolve and improve based on user feedback.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}