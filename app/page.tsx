import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SkillMarquee from '@/components/SkillMarquee'
import AboutSection from '@/components/AboutSection'
import ProjectGallery from '@/components/ProjectGallery'
import SkillShow from '@/components/SkillShow'
import SkillShowDesign from '@/components/SkillShowDesign'

const projects = [
  { id: 1, title: "Project 1", image: "/images/project1.jpg", link: "https://example.com/project1" },
  { id: 2, title: "Project 2", image: "/images/project2.jpg", link: "https://example.com/project2" },
  { id: 3, title: "Project 3", image: "/images/project3.jpg", link: "https://example.com/project3" },
  { id: 4, title: "Project 4", image: "/images/project4.jpg", link: "https://example.com/project4" },
]

const skillsTop = [
  { name: 'Git', src: '/images/skills/git.png' },
  { name: 'CSS', src: '/images/skills/css.png' },
  { name: 'HTML', src: "/images/skills/html.png" },
  { name: 'JavaScript', src: '/images/skills/javascript.png' },
  { name: 'NextJS', src: '/images/skills/nextjs.png' },
  { name: 'GitHub', src: '/images/skills/github.png' },
  { name: 'React', src: '/images/skills/react.png' },
  { name: 'Typescript', src: '/images/skills/typescript.png' },
  { name: 'Python', src: '/images/skills/python.png' },
]

const skillsBottom = [
  { name: 'Gimp', src: '/images/skills/gimp.png' },
  { name: 'Inkscape', src: '/images/skills/inkscape.png' },
  { name: 'Kdenlive', src: "/images/skills/kdenlive.png" },
  { name: 'Blender', src: '/images/skills/blender.png' },
  { name: 'Spline', src: '/images/skills/spline.png' },
  { name: 'Notion', src: '/images/skills/notion.png' },
  { name: 'LinuxOS', src: '/images/skills/arch.png' },
  { name: 'Figma', src: '/images/skills/figma.png' },
  { name: 'VN', src: '/images/skills/vn.png' },
]


export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 mr-4 ml-4">
              Small Designer & Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 mr-6 ml-6">
              Premium & Cheap Web/Graphic Design, Development, and SEO services to help your business stand out.
            </p>
            <Link href="#about">
              <button className="btn btn-outline">Dive in</button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-base-400">
        {/* Project Gallery Section */}
        <ProjectGallery />
        </section>

        {/* Skill Section */}
        <section id="skill" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Playground &  Interest</h2>
            <SkillMarquee skills={skillsTop} direction="left" />
          </div>
          <div className="container mx-auto px-4">
            <SkillMarquee skills={skillsBottom} direction="right" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-base-100/20">
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