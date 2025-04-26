// components/ProjectGallery.tsx
"use client"
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

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