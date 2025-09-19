'use client';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function JourneyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">My Journey</h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              The path that shaped who I am today
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black rounded-xl shadow-md p-8 border border-[#078f7a]">
                <p className="text-gray-300 mb-6">
                  My journey in the world of design and technology began unexpectedly during my university years. Initially 
                  pursuing a degree in business administration, I found myself drawn to the creative aspects of marketing 
                  and digital communications. It was during a required course on web fundamentals that I first encountered 
                  HTML and CSS, and I was instantly captivated by the ability to create something from nothing with just 
                  lines of code.
                </p>

                <p className="text-gray-300 mb-6">
                  This newfound passion led me to switch majors to computer science, despite having no prior programming 
                  experience. The transition wasn&apos;t easy—late nights spent debugging code and countless tutorials consumed 
                  on weekends became the norm. But with each small victory, whether it was getting a form to validate 
                  correctly or making a div appear exactly where I wanted it, my confidence grew.
                </p>

                <p className="text-gray-300 mb-6">
                  My first internship at a small digital agency was transformative. Working alongside seasoned designers 
                  and developers, I learned the importance of collaboration and user-centered thinking. I discovered that 
                  great products aren&apos;t just about writing clean code or creating beautiful interfaces—they&apos;re about 
                  solving real problems for real people. This experience solidified my decision to pursue a career at the 
                  intersection of design and technology.
                </p>

                <p className="text-gray-300 mb-6">
                  Over the years, I&apos;ve had the privilege of working on diverse projects—from e-commerce platforms for 
                  startups to enterprise solutions for Fortune 500 companies. Each project brought unique challenges that 
                  pushed me to expand my skillset and think creatively. I&apos;ve evolved from a junior developer focused solely 
                  on implementation to a senior role where I guide strategy, mentor team members, and contribute to product 
                  vision.
                </p>

                <p className="text-gray-300 mb-6">
                  One of the most rewarding aspects of my journey has been witnessing the evolution of the industry itself. 
                  When I started, responsive design was becoming mainstream and mobile-first thinking was gaining traction. 
                  Today, we&apos;re exploring immersive experiences with AR/VR, grappling with ethical AI implementations, 
                  and pushing the boundaries of what&apos;s possible on the web. Staying curious and embracing lifelong learning 
                  has been essential to remaining relevant and excited about the work I do.
                </p>

                <p className="text-gray-300">
                  Looking ahead, I&apos;m passionate about using technology to create positive impact. Whether it&apos;s improving 
                  accessibility in digital products or contributing to open-source projects that empower others, I believe 
                  we have a responsibility to build a better digital world. My journey continues with each project, 
                  each challenge, and each opportunity to learn something new.
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