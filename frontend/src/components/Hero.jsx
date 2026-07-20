import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-grid-pattern relative overflow-hidden"
    >
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 mb-6 rounded-full text-xs font-semibold tracking-wider text-brand dark:text-brand-light bg-brand/10 dark:bg-brand/20 border border-brand/20">
                {/* REPLACE: Status Tag */}
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-none tracking-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-brand-light to-indigo-500 bg-clip-text text-transparent">
                {/* REPLACE: Your Name */}
                German Parra
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-slate-600 dark:text-slate-300 mb-6"
            >
              {/* REPLACE: Your Title */}
              Full-Stack Software Engineer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {/* REPLACE: One-line Value Proposition */}
              I build scalable web applications with robust FastAPI backend architectures and elegant, highly responsive React user interfaces.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={handleScrollToContact}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand hover:bg-brand-dark text-white rounded-xl font-medium shadow-lg hover:shadow-brand/25 flex items-center justify-center gap-2 group transition-all duration-300"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300"
              >
                View Experience
              </a>
            </motion.div>

            {/* Quick Socials */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start items-center gap-5 mt-10 text-slate-500 dark:text-slate-400"
            >
              {/* REPLACE: Your Social Handles */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-brand-light transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-brand-light transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:german@example.com" className="hover:text-brand dark:hover:text-brand-light transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Right Content: Headshot Placeholder */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Spinning or floating decorative borders */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand to-indigo-500 rounded-3xl rotate-6 blur-md opacity-20 dark:opacity-30 scale-105 pointer-events-none"></div>
              
              {/* Headshot container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass-panel p-4 flex items-center justify-center group shadow-xl">
                {/* Profile Placeholder Image / SVG */}
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-brand/10 to-indigo-500/10 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50 overflow-hidden relative">
                  
                  {/* REPLACE: Swap the svg tag below with an <img> tag for your headshot photo
                      Example: <img src="/assets/headshot.jpg" alt="German Parra" className="w-full h-full object-cover" />
                  */}
                  <svg className="w-1/2 h-1/2 text-brand/40 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  
                  {/* Decorative Glass Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/60 to-transparent p-4 text-center">
                    <span className="text-white text-xs font-semibold tracking-wider font-display">BUILDING SOLUTIONS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
