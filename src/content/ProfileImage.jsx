import React from 'react';

const ProfileImage = ({ src, alt }) => {
  return (
    <div className="flex justify-center">
      <div className="relative group animate-[fadeInScale_1s_ease-out_0.5s_forwards]">
        
        {/* Outer Glow Layer */}
        <div className="absolute transition-all duration-300 rounded-full opacity-75 -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-lg group-hover:opacity-100"></div>
        
        {/* Spinning Border */}
        <div className="absolute rounded-full -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '8s' }}></div>
        
        {/* Profile Image */}
        <div className="relative overflow-hidden transition-all duration-300 border-4 rounded-full w-60 h-60 border-white/20 backdrop-blur-sm group-hover:scale-105">
          <img 
            src={src} 
            alt={alt}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-gradient-to-t from-purple-900/50 to-transparent group-hover:opacity-100"></div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileImage;