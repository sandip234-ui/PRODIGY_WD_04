import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Filter } from 'lucide-react';
import certificates from '../data/certificates.js';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const categories = ['All', 'Courses', 'Hackathons', 'Tech Events'];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Courses': return '📚';
      case 'Hackathons': return '🏆';
      case 'Tech Events': return '🎯';
      default: return '📋';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Courses': return 'from-blue-500 to-cyan-500';
      case 'Hackathons': return 'from-purple-500 to-pink-500';
      case 'Tech Events': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  // inView for bottom stats counter
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" id="certificates">
      <div className="px-6 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text">
              Certificates & Achievements
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            A collection of professional certifications, hackathon victories, and tech event participations that showcase continuous learning and growth
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 ">
          <div className="flex items-center gap-2 p-2 bg-white border border-gray-100 shadow-lg rounded-2xl max-md:w-full max-md:h-16">
            <Filter className="w-4 h-4 ml-2 text-gray-500" />
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 animate-pulse" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {category !== 'All' && <span>{getCategoryIcon(category)}</span>}
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCertificates.map((cert, index) => (
            <div
              key={cert.id}
              className="relative overflow-hidden transition-all duration-500 transform border shadow-xl group bg-gray-100/95 backdrop-blur-sm rounded-2xl hover:shadow-2xl hover:-translate-y-2 border-gray-200/50 hover:border-gray-300/60"
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(cert.category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                  {getCategoryIcon(cert.category)} {cert.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end justify-center pb-4 transition-all duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100">
                  <button className="flex items-center gap-2 px-4 py-2 font-medium text-gray-900 transition-transform duration-300 transform translate-y-4 rounded-lg bg-white/90 backdrop-blur-sm group-hover:translate-y-0 hover:bg-white">
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>
                
                <p className="mb-4 leading-relaxed text-gray-600 line-clamp-3">
                  {cert.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Issued by:</span>
                    <span className="font-semibold text-gray-900">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Credential ID:</span>
                    <span className="px-2 py-1 font-mono text-xs text-gray-700 bg-gray-100 rounded">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>

                {/* Progress Bar Animation */}
                <div className="h-1 mt-4 overflow-hidden bg-gray-200 rounded-full">
                  <div 
                    className={`h-full bg-gradient-to-r ${getCategoryColor(cert.category)} transition-all duration-1000 ${
                      hoveredCard === cert.id ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="py-16 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full">
              <Award className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">No certificates found</h3>
            <p className="text-gray-600">Try selecting a different category to view certificates.</p>
          </div>
        )}

        {/* Stats Section */}
       
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Certificates;