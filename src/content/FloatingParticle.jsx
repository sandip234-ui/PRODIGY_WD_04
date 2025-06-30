import React from 'react';

const FloatingParticle = ({ delay }) => {
  return (
    <div
      className="absolute w-2 h-2 rounded-full bg-white/20 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    ></div>
  );
};

export default FloatingParticle;