import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TechCorp Solutions',
    period: 'Jan 2024 - Present',
    location: 'San Francisco, CA (Hybrid)',
    description: [
      'Led the transition of monolithic API services to microservices using FastAPI, decreasing API response times by 35%.',
      'Designed and engineered high-performance dashboard interfaces using React and Tailwind CSS, increasing user engagement metrics by 20%.',
      'Mentored 4 junior engineers, established code quality standards, and automated testing coverage benchmarks using CI/CD tools.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Innovation Web Studio',
    period: 'Jun 2021 - Dec 2023',
    location: 'Austin, TX (Remote)',
    description: [
      'Architected complex relational databases with PostgreSQL/SQLAlchemy, implementing data sync caching which lowered database load by 40%.',
      'Implemented real-time client communication pipelines with WebSockets, delivering low-latency updates for multi-user collaboration widgets.',
      'Developed pixel-perfect responsive layouts across multiple customer dashboards, maintaining accessible semantic markup (ARIA/WCAG).'
    ]
  },
  {
    role: 'Associate Developer',
    company: 'Startup Lab Labs',
    period: 'Jan 2020 - May 2021',
    location: 'Denver, CO (On-site)',
    description: [
      'Built reusable frontend components utilizing React functional hooks, reducing redundant styling code sheets by 25%.',
      'Created CRUD API endpoints in FastAPI, conducting unit test coverage to ensure API security and data schema validation.',
      'Integrated payment gateways (Stripe) and authentication pipelines, validating payloads with Pydantic schemas.'
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 py-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Node Icon Indicator */}
                <div className="absolute -left-4 top-1.5 w-8 h-8 rounded-full bg-brand text-white border-4 border-white dark:border-slate-950 flex items-center justify-center shadow-sm">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Main Card */}
                <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                        {exp.role}
                      </h3>
                      <span className="text-brand dark:text-brand-light font-semibold text-sm">
                        {exp.company}
                      </span>
                    </div>

                    {/* Metadata tags */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-450 mt-1 md:mt-0">
                      <div className="flex items-center gap-1.5 bg-slate-105 dark:bg-slate-900 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-105 dark:bg-slate-900 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Achievements */}
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-650 dark:text-slate-400 text-sm sm:text-base">
                    {exp.description.map((bullet, bIndex) => (
                      <li key={bIndex} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
