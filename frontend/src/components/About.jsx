import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Calendar, Award } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const stats = [
    { label: 'Location', value: 'San Francisco, CA', icon: MapPin },
    { label: 'Experience', value: '5+ Years', icon: Calendar },
    { label: 'Current Role', value: 'Senior Engineer at Tech Corp', icon: Briefcase },
    { label: 'Specialization', value: 'API & UI Architectures', icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { delay: 0.2, duration: 0.5 } }
            }}
            className="w-16 h-1 bg-brand rounded-full mx-auto mt-4 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* About Image Left */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer frame styling */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand to-indigo-500 rounded-3xl -rotate-3 scale-[1.02] opacity-10 dark:opacity-20 pointer-events-none"></div>
              
              <div className="relative aspect-square rounded-3xl overflow-hidden glass-panel p-3 shadow-lg">
                <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-850 dark:to-slate-800 flex items-center justify-center border border-slate-200/40 dark:border-slate-800/40 overflow-hidden">
                  
                  {/* REPLACE: Swap the svg tag below with an <img> tag for your secondary/about photo
                      Example: <img src="/assets/about-photo.jpg" alt="About German" className="w-full h-full object-cover" />
                  */}
                  <svg className="w-1/3 h-1/3 text-brand/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Bio Right */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 font-display">
              {/* REPLACE: Subtitle summary */}
              Engineering digital products that align scalability with intuitive design.
            </h3>
            
            <div className="space-y-4 text-slate-650 dark:text-slate-400 leading-relaxed text-base">
              <p>
                {/* REPLACE: Bio Paragraph 1 */}
                Hello! I am a passionate developer who enjoys designing systems that are simple, secure, and fast. My journey in software engineering began years ago, and since then I have had the privilege of writing production software for innovative clients, start-ups, and technology businesses.
              </p>
              <p>
                {/* REPLACE: Bio Paragraph 2 */}
                I believe in writing clean, well-tested code that communicates its purpose clearly. On the backend, I design reliable architectures with python and FastAPI, focusing on performance, data integrity, and documentation. On the frontend, I create beautiful, responsive user interfaces in React using flexible CSS strategies.
              </p>
              <p>
                {/* REPLACE: Bio Paragraph 3 */}
                Outside of development, I love mentoring, reading about distributed database architectures, contributing to open-source code repositories, and exploring nature.
              </p>
            </div>

            {/* Quick Facts Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="glass-card rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{stat.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
