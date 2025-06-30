import React, { useState } from 'react';
import { ExternalLink, Github, Globe, ChevronRight, Star, Calendar } from 'lucide-react';
import projects from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Beta': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Research': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 " id="projects">

      {/* Background blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute bg-blue-400 rounded-full -top-40 -right-40 w-80 h-80 opacity-20 animate-pulse"></div>
        <div className="absolute bg-purple-400 rounded-full -bottom-40 -left-40 w-96 h-96 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 opacity-10 animate-spin bg-gradient-to-r from-pink-400 to-blue-400" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="mb-4 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text">
            Projects & Innovation
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-dark">
            Explore my latest work spanning full-stack applications, blockchain solutions, and cutting-edge research projects
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25 scale-105'
                : 'bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/60 hover:border-violet-200 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 ${project.featured ? 'ring-2 ring-violet-200 shadow-lg' : ''
                }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute z-10 flex items-center gap-1 px-3 py-1 text-sm font-medium text-white rounded-full top-4 left-4 bg-gradient-to-r from-violet-600 to-purple-600">
                  <Star size={14} fill="currentColor" />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />

                {/* Overlay Actions */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-all duration-200 rounded-full shadow-lg bg-white/90 hover:bg-white hover:shadow-xl hover:scale-110"
                  >
                    <ExternalLink size={16} className="text-slate-700" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-all duration-200 rounded-full shadow-lg bg-white/90 hover:bg-white hover:shadow-xl hover:scale-110"
                  >
                    <Github size={16} className="text-slate-700" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Status & Year */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    <div className="w-2 h-2 bg-current rounded-full opacity-60" />
                    {project.status}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold transition-colors duration-200 text-slate-900 group-hover:text-violet-700">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 font-medium text-white transition-all duration-200 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 group/btn"
                >
                  <Globe size={16} />
                  View Project
                  <ChevronRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;