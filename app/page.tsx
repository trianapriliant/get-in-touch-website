import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SkillMarquee from '@/components/SkillMarquee';
import AboutSection from '@/components/AboutSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactForm from '@/components/ContactForm';

import SplineViewer from '@/components/SplineViewer';
import Waveform from '@/components/WaveForm'; // Corrected import (WaveForm -> Waveform)

import SkillShow from '@/components/SkillShow';
import SkillShowDesign from '@/components/SkillShowDesign';

import { skillsBottom } from '@/data/skills';
import { skillsTop } from '@/data/skills';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative">
        <Hero />
        </section>
        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-base-400">
          <ProjectGallery />
        </section>

        {/* Skill Section */}
        <section id="skill" className="py-16">
          <div className='container mx-auto px-4 text-center'>
            <h2 className="text-4xl font-bold mb-8">Playground & Interest</h2>
          </div>
          <div className="container mx-auto px-4">
            <SkillMarquee skills={skillsTop} direction="right" />
          </div>
          <div className="container mx-auto px-4">
            <SkillMarquee skills={skillsBottom} direction="left" />
          </div>
        </section>

        {/* ContactForm Section */}
        <section id="contact" className="py-16 bg-base-100/20">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}