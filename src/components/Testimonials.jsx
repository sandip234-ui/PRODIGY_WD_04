import  { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; // You forgot to import this!
import testimonials from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getVisibleTestimonials = () => {
    return testimonials;
  };

  return (
    <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" id="testimonials">
      {/* HEADER */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/10 backdrop-blur-sm rounded-2xl">
          <Quote className="w-8 h-8 text-white" />
        </div>
        <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200">
          What Our Clients Say
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-purple-200">
          Discover how leading companies are transforming their workflows with our cutting-edge solutions
        </p>
      </div>

      {/* TESTIMONIALS GRID */}
      <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="relative transition-all duration-500 transform group hover:scale-105"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-full p-6 border bg-white/10 backdrop-blur-lg rounded-2xl border-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="relative flex flex-col h-full">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="object-cover w-16 h-16 border-2 rounded-full border-white/30"
                  />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-3 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex-grow mb-4">
                  <p className="pl-3 text-sm italic leading-relaxed text-white/90">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="mt-auto text-center">
                  <h4 className="mb-1 text-lg font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="mb-2 text-xs text-purple-200">
                    {testimonial.role}
                  </p>
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-white/10">
                    <span className="text-xs font-medium text-purple-200">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM STATS SECTION */}
      <StatsSection />
    </section>
  );
};

// Separate component
const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="flex items-center justify-center mt-16 space-x-8 text-center"
    >
      <div className="px-6 py-4 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
        <div className="text-2xl font-bold text-white">
          {inView && <CountUp end={500} duration={2} suffix="+" />}
        </div>
        <div className="text-sm text-purple-200">Happy Clients</div>
      </div>

      <div className="px-6 py-4 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
        <div className="text-2xl font-bold text-white">
          {inView && <CountUp end={4.9} duration={2} decimals={1} suffix="/5" />}
        </div>
        <div className="text-sm text-purple-200">Average Rating</div>
      </div>

      <div className="px-6 py-4 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
        <div className="text-2xl font-bold text-white">
          {inView && <CountUp end={99} duration={2} suffix="%" />}
        </div>
        <div className="text-sm text-purple-200">Satisfaction</div>
      </div>
    </div>
  );
};

export default Testimonials;