import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Issued Nov 2023',
    credential_id: 'AWS-ASA-12345',
    link: 'https://aws.amazon.com'
  },
  {
    name: 'Certified ScrumMaster (CSM)',
    issuer: 'Scrum Alliance',
    date: 'Issued Jun 2022',
    credential_id: 'CSM-987654',
    link: 'https://scrumalliance.org'
  },
  {
    name: 'Professional Cloud Developer',
    issuer: 'Google Cloud Platform (GCP)',
    date: 'Issued Mar 2021',
    credential_id: 'GCP-PCD-54321',
    link: 'https://cloud.google.com'
  }
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const toggleOpen = () => setShowAll(!showAll);

  const listVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.4, 
        ease: 'easeInOut',
        staggerChildren: 0.1
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Toggle Trigger Button */}
        <button
          onClick={toggleOpen}
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Award className="w-5 h-5 text-brand dark:text-brand-light" />
          <span>{showAll ? 'Hide Certifications & Licenses' : 'View Certifications & Licenses'}</span>
          {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Collapsible Panel Content */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden mt-8 text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-card rounded-2xl p-5 border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-2 bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light w-fit rounded-xl mb-4">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-snug font-display mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-brand dark:text-brand-light font-semibold mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
                        {cert.date}
                      </p>
                      <p className="text-[11px] font-mono text-slate-400 dark:text-slate-550 truncate">
                        ID: {cert.credential_id}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-900">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-550 hover:text-brand dark:text-slate-450 dark:hover:text-brand-light transition-colors"
                      >
                        Verify Credential
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
