import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import portfolioData from '../data/portfolioData'; // Replace with your actual data import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  const sectionIds = menuItems.map(item => item.id);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-12px 0px 0px 0px',
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className={`fixed z-50 w-full max-w-5xl px-6 py-2 transition-all duration-300 transform -translate-x-1/2 border rounded-full shadow-lg border-gray-200/50 backdrop-blur-md top-6 left-1/2 bg-white/90 ${isMenuOpen ? 'rounded-xl' : 'rounded-full md:rounded-full'}`}>
      <div className="relative flex items-center justify-between w-full h-12">
        <div className="flex-shrink-0 text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
          {portfolioData.name.toUpperCase()}
        </div>

        <div className="hidden w-full md:block">
          <div className="relative flex items-center justify-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group hover:scale-105 transform
                  ${activeSection === item.id 
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10 ${activeSection === item.id ? 'opacity-100' : ''}`}></div>
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300
                  ${activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-sm animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-400 transition-all duration-200 transform rounded-full hover:text-gray-500 hover:bg-gray-100 hover:scale-110"
          >
            <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="mt-2 border-t rounded-lg shadow-inner bg-white/95 backdrop-blur-sm border-gray-200/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02]
                  ${activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideInFromTop 0.3s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-white' 
                      : 'bg-gray-300 group-hover:bg-blue-500'
                  }`}></div>
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;