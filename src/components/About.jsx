import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white transition-all duration-500  bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <section 
        className="relative px-6 py-24 overflow-hidden transition-all duration-500" 
        id="about"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bg-purple-500 rounded-full -top-40 -right-40 w-80 h-80 opacity-20 animate-pulse"></div>
          <div 
            className="absolute bg-pink-500 rounded-full -bottom-40 -left-40 w-96 h-96 opacity-20 animate-pulse" 
            style={{ animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 opacity-10 animate-spin bg-gradient-to-r from-blue-500 to-purple-500" 
            style={{ animationDuration: '20s' }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {/* Header with animated underline */}
            <div className="mb-16 text-center">
              <h2 className="relative inline-block mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
                <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text animate-pulse">
                  About Me
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]"></div>
              </h2>
            </div>

            {/* Content Card */}
            <div className="backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
              <div className="grid items-center gap-12 md:grid-cols-2">
                {/* Text Content */}
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-200 md:text-xl lg:text-2xl">
                    I am a <span className="font-bold text-purple-400">B.Tech student</span> currently entering my 5th semester with a passion for 
                    <span className="font-bold text-pink-400"> web development</span>.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-200 md:text-xl lg:text-2xl">
                    Skilled in <span className="font-bold text-blue-400">React, JavaScript</span>, and modern UI/UX trends. I enjoy turning complex problems
                    into simple, beautiful, and intuitive designs.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-200 md:text-xl lg:text-2xl">
                    I'm also exploring the world of <span className="font-bold text-green-400">AI</span> and building creative projects on platforms like 
                    <span className="font-bold text-yellow-400"> Hugging Face</span>.
                  </p>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center">
                  <div className={`relative group ${
                    isVisible ? 'animate-[fadeInScale_1s_ease-out_0.5s_forwards]' : 'opacity-0 scale-90'
                  }`}>
                    <div className="absolute transition-all duration-300 rounded-full opacity-75 -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-lg group-hover:opacity-100"></div>
                    
                    <div className="absolute rounded-full -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '8s' }}></div>
                    
                    <div className="relative w-64 h-64 overflow-hidden transition-all duration-300 border-4 rounded-full md:w-80 md:h-80 border-white/20 backdrop-blur-sm group-hover:scale-105">
                      <img 
                        src="/assets/ProfilePic.jpeg" 
                        alt="Profile"
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gradient-to-t from-purple-900/50 to-transparent group-hover:opacity-100"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 hover:scale-110 hover:shadow-lg">
                    View Projects
                  </button>
                  <button className="px-6 py-3 font-semibold text-purple-400 transition-all duration-300 border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-gray-900 hover:scale-110">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes scaleX {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
        `}</style>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;