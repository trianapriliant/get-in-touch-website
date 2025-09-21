"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  sizeClass: string
  category: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      {/* Desktop version - 4:5 ratio card with image overlay */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className={`hidden sm:grid rounded-xl overflow-hidden shadow-lg bg-neutral-900 border border-neutral-800 group aspect-[4/5]`}
      >
        <div className="w-full h-full overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={750}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          {/* Project info */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-[#2AF5D2] text-sm">{project.category}</p>
          </div>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center p-4">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <Link
              href={project.link}
              className="inline-flex items-center text-[#2AF5D2] hover:text-[#18c9a8] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Mobile version - 5:3 ratio card with image on the right */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className={`sm:hidden grid grid-cols-5 rounded-xl overflow-hidden shadow-lg bg-neutral-900 border border-neutral-800 group aspect-[5/3]`}
      >
        {/* Content on the left (3/5 width) */}
        <div className="col-span-3 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
          <p className="text-[#2AF5D2] text-sm mb-2">{project.category}</p>
          <p className="text-gray-400 text-xs line-clamp-2">{project.description}</p>
        </div>
        
        {/* Image on the right (2/5 width) with shadow effect */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
          {/* Shadow effect on the left side of the image */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
        </div>
      </motion.div>
    </>
  )
}