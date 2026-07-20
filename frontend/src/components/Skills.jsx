import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'border-blue-500/20 text-blue-500 bg-blue-500/5',
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'JavaScript (ES6+)', level: 'Expert' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'HTML5 / CSS3', level: 'Expert' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Bash Shell', level: 'Proficient' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layout,
    color: 'border-indigo-500/20 text-indigo-500 bg-indigo-500/5',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'FastAPI', level: 'Expert' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Express.js / Node', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Redux / Zustand', level: 'Advanced' }
    ]
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    color: 'border-emerald-500/20 text-emerald-500 bg-emerald-500/5',
    skills: [
      { name: 'PostgreSQL / SQLite', level: 'Expert' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'Git & GitHub', level: 'Expert' },
      { name: 'AWS (S3/EC2)', level: 'Proficient' },
      { name: 'Redis', level: 'Proficient' },
      { name: 'Linux systems', level: 'Advanced' }
    ]
  },
  {
    title: 'Core Concepts & Soft Skills',
    icon: Sparkles,
    color: 'border-purple-500/20 text-purple-500 bg-purple-500/5',
    skills: [
      { name: 'RESTful APIs', level: 'Expert' },
      { name: 'System Design', level: 'Advanced' },
      { name: 'Agile/Scrum', level: 'Expert' },
      { name: 'CI/CD Pipelines', level: 'Advanced' },
      { name: 'Unit Testing (PyTest/Jest)', level: 'Advanced' },
      { name: 'Technical Writing', level: 'Expert' }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-4" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto">
            A comprehensive overview of the programming languages, libraries, databases, and core competencies I utilize.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl border ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 font-display">
                    {category.title}
                  </h3>
                </div>

                {/* Skill badges grid */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIndex) => (
                    <div 
                      key={sIndex} 
                      className="group relative cursor-default"
                    >
                      <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl flex items-center gap-2 hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-sm transition-all duration-200">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-350">
                          {skill.name}
                        </span>
                        
                        {/* Optional proficiency tag visual */}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold tracking-wider ${
                          skill.level === 'Expert' 
                            ? 'bg-brand/10 text-brand dark:text-brand-light' 
                            : skill.level === 'Advanced'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'bg-slate-500/10 text-slate-500 dark:text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
