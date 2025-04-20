// components/ProjectGallery.tsx
"use client"
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Deskripsi project 1',
    image: '/projects/img1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Deskripsi project 2',
    image: '/projects/img2.jpg',
    link: '#',
  },
  // tambahkan lainnya
]

const sizeVariants = [
  'row-span-1 col-span-1',
  'row-span-2 col-span-2',
  'row-span-1 col-span-2',
  'row-span-2 col-span-1',
]

export default function ProjectGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-16 px-6 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Work & Visual Feed
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 auto-rows-[200px]">
        {projects.map((project, idx) => {
          const sizeClass = sizeVariants[idx % sizeVariants.length]

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 ${sizeClass} bg-neutral-900`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
              <Link href={project.link} className="absolute inset-0 z-10" aria-label={`Link to ${project.title}`} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
