import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,100 C100,80 200,120 400,100 L400,200 L0,200 Z" fill="url(#wave)" className="animate-pulse" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl px-6 py-10 mx-auto">
        
        {/* Top section - Centered layout */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 border rounded-xl bg-white/10 backdrop-blur-sm border-white/20">
              <Code2 className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text">
                Sandip Biswal
              </h2>
              <p className="mt-1 text-sm font-medium text-indigo-300">Full Stack Developer</p>
            </div>
            <div className="p-2 border rounded-xl bg-white/10 backdrop-blur-sm border-white/20">
              <Sparkles className="w-6 h-6 text-purple-300" />
            </div>
          </div>
          
          <p className="max-w-xl mx-auto mb-6 text-base leading-relaxed text-slate-300">
            Crafting digital experiences with modern technologies and clean code.
          </p>
        </div>

        {/* Main content - Horizontal layout */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          
          {/* Left side - Contact info */}
          <div className="flex-1 space-y-3">
            <h3 className="flex items-center justify-center gap-2 mb-4 text-lg font-semibold text-indigo-200 lg:justify-start">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              Get in Touch
            </h3>
            <div className="space-y-2 text-sm text-center lg:text-left">
              <div className="text-slate-300">
                <span className="font-medium text-indigo-300">Location:</span> India
              </div>
              <div className="text-slate-300">
                <span className="font-medium text-indigo-300">Status:</span> 
                <span className="inline-flex items-center gap-2 ml-2">
                  Available for projects
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                </span>
              </div>
              <div className="text-slate-300">
                <span className="font-medium text-indigo-300">Tech:</span> React, Node.js, Python
              </div>
            </div>
          </div>

          {/* Center - Social links in circular layout */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Central hub */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-purple-500/30">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              
              {/* Orbiting social links */}
              <a
                href="https://github.com/sandip234-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-3 -left-3 group"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full bg-slate-800/80 backdrop-blur-sm border-slate-600 hover:border-blue-400 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30">
                  <Github className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute px-2 py-1 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 rounded opacity-0 -top-7 left-1/2 bg-slate-800 group-hover:opacity-100 whitespace-nowrap">
                  GitHub
                </div>
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-3 -right-3 group"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full bg-slate-800/80 backdrop-blur-sm border-slate-600 hover:border-purple-400 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
                  <Linkedin className="w-4 h-4 text-purple-400" />
                </div>
                <div className="absolute px-2 py-1 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 rounded opacity-0 -top-7 left-1/2 bg-slate-800 group-hover:opacity-100 whitespace-nowrap">
                  LinkedIn
                </div>
              </a>

              <a
                href="mailto:youremail@example.com"
                className="absolute transform -translate-x-1/2 -bottom-3 left-1/2 group"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full bg-slate-800/80 backdrop-blur-sm border-slate-600 hover:border-pink-400 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30">
                  <Mail className="w-4 h-4 text-pink-400" />
                </div>
                <div className="absolute px-2 py-1 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 rounded opacity-0 -bottom-7 left-1/2 bg-slate-800 group-hover:opacity-100 whitespace-nowrap">
                  Email
                </div>
              </a>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-40 -40 120 120">
                <circle cx="8" cy="8" r="30" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="2,2" className="animate-spin" style={{animationDuration: '20s'}} />
              </svg>
            </div>
          </div>

          {/* Right side - Quick links */}
          <div className="flex-1 space-y-3">
            <h3 className="flex items-center justify-center gap-2 mb-4 text-lg font-semibold text-purple-200 lg:justify-end">
              Quick Links
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </h3>
            <div className="space-y-2 text-sm">
              <a href="#portfolio" className="flex items-center justify-center gap-2 transition-colors duration-300 text-slate-300 hover:text-purple-300 group lg:justify-end">
                <span>Portfolio</span>
                <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:transform group-hover:-translate-y-1" />
              </a>
              <a href="#resume" className="flex items-center justify-center gap-2 transition-colors duration-300 text-slate-300 hover:text-indigo-300 group lg:justify-end">
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:transform group-hover:-translate-y-1" />
              </a>
              <a href="#blog" className="flex items-center justify-center gap-2 transition-colors duration-300 text-slate-300 hover:text-pink-300 group lg:justify-end">
                <span>Blog</span>
                <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:transform group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-4 mt-10 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span>© {new Date().getFullYear()} Sandip Biswal</span>
              <span className="hidden md:inline">•</span>
              <span>Built with ❤️</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                React + Tailwind
              </span>
              <span>Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-bl from-purple-500/20 to-transparent blur-3xl"></div>
    </footer>
  );
};

export default Footer;