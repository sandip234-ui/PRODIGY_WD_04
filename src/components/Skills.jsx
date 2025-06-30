import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import skillsData from '../data/skillsData';
import SkillCard from '../content/SkillCard';
import FloatingParticle from '../content/FloatingParticle';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Extract unique categories from skills data
  const categories = [...new Set(skillsData.map(skill => skill.category))];

  // Observe Skills section — this will control SkillCard animation
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false, // Allow re-trigger
    threshold: 0.2,
  });

  // Observe Stats summary block
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section ref={skillsRef} className="relative px-6 py-20 overflow-hidden" id="skills">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}

        {/* Pulse circles */}
        <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div
          className="absolute w-64 h-64 rounded-full bottom-1/4 right-1/4 bg-purple-500/20 blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="mb-6 text-5xl font-black text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 animate-pulse">
            Skills & Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-white/70">
            Crafting digital experiences with cutting-edge technologies
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 mb-8">
            <button
              onClick={() => setHoveredCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                hoveredCategory === null
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white/80'
              }`}
            >
              All Skills
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setHoveredCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  hoveredCategory === category
                    ? 'bg-white/20 text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillsData
            .filter(skill => !hoveredCategory || skill.category === hoveredCategory)
            .map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                triggerAnimation={skillsInView} // << Pass this to SkillCard to trigger animation
              />
            ))}
        </div>

        {/* Stats Summary */}
        <div ref={statsRef} className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          <div className="p-6 text-center border rounded-2xl bg-white/10 backdrop-blur-lg border-white/20">
            <div className="mb-2 text-4xl font-bold text-white">
              <CountUp end={10} duration={3} suffix="+" start={statsInView ? 0 : null} />
            </div>
            <div className="text-white/70">Technologies Mastered</div>
          </div>

          <div className="p-6 text-center border rounded-2xl bg-white/10 backdrop-blur-lg border-white/20">
            <div className="mb-2 text-4xl font-bold text-white">
              <CountUp end={89} duration={2} suffix="%" start={statsInView ? 0 : null} />
            </div>
            <div className="text-white/70">Average Proficiency</div>
          </div>

          <div className="p-6 text-center border rounded-2xl bg-white/10 backdrop-blur-lg border-white/20">
            <div className="mb-2 text-4xl font-bold text-white">
              <CountUp end={5} duration={3} start={statsInView ? 0 : null} />
            </div>
            <div className="text-white/70">Core Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;