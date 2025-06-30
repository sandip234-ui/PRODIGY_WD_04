import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Building2, ExternalLink, Code, GitBranch, GraduationCap, ChevronRight, Clock } from 'lucide-react';
import experience from '../data/experience.js';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Internship': return <Briefcase className="w-5 h-5" />;
      case 'Volunteer': return <GitBranch className="w-5 h-5" />;
      case 'Training': return <GraduationCap className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship': return 'from-blue-500 to-cyan-500';
      case 'Volunteer': return 'from-green-500 to-emerald-500';
      case 'Training': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  const toggleExpanded = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" id="experience">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text">
              Professional Experience
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            A journey through professional growth, technical contributions, and continuous learning in the world of web development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-60"></div>

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Timeline Node */}
                <div className="absolute z-10 -translate-y-1 left-2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-2">
                  <div className={`w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full shadow-lg flex items-center justify-center border-2 md:border-4 border-white/20 backdrop-blur-sm`}>
                    <div className="text-xs text-white">
                      {React.cloneElement(getTypeIcon(item.type), { className: 'w-3 h-3 md:w-4 md:h-4' })}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div
                    className="relative overflow-hidden transition-all duration-500 transform border shadow-lg cursor-pointer group bg-gray-100/95 backdrop-blur-sm rounded-xl md:rounded-2xl md:shadow-xl hover:shadow-2xl border-gray-200/50 hover:border-gray-300/60 hover:-translate-y-1"
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => toggleExpanded(item.id)}
                  >
                    {/* Card Header */}
                    <div className="p-4 border-b md:p-6 border-gray-200/50">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex-shrink-0">
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="object-cover w-10 h-10 border-2 rounded-lg md:w-12 md:h-12 md:rounded-xl border-gray-200/50"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <h3 className="text-lg font-bold leading-tight text-gray-900 transition-colors duration-300 md:text-xl group-hover:text-blue-600">
                                {item.role}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Building2 className="flex-shrink-0 w-3 h-3 text-gray-500 md:w-4 md:h-4" />
                                <span className="text-sm font-semibold text-gray-800 truncate md:text-base">{item.company}</span>
                              </div>
                            </div>
                            <div className={`px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r ${getTypeColor(item.type)} text-white text-xs font-semibold rounded-full shadow-sm flex-shrink-0`}>
                              {item.type}
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 mt-3 text-xs text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4" />
                              <span className="truncate">{item.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4" />
                              <span className="truncate">{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 md:p-6">
                      <p className="mb-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        {item.description}
                      </p>

                      {/* Company Info - Only show if expanded or if it's card ID 1 or 2 */}
                      {(expandedCard === item.id || item.id === 1 || item.id === 2) && (
                        <div className="grid grid-cols-1 gap-3 mb-4 text-xs sm:grid-cols-2 md:gap-4 md:text-sm">
                          <div>
                            <span className="text-gray-500">Company Size:</span>
                            <div className="font-medium text-gray-800">{item.companySize}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Industry:</span>
                            <div className="font-medium text-gray-800">{item.industry}</div>
                          </div>
                        </div>
                      )}

                      {/* Technologies - Only show if expanded or if it's card ID 1 */}
                      {(expandedCard === item.id || item.id === 1) && (
                        <div className="mb-4">
                          <h4 className="flex items-center gap-2 mb-2 text-xs font-semibold text-gray-700 md:text-sm">
                            <Code className="w-3 h-3 md:w-4 md:h-4" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {item.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 text-xs font-medium text-gray-700 border rounded-full md:px-3 md:py-1 bg-gray-200/80 border-gray-300/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Expandable Achievements */}
                      <div className="mt-4">
                        <button
                          className="flex items-center w-full gap-2 text-xs font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700 md:text-sm sm:w-auto"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpanded(item.id);
                          }}
                        >
                          <span>Key Achievements</span>
                          <ChevronRight className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ${expandedCard === item.id ? 'rotate-90' : ''
                            }`} />
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ${expandedCard === item.id ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                          }`}>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-xs text-gray-700 md:gap-3 md:text-sm">
                                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(item.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
                      <div
                        className={`h-full bg-gradient-to-r ${getTypeColor(item.type)} transition-all duration-1000 ${hoveredCard === item.id ? 'w-full' : 'w-0'
                          }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Timeline Date (Hidden on mobile, adjusted for smaller screens) */}
                <div className={`hidden md:block w-2/12 ${index % 2 === 0 ? 'text-right pr-4 lg:pr-8' : 'text-left pl-4 lg:pl-8'}`}>
                  <div className="p-2 border rounded-lg bg-white/10 backdrop-blur-sm lg:p-3 border-white/20">
                    <div className="text-xs font-semibold text-white/90 lg:text-sm">
                      {item.duration.split(' - ')[0]}
                    </div>
                    <div className="text-xs text-white/70">
                      {item.duration.includes(' - ') ? item.duration.split(' - ')[1] : ''}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div
          ref={statsRef}
          className="p-6 mt-16 border shadow-lg md:mt-20 bg-gray-100/95 backdrop-blur-sm rounded-xl md:rounded-2xl md:shadow-xl md:p-8 border-gray-200/50"
        >
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-6">

            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                {statsInView && <CountUp end={2} duration={2} />}+
              </div>
              <div className="text-xs font-medium text-gray-600 md:text-sm">Years Experience</div>
            </div>

            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                {statsInView && <CountUp end={50} duration={2} />}+
              </div>
              <div className="text-xs font-medium text-gray-600 md:text-sm">Projects Completed</div>
            </div>

            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                {statsInView && <CountUp end={8} duration={2} />}+
              </div>
              <div className="text-xs font-medium text-gray-600 md:text-sm">Open Source Contributions</div>
            </div>

            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                {statsInView && <CountUp end={5} duration={2} />}+
              </div>
              <div className="text-xs font-medium text-gray-600 md:text-sm">Technologies Mastered</div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;