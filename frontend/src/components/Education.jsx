import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'M.S. in Computer Science',
    institution: 'Stanford University',
    period: '2018 - 2020',
    honors: 'GPA: 3.9/4.0, Specialized in Software Systems',
    coursework: ['Distributed Systems', 'Advanced Database Systems', 'Cloud Architectures', 'Machine Learning']
  },
  {
    degree: 'B.S. in Software Engineering',
    institution: 'University of Texas at Austin',
    period: '2014 - 2018',
    honors: 'Summa Cum Laude, Dean’s List (All semesters)',
    coursework: ['Data Structures & Algorithms', 'Web Development', 'Operating Systems', 'Software Engineering Design']
  }
];

export default function Education() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-4" />
        </div>

        {/* Education Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-550 dark:text-slate-400 font-medium text-sm">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md font-medium shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Honors Tag */}
                <div className="flex items-center gap-2 mb-6 text-sm text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 dark:bg-emerald-500/5 px-3 py-1.5 rounded-xl w-fit">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{edu.honors}</span>
                </div>

                {/* Core Coursework */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                    Featured Coursework
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIndex) => (
                      <span 
                        key={cIndex}
                        className="text-xs bg-slate-50 dark:bg-slate-900/50 text-slate-650 dark:text-slate-350 border border-slate-200/40 dark:border-slate-800/45 px-2.5 py-1.5 rounded-lg"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
