import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="relative h-48">
        <Image src={project.image} alt={project.title} fill={true} sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <Link href={project.link} className="btn btn-primary">
            Lihat Proyek
          </Link>
        </div>
      </div>
    </div>
  )
}