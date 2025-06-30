import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import Typed from 'typed.js';
import portfolioData from '../data/portfolioData';
import ProfileImage from '../content/ProfileImage';

const Hero = () => {
    const typedRef = useRef(null);
    const buttonRef = useRef(null);  // <-- add this!

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "Full Stack Developer",
                "AI/Ml Learner",
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });

        return () => typed.destroy();
    }, []);
    return (
        <section
            className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            id="home"
        >
            <ProfileImage src="/assets/ProfilePic.jpeg" alt="My Profile" />

            {/* Main Title */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl dark:text-white">
                Hi, I'm <span className="text-[#52b69a]">{portfolioData.name}</span>
            </h1>
            <p className="max-w-5xl mb-6 text-4xl font-extrabold md:text-4xl">
                And I am a passionate
                <span className="text-4xl text-[#4ea8de] ml-4" ref={typedRef}></span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {/* Hire Me Button */}
                <button
                    onClick={() => {

                        const element = document.getElementById('contact');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="px-8 py-3 text-lg font-medium text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none active:scale-[0.94] shadow-gray-950 hover:shadow-xl"
                >
                    Hire Me
                </button>

                {/* Download Resume Button */}
                <button
                    onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="flex items-center gap-2 px-8 py-3 font-medium text-lg text-white transition bg-teal-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none active:scale-[0.94] shadow-gray-950 hover:shadow-xl"
                >
                    <Download size={20} />
                    Download Resume
                </button>
            </div>
        </section>
    );
};

export default Hero;