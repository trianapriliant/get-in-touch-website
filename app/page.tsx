import Hero from '@/components/section/Hero';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SkillMarquee from '@/components/section/SkillMarquee';
import About from '@/components/section/About';
import ProjectGallery from '@/components/section/ProjectGallery';
import ContactForm from '@/components/section/ContactForm';
import { skillsBottom } from '@/data/skills';
import { skillsTop } from '@/data/skills';
import HorizontalGallery from "@/components/section/HorizontalGallery"
import { projects } from "@/data/projects"
import IntroScroll from '@/components/section/IntroScroll';

export default function Home() {
  return (
    <div className='bg-base-400'>
      <NavBar />
      <main>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative">
        <Hero />
        </section>

        {/* About Section */}
        <About />

        {/* Intro Scroll Section */}
        <section id="intro-scroll" className="py-16 bg-gray-1000 mt-15">
          <IntroScroll
            title="Welcome to My Portfolio"
            subtitle="Explore my work and creative projects"
            targetId="portfolio-alt"
          />
        </section>

        {/* Horizontal Gallery Section */}
        <section id="portfolio-alt" className="">
        <HorizontalGallery items={projects} gap={10} />
        </section>


        {/* Projects Section */}
        <section id="projects">
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