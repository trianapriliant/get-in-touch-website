"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"

// Kategori tab
const categories = ["Product", "Website", "UI/UX", "Banner"]

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("Product")

  const filteredProjects = projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16 px-6 bg-gray text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Work & Visual Feed</h2>
        <p className="text-gray-400 text-center mb-12">Explore our diverse portfolio of projects</p>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-700 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 font-medium text-sm relative transition-colors duration-300 ${
                activeCategory === cat
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2AF5D2]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-xl overflow-hidden shadow-lg bg-neutral-900 border border-neutral-800 flex flex-row md:flex-col group`}
                >
                  <div className="w-1/3 md:w-full aspect-video md:aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Shadow divider for mobile view */}
                  <div className="w-px shadow-[0_0_4px_0px_rgba(255,255,255,0.1)] h-3/4 self-center block md:hidden"></div>
                  <div className="p-4 md:p-5 flex-grow flex flex-col w-2/3 md:w-full">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-3 md:mb-4 flex-grow text-xs md:text-sm">{project.description}</p>
                    <div className="mt-auto flex justify-between items-center">
                      <Link
                        href={project.link}
                        className="inline-flex items-center text-[#2AF5D2] hover:text-[#18c9a8] transition-colors duration-300 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-3 w-3 md:h-4 md:w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
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
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center py-12">
                No projects available in this category.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
