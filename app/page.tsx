import Hero from '@/components/section/Hero';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SkillMarquee from '@/components/section/SkillMarquee';
import About from '@/components/section/About';
import ProjectGallery from '@/components/section/ProjectGallery';
import ContactForm from '@/components/section/ContactForm';
import { skillsBottom } from '@/data/skills';
import { skillsTop } from '@/data/skills';

export default function Home() {
  return (
    <div className='bg-base-400'>
      <NavBar />
      <main className="pt-16">

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative">
        <Hero />
        </section>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-base-400">
          <ProjectGallery />
        </section>

        {/* Skill Section */}
        <section id="skill" className="py-16">
          <div className='container mx-auto px-4 text-center'>
            <h2 className="text-4xl font-bold mb-2">Playground & Interest</h2>
          </div>
          <div className="container mx-auto px-4">
            <SkillMarquee skills={skillsTop} direction="right" />
          </div>
          <div className="container mx-auto px-4">
            <SkillMarquee skills={skillsBottom} direction="left" />
          </div>
        </section>

        {/* ContactForm Section */}
        <section id="contact" className="py-16 bg-base-100/3">
          <ContactForm />
        </section>

      </main>
      <Footer />
    </div>
  );
}