import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: "Project 1", description: "Description of project 1", image: "/images/project1.jpg", link: "https://example.com/project1" },
  { id: 2, title: "Project 2", description: "Description of project 2", image: "/images/project2.jpg", link: "https://example.com/project2" },
]

export default function Projects() {
  return (
    <div>
      <NavBar />
      <main className="pt-16 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
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
      </main>
      <Footer />
    </div>
  )
}