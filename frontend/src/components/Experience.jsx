import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'L2 Data Analyst',
    company: 'Visa',
    period: 'May 2022 - Present',
    location: 'Austin, Texas, United States (Hybrid)',
    description: [
      'Spearheaded AI enablement initiatives across infrastructure and operations teams by developing full-stack internal applications that automated procurement, reporting, and operational workflows.',
      'Led executive operational governance meetings with SVPs and CTO leadership covering M&A uptime/performance, incident management, quarterly OKRs, cloud metrics, audit reporting, and demand management.',
      'Built and deployed 10+ executive-facing dashboards and analytics platforms using Python, SQL, React, Power BI, and REST APIs to monitor VisaNet volumes, operational health, and enterprise performance metrics.',
      'Consolidated 15+ operational data sources into centralized MSSQL/Azure databases, enabling scalable enterprise reporting while reducing technical debt and manual Excel-based processes.',
      'Developed internal BI platforms and data pipelines integrating cloud, infrastructure, and operational metrics to improve decision-making, reporting automation, and leadership visibility.',
      'Partnered with leadership on AI governance and cloud cost optimization initiatives, helping establish scalable operational and reporting standards.'
    ]
  },
  {
    role: 'Bloomberg Tech Lab Fellow',
    company: 'Bloomberg LP',
    period: 'Nov 2022',
    location: 'San Francisco, California, United States',
    description: [
      'Selected as 1 of 28 engineers nationwide to attend an intensive three-day technical program.',
      'Collaborated in a small team to design and build a Python-based portfolio management system, implementing core functionality for asset tracking, allocation logic, and performance analysis.',
      'Applied object-oriented design principles and structured problem-solving to deliver a working prototype within a constrained timeline.',
      'Engaged with senior engineering leadership, including discussions with Bloomberg’s CTO, gaining exposure to large-scale financial systems and product architecture (e.g., the Terminal).'
    ]
  },
  {
    role: 'Back End Developer',
    company: 'Ombre',
    period: 'Jan 2022 - Apr 2022',
    location: 'Palo Alto, California, United States (Internship)',
    description: [
      'Contributed to backend development of a production web application built with Flask, supporting microbiome testing workflows and customer-facing functionality.',
      'Designed and implemented relational database schemas, structured data models, and performed bulk data ingestion via CSV pipelines to support core application features.',
      'Developed backend logic in Python, building and maintaining essential application functionality and API endpoints.',
      'Implemented and supported authentication workflows integrating Flask-based systems with Shopify, ensuring secure user access and transaction handling.',
      'Collaborated cross-functionally in product discussions, contributing to feature scoping, technical feasibility assessments, and implementation planning.',
      'Provided limited front-end support using JavaScript, assisting with UI-related functionality tied to backend services.'
    ]
  },
  {
    role: 'Full-stack Developer',
    company: 'IBM',
    period: 'Jun 2021 - Apr 2022',
    location: 'Rochester, Minnesota, United States',
    description: [
      'Served as Scrum Master for a cross-functional engineering team, leading daily standups, tracking blockers, and coordinating sprint progress to maintain delivery velocity.',
      'Developed an internal automation tool using Electron, React, JavaScript, and HTML to streamline repetitive engineering workflows and reduce manual task overhead.',
      'Built backend automation components using Python, Ansible, C++, and macro programs, integrating with enterprise systems running on IBM i and AIX environments.',
      'Contributed to systems-level scripting and infrastructure automation to improve efficiency and reliability across engineering processes.',
      'Collaborated with senior engineers to design and implement solutions aligned with enterprise architecture and operational constraints.'
    ]
  },
  {
    role: 'Career Leader',
    company: 'Management Leadership for Tomorrow',
    period: 'Mar 2021 - Dec 2022',
    location: 'Notre Dame, Indiana, United States (Part-time)',
    description: [
      'Selected for an 18-month competitive mentorship program focused on leadership development, strategic thinking, and career advancement.',
      'Conducted structured company analyses using frameworks such as SWOT and Business Model Canvas to evaluate competitive positioning and operational strategy.',
      'Engaged with industry leaders across the United States to gain exposure to executive decision-making and organizational leadership practices.',
      'Strengthened communication, emotional intelligence, and professional development skills through guided mentorship and collaborative workshops.',
      'Researched companies and market trends to inform career strategy and long-term professional growth.'
    ]
  },
  {
    role: 'Bookstore Helper',
    company: 'Nogales High School',
    period: 'May 2018 - Aug 2018',
    location: 'Nogales, Arizona',
    description: [
      'Helped clean the school’s textbooks and aided in the student registration in a full-time capacity.'
    ]
  },
  {
    role: 'BYTE Intern',
    company: 'Border Youth Tennis Exchange',
    period: 'Sep 2016 - Nov 2017',
    location: 'Nogales, Sonora, Mexico',
    description: [
      'BYTE Program Mission: Enhance elementary students’ technological and tennis skills, with a focus on supporting underprivileged children.',
      'Program Approach: Combine tennis and technology to encourage students to develop a strong passion for learning and school.',
      'Leadership Role: Led groups of children in structured activities.',
      'Technology Instruction: Taught students how to use computers and basic technological tools.',
      'Athletic Development: Helped students improve their tennis skills through guided practice and coaching.'
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
