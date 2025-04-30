import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import SkillMarquee from '@/components/section/SkillMarquee'

const projects = [
  { id: 1, title: "Project 1", description: "Description of project 1", image: "/images/project1.jpg", link: "https://example.com/project1" },
  { id: 2, title: "Project 2", description: "Description of project 2", image: "/images/project2.jpg", link: "https://example.com/project2" },
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
              Web Designer & Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Premium Web Design, Development, and SEO services to help your business stand out.
            </p>
            <Link href="#about">
              <button className="btn btn-primary">Learn More</button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hi, I'm [Your Name], a passionate web designer and developer with a knack for creating beautiful and functional websites.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="card bg-base-100 shadow-xl">
                  <div className="relative h-48">
                    <Image src={project.image} alt={project.title} fill={true} sizes="100vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p>{project.description}</p>
                    <Link href={project.link} className="btn btn-primary">View Project</Link>
                  </div>
                </div>
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
        <section id="contact" className="py-16 bg-base-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <p className="text-lg text-gray-300 mb-4">Email: [your.email@example.com]</p>
            <p className="text-lg text-gray-300 mb-4">LinkedIn: [your-linkedin]</p>
            <p className="text-lg text-gray-300">GitHub: [your-github]</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}