'use client';

import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function HobbiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">My Hobbies</h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              What I enjoy doing outside of work
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black rounded-xl shadow-md p-8 border border-[#078f7a]">
                <p className="text-gray-300 mb-6">
                  When I&apos;m not designing interfaces or writing code, you&apos;ll often find me immersed in activities that 
                  fuel my creativity and curiosity. Photography is one of my greatest passions—I love capturing moments 
                  that tell stories, whether it&apos;s the play of light through city architecture or the subtle expressions 
                  of people in their natural environments. This hobby has significantly influenced my eye for composition 
                  and attention to detail in my professional work.
                </p>

                <p className="text-gray-300 mb-6">
                  Reading occupies a significant portion of my free time. I&apos;m drawn to science fiction and fantasy 
                  novels that transport me to different worlds, but I also enjoy non-fiction books on psychology, 
                  philosophy, and technology trends. Authors like Ursula K. Le Guin, Neal Stephenson, and Yuval Noah 
                  Harari have profoundly shaped my perspective on society and human nature. I maintain a physical 
                  bookshelf at home and use an e-reader for travel, always with at least two books in progress.
                </p>

                <p className="text-gray-300 mb-6">
                  Cooking is both a creative outlet and a meditative practice for me. I enjoy experimenting with flavors 
                  from different cuisines, particularly Asian and Mediterranean dishes. There&apos;s something satisfying 
                  about following a recipe precisely and then improvising with spices and ingredients. Weekend cooking 
                  sessions often involve trying complex techniques like fermentation or sous vide, which also appeal 
                  to my methodical nature.
                </p>

                <p className="text-gray-300 mb-6">
                  Gaming has been a constant companion since childhood, evolving from simple puzzle games to complex 
                  strategy and narrative-driven experiences. I appreciate games that challenge my problem-solving 
                  abilities or tell compelling stories. Indie games hold a special place in my heart for their 
                  innovative mechanics and artistic expression. Playing games has taught me valuable lessons about 
                  user experience design—the best games intuitively guide players without explicit instruction.
                </p>

                <p className="text-gray-300 mb-6">
                  Hiking and outdoor exploration provide balance to my screen-heavy profession. I seek out trails 
                  that offer both physical challenge and visual rewards, often combining hikes with photography 
                  opportunities. These experiences ground me and remind me of the importance of simplicity and 
                  natural beauty—concepts I try to incorporate into my digital designs. The problem-solving aspects 
                  of navigation and route planning also appeal to my analytical side.
                </p>

                <p className="text-gray-300">
                  Learning new skills is a perpetual hobby of mine. Recently, I&apos;ve been exploring music production 
                  using digital audio workstations, fascinated by the parallels between sound design and visual 
                  design. I&apos;m also teaching myself basic principles of 3D modeling and animation, which complements 
                  my spatial reasoning abilities. These pursuits not only provide relaxation but also broaden my 
                  creative toolkit and inspire fresh approaches to familiar challenges.
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