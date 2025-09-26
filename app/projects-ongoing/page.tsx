'use client';

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { ongoingProjectsData, collaborationsData } from '@/data/projectsOngoing';

export default function ProjectsOngoingPage() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(ongoingProjectsData[0]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Title */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Ongoing Projects</h1>
            <p className="text-foreground/60 text-center max-w-2xl mx-auto">
              A look into my current projects and collaborations that are shaping the future.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 pb-16">
          <div className="container mx-auto px-4">
            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 bg-background rounded-lg border border-accent">
                <button
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-accent text-accent-contrast shadow'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => setActiveTab('projects')}
                >
                  Current Projects
                </button>
                <button
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'collaborations'
                      ? 'bg-accent text-accent-contrast shadow'
                      : 'text-foreground/70 hover:text-foreground'
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
                        className={`bg-background rounded-xl shadow-md p-5 border cursor-pointer transition-all ${
                          selectedProject.id === project.id 
                            ? 'ring-2 ring-accent border-accent' 
                            : 'border-accent hover:border-accent-strong'
                        }`}
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'In Progress' ? 'bg-accent text-accent-contrast' :
                            project.status === 'Planning' ? 'bg-accent text-accent-contrast' :
                            project.status === 'Development' ? 'bg-accent text-accent-contrast' :
                            'bg-accent text-accent-contrast'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-foreground/80 text-sm mb-3">{project.client}</p>
                        <div className="w-full bg-background rounded-full h-2 border border-accent">
                          <div 
                            className="bg-accent h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-foreground/60 mt-2">
                          <span>{project.progress}% Complete</span>
                          <span>{project.estimatedCompletion}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Detail */}
                <div className="lg:w-2/3">
                  <div className="bg-background rounded-xl shadow-md p-8 border border-accent">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">{selectedProject.title}</h2>
                        <p className="text-xl text-accent">{selectedProject.client}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.status === 'In Progress' ? 'bg-accent text-accent-contrast' :
                        selectedProject.status === 'Planning' ? 'bg-yellow-500 text-background' :
                        selectedProject.status === 'Development' ? 'bg-green-500 text-background' :
                        'bg-purple-500 text-background'
                      }`}>
                        {selectedProject.status}
                      </span>
                    </div>

                    <p className="text-foreground/80 mb-8">{selectedProject.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="font-bold text-foreground mb-3">Project Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Start Date:</span>
                            <span className="font-medium">{selectedProject.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Estimated Completion:</span>
                            <span className="font-medium">{selectedProject.estimatedCompletion}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Team Size:</span>
                            <span className="font-medium">{selectedProject.teamSize} people</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/60">My Role:</span>
                            <span className="font-medium">{selectedProject.role}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-foreground mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 bg-background text-foreground/70 rounded-full text-sm border border-accent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">Progress</span>
                        <span className="font-medium text-foreground">{selectedProject.progress}%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-3 border border-accent">
                        <div 
                          className="bg-accent h-3 rounded-full" 
                          style={{ width: `${selectedProject.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-accent text-accent-contrast rounded-lg hover:bg-accent-strong transition-colors font-medium">
                        View Project Updates
                      </button>
                      <button className="px-6 py-3 bg-background text-foreground border border-accent rounded-lg hover:bg-accent/10 transition-colors font-medium">
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
                      className="bg-background rounded-xl shadow-md p-6 border border-accent"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-foreground">{collab.partner}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          collab.status === 'Active' ? 'bg-green-500 text-background' : 'bg-background text-foreground/70 border border-accent'
                        }`}>
                          {collab.status}
                        </span>
                      </div>
                      <p className="text-lg text-accent mb-3">{collab.project}</p>
                      <p className="text-foreground/80 mb-4">{collab.contribution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground/60">Duration: {collab.duration}</span>
                        <button className="text-accent hover:text-accent-strong font-medium">
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