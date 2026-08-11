import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, Send, CheckCircle2, AlertTriangle, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all form fields.');
      return;
    }

    try {
      setStatus('loading');
      // Submits to the FastAPI backend via Vite proxy/CORS
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.detail?.[0]?.msg || errorData?.detail || 'Failed to submit form.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrorMessage('');
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'The server could not be reached. Please verify the FastAPI backend is running.');
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-4" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto">
            Have a project in mind, an opportunity to discuss, or just want to say hi? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Details Left Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mb-6">
                Let's discuss your next project
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects, technical challenges, and collaboration opportunities. Let me know how I can help!
              </p>

              {/* Social Channels */}
              <div className="space-y-4">
                {/* Email link */}
                <a 
                  href="mailto:germanparra321@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-55/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-850 hover:border-brand-light/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light rounded-xl group-hover:scale-105 transition-transform duration-350">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Email Me At</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">germanparra321@gmail.com</p>
                  </div>
                </a>

                {/* Phone link */}
                <a 
                  href="tel:+15203138639" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-55/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-850 hover:border-brand-light/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light rounded-xl group-hover:scale-105 transition-transform duration-350">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Call Me At</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">+1 (520) 313-8639</p>
                  </div>
                </a>

                {/* GitHub link */}
                <a 
                  href="https://github.com/germanparra0202" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-55/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-850 hover:border-brand-light/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light rounded-xl group-hover:scale-105 transition-transform duration-350">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Follow My Code</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">github.com/germanparra0202</p>
                  </div>
                </a>

                {/* LinkedIn link */}
                <a 
                  href="https://www.linkedin.com/in/germanparra02/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-55/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-850 hover:border-brand-light/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light rounded-xl group-hover:scale-105 transition-transform duration-350">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Connect on Professional Network</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">linkedin.com/in/germanparra02</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume Download Action Button */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-slate-250/20 dark:border-slate-800/40">
              {/* REPLACE: Put your resume.pdf file in /frontend/public/resume.pdf */}
              <a
                href="/resume.pdf"
                download="German_Parra_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-850 dark:hover:bg-slate-100 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Download className="w-4.5 h-4.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Form Fields Right Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form status states alerts */}
                {status === 'success' && (
                  <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-2xl text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-xs opacity-90 mt-0.5">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 rounded-2xl text-sm animate-fade-in-up">
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Error submitting form</p>
                      <p className="text-xs opacity-90 mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="German Watson"
                    className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl text-slate-950 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:focus:ring-brand-light/35 focus:border-brand dark:focus:border-brand-light transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="germanparra321@gmail.com"
                    className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl text-slate-950 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:focus:ring-brand-light/35 focus:border-brand dark:focus:border-brand-light transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="How can I help you?..."
                    className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-xl text-slate-950 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:focus:ring-brand-light/35 focus:border-brand dark:focus:border-brand-light transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 px-6 bg-brand hover:bg-brand-dark disabled:bg-slate-400 dark:disabled:bg-slate-850 text-white rounded-xl font-medium shadow-md hover:shadow-brand/20 flex items-center justify-center gap-2 group transition-all duration-300"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
