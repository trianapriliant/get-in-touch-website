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
  sizeClass: string // Add sizeClass to the Project interface
}

const sizeVariants = [
  'row-span-1 col-span-1',
  'row-span-1 col-span-2',
  'row-span-2 col-span-1',
  'row-span-2 col-span-2',
]

// Predefined size classes for each project to ensure consistency
const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Deskripsi project 1',
    image: 'https://placehold.co/600x400?text=Project+1',
    link: '#',
    sizeClass: 'row-span-1 col-span-2',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Deskripsi project 2',
    image: 'https://placehold.co/600x400?text=Project+2',
    link: '#',
    sizeClass: 'row-span-2 col-span-1',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Deskripsi project 3',
    image: 'https://placehold.co/600x400?text=Project+3',
    link: '#',
    sizeClass: 'row-span-1 col-span-1',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Deskripsi project 4',
    image: 'https://placehold.co/600x400?text=Project+4',
    link: '#',
    sizeClass: 'row-span-1 col-span-1',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Deskripsi project 5',
    image: 'https://placehold.co/600x400?text=Project+5',
    link: '#',
    sizeClass: 'row-span-2 col-span-1',
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Deskripsi project 6',
    image: 'https://placehold.co/600x400?text=Project+6',
    link: '#',
    sizeClass: 'row-span-1 col-span-1',
  },
  {
    id: 7,
    title: 'Project 7',
    description: 'Deskripsi project 7',
    image: 'https://placehold.co/600x400?text=Project+7',
    link: '#',
    sizeClass: 'row-span-2 col-span-1',
  },
  {
    id: 8,
    title: 'Project 8',
    description: 'Deskripsi project 8',
    image: 'https://placehold.co/600x400?text=Project+8',
    link: '#',
    sizeClass: 'row-span-2 col-span-1',
  },
  {
    id: 9,
    title: 'Project 9',
    description: 'Deskripsi project 9',
    image: 'https://placehold.co/600x400?text=Project+9',
    link: '#',
    sizeClass: 'row-span-2 col-span-1',
  },
  {
    id: 10,
    title: 'Project 10',
    description: 'Deskripsi project 10',
    image: 'https://placehold.co/600x400?text=Project+10',
    link: '#',
    sizeClass: 'row-span-1 col-span-1',
  },
  {
    id: 11,
    title: 'Project 11',
    description: 'Deskripsi project 11',
    image: 'https://placehold.co/600x400?text=Project+11',
    link: '#',
    sizeClass: 'row-span-2 col-span-2',
  },
  {
    id: 12,
    title: 'Project 12',
    description: 'Deskripsi project 12',
    image: 'https://placehold.co/600x400?text=Project+12',
    link: '#',
    sizeClass: 'row-span-1 col-span-1',
  },
]

// Animation variants for the project card
const cardVariants = {
  hidden: { opacity: 0, y: 30, rotate: 2 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: idx * 0.1,
    },
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}

// Animation variants for the overlay
const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function ProjectGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 px-6 bg-gray text-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Work & Visual Feed
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 auto-rows-[200px]">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            custom={idx}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover="hover"
            variants={cardVariants}
            className={`relative rounded-lg overflow-hidden shadow-lg ${project.sizeClass} bg-neutral-900 group`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="transition-opacity duration-300 group-hover:opacity-75"
            />
            <motion.div
              initial="hidden"
              animate="hidden"
              whileHover="visible"
              variants={overlayVariants}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-end"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </motion.div>
            <Link
              href={project.link}
              className="absolute inset-0 z-10"
              aria-label={`View details for ${project.title}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}