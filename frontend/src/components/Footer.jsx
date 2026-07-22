import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

          {/* Logo Name & Small Tagline */}
          <div className="text-center md:text-left">
            <span className="font-display font-extrabold text-xl bg-gradient-to-r from-brand to-teal bg-clip-text text-transparent">
              German.Dev
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Full-Stack Software Engineer. Building scalable backend solutions and elegant, fast client UI.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <button onClick={() => handleScrollTo('home')} className="hover:text-brand dark:hover:text-brand-light transition-colors">Home</button>
            <button onClick={() => handleScrollTo('about')} className="hover:text-brand dark:hover:text-brand-light transition-colors">About</button>
            <button onClick={() => handleScrollTo('skills')} className="hover:text-brand dark:hover:text-brand-light transition-colors">Skills</button>
            <button onClick={() => handleScrollTo('experience')} className="hover:text-brand dark:hover:text-brand-light transition-colors">Experience</button>
            <button onClick={() => handleScrollTo('projects')} className="hover:text-brand dark:hover:text-brand-light transition-colors">Projects</button>
            <button onClick={() => handleScrollTo('education')} className="hover:text-brand dark:hover:text-brand-light transition-colors">Education</button>
            <button onClick={() => handleScrollTo('contact')} className="hover:text-brand dark:hover:text-brand-light transition-colors">Contact</button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center md:justify-end items-center gap-5 text-slate-500 dark:text-slate-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-brand-light transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand dark:hover:text-brand-light transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:germanparra321@gmail.com" className="hover:text-brand dark:hover:text-brand-light transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Copyright notice & scroll to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200/50 dark:border-slate-800/50 pt-8 mt-8 text-center text-xs text-slate-450 dark:text-slate-500 font-medium">
          <p>© {year} German Parra. All rights reserved. Built with React, Tailwind & FastAPI.</p>

          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-1.5 hover:text-brand dark:hover:text-brand-light transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
