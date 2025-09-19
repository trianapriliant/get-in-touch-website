'use client';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function DreamsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">My Dreams</h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Aspirations that drive my journey forward
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black rounded-xl shadow-md p-8 border border-[#078f7a]">
                <p className="text-gray-300 mb-6">
                  Dreams are the invisible threads that weave through every decision I make and project I undertake. 
                  They serve as both compass and destination, guiding my professional growth while inspiring me to 
                  push boundaries in my craft. My ultimate dream is to create technology that genuinely improves 
                  people&apos;s lives—not just through flashy features or impressive metrics, but through meaningful 
                  solutions that address real human needs with empathy and dignity.
                </p>

                <p className="text-gray-300 mb-6">
                  Professionally, I aspire to lead teams that pioneer inclusive design practices. I envision building 
                  products that are inherently accessible, considering diverse abilities and backgrounds from the 
                  very first wireframe. My dream is to establish a design system that becomes an industry standard 
                  for ethical, user-first development. I want to mentor the next generation of designers and developers, 
                  sharing knowledge that empowers others to create technology with conscience.
                </p>

                <p className="text-gray-300 mb-6">
                  On a broader scale, I dream of contributing to projects that tackle pressing global challenges. 
                  Whether it&apos;s developing platforms that facilitate better healthcare access, creating educational 
                  tools that democratize learning, or building systems that promote environmental sustainability, 
                  I want my skills to serve purposes greater than profit margins. I&apos;m particularly passionate about 
                  leveraging artificial intelligence responsibly—to augment human capabilities rather than replace 
                  them, and to solve complex problems like climate modeling or disease prediction.
                </p>

                <p className="text-gray-300 mb-6">
                  Entrepreneurially, I harbor dreams of founding a company that embodies my values—where innovation 
                  goes hand in hand with social responsibility. This hypothetical venture would prioritize employee 
                  wellbeing, maintain transparent communication with stakeholders, and measure success not just by 
                  financial returns but by positive impact metrics. I imagine creating a workplace culture that 
                  fosters experimentation, celebrates failure as learning, and encourages interdisciplinary collaboration.
                </p>

                <p className="text-gray-300 mb-6">
                  Personally, I dream of achieving a harmonious work-life integration where my professional 
                  accomplishments enhance rather than compromise my relationships and personal growth. I envision 
                  having the freedom to pursue passion projects that may never generate revenue but fulfill my 
                  creative spirit. Traveling to experience different cultures and design philosophies worldwide 
                  remains a persistent aspiration, believing that broadening perspectives inevitably enriches 
                  creative output.
                </p>

                <p className="text-gray-300 mb-6">
                  In the realm of recognition, I hope to eventually contribute to the design and development 
                  community through speaking engagements, writing, or open-source contributions that help advance 
                  the field. My dream is to see innovations I&apos;ve been part of become case studies in design schools, 
                  inspiring future creators to think beyond conventional boundaries. Ultimately, I want to look back 
                  knowing that my work helped shape a digital landscape that&apos;s more equitable, intuitive, and 
                  human-centered.
                </p>

                <p className="text-gray-300">
                  Perhaps most importantly, I dream of maintaining wonder and curiosity throughout my career. 
                  In an industry that can sometimes prioritize speed over thoughtfulness, I want to be known for 
                  asking &quot;what if?&quot; and &quot;why not?&quot; rather than simply executing tasks efficiently. These dreams 
                  may seem ambitious, even idealistic, but they&apos;re what propel me forward each morning, excited 
                  about the possibilities each new project brings.
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