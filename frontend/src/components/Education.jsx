import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Sparkles, CheckCircle2 } from 'lucide-react';

const educationData = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'University of Notre Dame',
  period: '2019 - 2023',
  honors: 'Alumni Status',
  activities: [
    {
      name: 'Unleashed',
      desc: 'Active member participating in tech entrepreneurship incubation, prototyping new software solutions, and pitch competitions.'
    },
    {
      name: 'Computer Science for Good (CS4Good)',
      desc: 'Developed open-source web platforms and software tools to support local community centers and non-profit organizations.'
    },
    {
      name: 'Student International Business Council (SIBC)',
      desc: 'Collaborated on tech consulting projects, presenting software strategy cases to corporate leaders.'
    }
  ],
  coursework: [
    'Data Structures & Algorithms',
    'Systems Programming',
    'Database Engineering',
    'Software Design Architecture',
    'Operating Systems',
    'Web Development'
  ]
};

export default function Education() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-4" />
        </div>

        {/* Education Centered Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="glass-panel rounded-3xl p-6 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200/50 dark:border-slate-800/50 pb-6 mb-8">
            <div className="flex items-center gap-4.5">
              <div className="p-4 rounded-2xl bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                  {educationData.degree}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-semibold text-base mt-0.5">
                  {educationData.institution}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 text-slate-650 dark:text-slate-350 text-sm px-3.5 py-1.5 rounded-xl font-semibold self-start md:self-center">
              <Calendar className="w-4 h-4 text-brand dark:text-brand-light" />
              <span>{educationData.period}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side: Honors & Coursework */}
            <div className="lg:col-span-5 space-y-6">
              {/* Status Badge */}
              <div>
                <span className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest block mb-2.5">
                  Status
                </span>
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 dark:bg-emerald-500/5 px-3 py-2 rounded-xl w-fit">
                  <Award className="w-4.5 h-4.5 shrink-0" />
                  <span>{educationData.honors}</span>
                </div>
              </div>

              {/* Coursework Tags */}
              <div>
                <span className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest block mb-3.5">
                  Key Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {educationData.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/40 dark:border-slate-800/40 px-3 py-2 rounded-xl"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Activities & Societies */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest block mb-4">
                Activities & Societies
              </span>
              <div className="space-y-4">
                {educationData.activities.map((act, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-2xl bg-white/40 dark:bg-slate-950/20 border border-slate-200/30 dark:border-slate-800/30 flex items-start gap-3"
                  >
                    <div className="p-1 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm font-display">
                        {act.name}
                      </h4>
                      <p className="text-xs text-slate-550 dark:text-slate-450 mt-1 leading-relaxed">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
