'use client';

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { ongoingProjectsData, collaborationsData } from '@/data/projectsOngoing';

export default function ProjectsOngoingPage() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(ongoingProjectsData[0]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Ongoing Projects</h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              A look into my current projects and collaborations that are shaping the future.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 bg-black rounded-lg border border-[#078f7a]">
                <button
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-[#2AF5D2] text-black shadow'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('projects')}
                >
                  Current Projects
                </button>
                <button
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'collaborations'
                      ? 'bg-[#2AF5D2] text-black shadow'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('collaborations')}
                >
                  Collaborations
                </button>
              </div>
            </div>

            {/* Projects Content */}
            {activeTab === 'projects' && (
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Projects List */}
                <div className="lg:w-1/3">
                  <h2 className="text-2xl font-bold mb-8">Current Projects</h2>
                  <div className="space-y-4">
                    {ongoingProjectsData.map((project) => (
                      <div 
                        key={project.id} 
                        className={`bg-black rounded-xl shadow-md p-5 border cursor-pointer transition-all ${
                          selectedProject.id === project.id 
                            ? 'ring-2 ring-[#2AF5D2] border-[#2AF5D2]' 
                            : 'border-[#078f7a] hover:border-[#18c9a8]'
                        }`}
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-white">{project.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'In Progress' ? 'bg-[#078f7a] text-white' :
                            project.status === 'Planning' ? 'bg-[#078f7a] text-white' :
                            project.status === 'Development' ? 'bg-[#078f7a] text-white' :
                            'bg-[#078f7a] text-white'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{project.client}</p>
                        <div className="w-full bg-black rounded-full h-2 border border-[#078f7a]">
                          <div 
                            className="bg-[#2AF5D2] h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                          <span>{project.progress}% Complete</span>
                          <span>{project.estimatedCompletion}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Detail */}
                <div className="lg:w-2/3">
                  <div className="bg-black rounded-xl shadow-md p-8 border border-[#078f7a]">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                        <p className="text-xl text-[#2AF5D2]">{selectedProject.client}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.status === 'In Progress' ? 'bg-[#078f7a] text-white' :
                        selectedProject.status === 'Planning' ? 'bg-yellow-600 text-black' :
                        selectedProject.status === 'Development' ? 'bg-green-600 text-black' :
                        'bg-purple-600 text-white'
                      }`}>
                        {selectedProject.status}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-8">{selectedProject.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="font-bold text-white mb-3">Project Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Start Date:</span>
                            <span className="font-medium">{selectedProject.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Estimated Completion:</span>
                            <span className="font-medium">{selectedProject.estimatedCompletion}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Team Size:</span>
                            <span className="font-medium">{selectedProject.teamSize} people</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">My Role:</span>
                            <span className="font-medium">{selectedProject.role}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-white mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 bg-black text-gray-200 rounded-full text-sm border border-[#078f7a]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-white">Progress</span>
                        <span className="font-medium text-white">{selectedProject.progress}%</span>
                      </div>
                      <div className="w-full bg-black rounded-full h-3 border border-[#078f7a]">
                        <div 
                          className="bg-[#2AF5D2] h-3 rounded-full" 
                          style={{ width: `${selectedProject.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-[#2AF5D2] text-black rounded-lg hover:bg-[#18c9a8] transition-colors font-medium">
                        View Project Updates
                      </button>
                      <button className="px-6 py-3 bg-black text-white border border-[#078f7a] rounded-lg hover:bg-[#078f7a] transition-colors font-medium">
                        Contact Client
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Collaborations Content */}
            {activeTab === 'collaborations' && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Active Collaborations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {collaborationsData.map((collab) => (
                    <div 
                      key={collab.id} 
                      className="bg-black rounded-xl shadow-md p-6 border border-[#078f7a]"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white">{collab.partner}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          collab.status === 'Active' ? 'bg-green-600 text-black' : 'bg-black text-gray-200 border border-[#078f7a]'
                        }`}>
                          {collab.status}
                        </span>
                      </div>
                      <p className="text-lg text-[#2AF5D2] mb-3">{collab.project}</p>
                      <p className="text-gray-300 mb-4">{collab.contribution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Duration: {collab.duration}</span>
                        <button className="text-[#2AF5D2] hover:text-[#18c9a8] font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}