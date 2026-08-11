import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "German is an outstanding software engineer who consistently demonstrates strong technical expertise, ownership, and attention to detail. He took the lead on our backend refactor using FastAPI, designing robust schemas, optimizing API routes, and implementing performance improvements that significantly reduced database load and improved overall system responsiveness. Beyond his technical skills, German places a strong emphasis on writing clean, maintainable code and thorough documentation, making it easy for the rest of the team to collaborate and build upon his work. He's proactive in identifying opportunities for improvement, communicates effectively, and can be relied upon to deliver high-quality solutions. Any engineering team would benefit from his technical ability, professionalism, and commitment to excellence.",
    name: "Domenico Meconi",
    title: "Software Engineer",
    company: "Apple"
  },
  {
    quote: `German is an outstanding software engineer who consistently demonstrates strong technical expertise, ownership, and attention to detail. He took the lead on building our company website entirely from scratch, handling everything from design and frontend development to backend implementation and deployment, delivering a polished, fully functional site that our startup still relies on today.

Beyond his technical skills, German places a strong emphasis on writing clean, well-structured code and communicating clearly throughout the process, making him easy to collaborate with despite my own demanding schedule as a researcher. He's proactive in identifying what the project needed, made smart technical decisions independently, and can be relied upon to deliver high-quality work without requiring oversight.

Any engineering team would benefit from his technical ability, professionalism, and commitment to excellence.`,
    name: "Pedro Alcaraz",
    title: "PhD Graduate in Optical Physics",
    company: ""
  },
  {
    quote: `I've had the pleasure of working alongside German on architecture and system design, and I can say without hesitation that he is one of the strongest engineers I've collaborated with. He approached the project with real ownership, digging into the architecture early on and making thoughtful decisions that held up well as the scope grew.

What stood out most was his debugging instinct and code quality. German has a knack for tracing issues back to their root cause quickly, and the code he writes is consistently clean and easy for others to pick up — something I don't take for granted, having seen how much time can be lost untangling code that wasn't written with the next person in mind. He's also a genuinely good collaborator: responsive, open to feedback, and willing to push back respectfully when he has a better idea.

I'd recommend German confidently for any engineering role — he consistently operates at a high bar, both technically and in how he works with others.`,
    name: "Zachary Chua",
    title: "Software Engineer",
    company: "Amazon"
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
                {testimonials[activeIndex].title}
                {testimonials[activeIndex].company && (
                  <>
                    {' at '}
                    <span className="font-semibold text-brand dark:text-brand-light">
                      {testimonials[activeIndex].company}
                    </span>
                  </>
                )}
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
