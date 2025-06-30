import React, { useState, useEffect } from 'react';
import categoryColors from '../data/categoryColors';

const SkillCard = ({ skill, index, triggerAnimation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    // Whenever 'triggerAnimation' changes (parent re-triggers), run this animation again
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    const levelTimer = setTimeout(() => setAnimatedLevel(skill.level), index * 250);

    return () => {
      // Clean up timeouts when component unmounts or before next trigger
      clearTimeout(timer);
      clearTimeout(levelTimer);
      // Reset animation state
      setIsVisible(false);
      setAnimatedLevel(0);
    };
  }, [skill.level, index, triggerAnimation]); // Re-run when triggerAnimation changes

  return (
    <div className="flex flex-col h-full">
      <div
        className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-6 transition-all duration-700 transform hover:scale-105 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } h-full flex flex-col`}
      >
        {/* Gradient background on hover */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              categoryColors[skill.category]
            } opacity-10`}
          ></div>
        </div>

        {/* Skill Content */}
        <div className="relative z-10 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {/* Icon */}
              <span className="text-2xl transition-transform duration-300 transform group-hover:scale-110">
                {skill.icon}
              </span>
              <div>
                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                {/* Category */}
                <span className="text-xs font-medium tracking-wider uppercase text-white/60">
                  {skill.category}
                </span>
              </div>
            </div>

            {/* Skill level percentage */}
            <span className="text-2xl font-bold transition-colors text-white/80 group-hover:text-white">
              {Math.round(animatedLevel)}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative mt-auto">
            <div className="h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className={`h-full bg-gradient-to-r ${
                  categoryColors[skill.category]
                } rounded-full transition-all duration-1000 ease-out relative`}
                style={{ width: `${animatedLevel}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SkillCard;