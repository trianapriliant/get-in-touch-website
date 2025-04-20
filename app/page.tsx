import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SkillMarquee from '@/components/SkillMarquee'
import AboutSection from '@/components/AboutSection'
import ProjectGallery from '@/components/ProjectGallery'

const projects = [
  { id: 1, title: "Project 1", image: "/images/project1.jpg", link: "https://example.com/project1" },
  { id: 2, title: "Project 2", image: "/images/project2.jpg", link: "https://example.com/project2" },
  { id: 3, title: "Project 3", image: "/images/project3.jpg", link: "https://example.com/project3" },
  { id: 4, title: "Project 4", image: "/images/project4.jpg", link: "https://example.com/project4" },
]

const skillsTop = [
  { name: 'Bootstrap', color: 'bg-purple-600' },
  { name: 'JSON', color: 'bg-gray-600' },
  { name: 'Framer Motion', color: 'bg-blue-600' },
  { name: 'React Native', color: 'bg-cyan-600' },
  { name: 'TypeScript', color: 'bg-blue-800' },
]

const skillsBottom = [
  { name: 'SASS', color: 'bg-pink-600' },
  { name: 'Bootstrap', color: 'bg-purple-600' },
  { name: 'Express.js', color: 'bg-green-600' },
  { name: 'TailwindCSS', color: 'bg-teal-600' },
  { name: 'Storybook', color: 'bg-pink-500' },
  { name: 'React', color: 'bg-blue-500' },
]

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              Small Designer & Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Premium & Cheap Web/Graphic Design, Development, and SEO services to help your business stand out.
            </p>
            <Link href="#about">
              <button className="btn btn-outline">Dive in</button>
            </Link>
          </div>
        </section>
        <AboutSection />
        {/* About Section */}

        <ProjectGallery />
        {/* Projects Section */}
        <section id="projects" className="py-16 bg-base-400">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Work & Visual Feed</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <Link key={project.id} href={project.link} className="project-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Section */}
        <section id="skill" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
            <SkillMarquee skills={skillsTop} direction="right" />
            <SkillMarquee skills={skillsBottom} direction="left" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-base-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto">
              <div className="mb-4">
                <label className="block text-lg mb-2">Name</label>
                <input type="text" name="name" className="input input-bordered w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2">Email</label>
                <input type="email" name="email" className="input input-bordered w-full" required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}