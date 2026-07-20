import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "German is an outstanding software engineer. He took ownership of our backend refactor using FastAPI, implementing schemas and optimization routes that solved our database load issues. His attention to code quality and documentation is exceptional.",
    name: "Sarah Jenkins",
    title: "Engineering Manager",
    company: "TechCorp Solutions"
  },
  {
    quote: "Working with German on our responsive client portals was a breeze. He has a rare ability to bridge the gap between complex backend architectures and beautiful, interactive frontend design. Highly recommend him for full-stack projects.",
    name: "Marcus Aurelius",
    title: "Lead Product Designer",
    company: "Innovation Web Studio"
  },
  {
    quote: "German joined our early-stage project team and brought instant architecture stability. He set up our API models, integrated payment logic, and shipped features fast. He's collaborative, curious, and extremely skilled.",
    name: "Elena Rostova",
    title: "Co-Founder & CTO",
    company: "Startup Lab Labs"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' }
    })
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Recommendations
          </h2>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-4" />
        </div>

        {/* Carousel Frame */}
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 shadow-sm min-h-[300px] flex flex-col justify-between">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-brand/10 dark:text-brand-light/10 pointer-events-none">
            <Quote className="w-20 h-20 rotate-180" />
          </div>

          <div className="relative overflow-hidden flex-1 flex items-center min-h-[160px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full text-center"
              >
                <p className="text-base sm:text-lg lg:text-xl italic text-slate-650 dark:text-slate-300 leading-relaxed font-medium">
                  "{testimonials[activeIndex].quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Author & Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200/50 dark:border-slate-800/50 pt-8 mt-6">
            
            {/* Author */}
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-slate-900 dark:text-white font-display text-base">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {testimonials[activeIndex].title} at{' '}
                <span className="font-semibold text-brand dark:text-brand-light">
                  {testimonials[activeIndex].company}
                </span>
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous quote"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-450 hover:text-brand transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Bullets indicator */}
              <div className="flex gap-1.5 px-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-5 bg-brand dark:bg-brand-light' 
                        : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next quote"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-450 hover:text-brand transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
