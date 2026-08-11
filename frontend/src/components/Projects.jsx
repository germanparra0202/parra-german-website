import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'Real Estate Startup',
    description: 'SaaS MVP to ingest property-management emails, classify them, create/update cases, and draft automated responses for human approval.',
    tech_stack: ['Next.js', 'FastAPI', 'Supabase', 'TypeScript', 'PostgreSQL'],
    image_url: '/leasepilot.png', // Path to the uploaded landing page screenshot
    demo_url: 'https://prop.domec.dev/',
    github_url: 'https://github.com/germanparra0202/real-estate-professional-project',
    roadmap: [
      'v1.0 Foundation (DONE): Singular account structure, core entities (Properties, Units, Tenants, Leases), decimal financial ledger.',
      'v1.1 Operational Excellence (IN PROGRESS): Portfolio command center (KPI widgets), automated rent engine, migration import wedge.',
      'v2.0 Enterprise & Hierarchy (TARGETED): Multi-Type Identity, PM parent-child relationships, scoped RLS access, aggregated KPI rollup.'
    ],
    structure: [
      'apps/web – Next.js + TypeScript frontend (Tailwind-ready)',
      'apps/api – FastAPI backend with modular router layout',
      'packages/shared – Shared contracts and utilities (placeholder)'
    ],
    next_steps: [
      'Wire Postmark inbound webhook to POST /webhooks/email/inbound.',
      'Add schema/migration tooling for Postgres.',
      'Implement auth module and shared identity resolver.',
      'Connect Celery/Redis for async jobs and S3 for storage.'
    ]
  },
  {
    id: 2,
    title: 'Task Orchestration Dashboard',
    description: 'A sleek Kanban board workspace utilizing React and Tailwind CSS. Built with responsive drag-and-drop actions, local storage state persistence, and beautiful glassmorphism overlays.',
    tech_stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    image_url: '',
    demo_url: 'https://demo.example.com',
    github_url: 'https://github.com/germanparra0202'
  },
  {
    id: 3,
    title: 'Real-Time IoT Monitor',
    description: 'A telemetry dashboard displaying real-time metrics for simulated IoT sensors. Uses FastAPI WebSocket connections and animated React SVG graphs for interactive charting.',
    tech_stack: ['FastAPI', 'WebSockets', 'React', 'Chart.js'],
    image_url: '',
    demo_url: 'https://demo.example.com',
    github_url: 'https://github.com/germanparra0202'
  }
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // The API request goes through the Vite proxy to http://localhost:8000/api/projects
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error(`Server returned status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.warn('FastAPI backend projects API not reachable. Using fallback local project seeds.', err);
        setProjects(FALLBACK_PROJECTS);
        // We do not block the page with an error state, just use fallbacks but set indicator if desired
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Projects
          </h2>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto mt-4" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-md mx-auto">
            A selection of my recent developments. Dynamic project data is pulled directly from the FastAPI backend.
          </p>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-brand/20 border-t-brand rounded-full animate-spin"></div>
            <p className="text-sm text-slate-500 dark:text-slate-450 mt-4 font-medium">Fetching projects...</p>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="glass-card rounded-3xl overflow-hidden flex flex-col shadow-sm group"
              >
                {/* Project Image Area */}
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-tr from-brand/10 to-teal/10 border-b border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center">
                  
                  {project.image_url ? (
                    <img 
                      src={project.image_url} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    /* Elegant CSS Gradient Placeholder */
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-teal/5 dark:from-brand/20 dark:to-teal/5 flex flex-col items-center justify-center p-4">
                      <Layers className="w-10 h-10 text-brand/35 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-550 uppercase">DEMO PREVIEW</span>
                    </div>
                  )}
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-light transition-colors font-display mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {(project.roadmap || project.structure || project.next_steps) && (
                      <div className="mb-4">
                        <button
                          onClick={() => setExpandedProjectId(expandedProjectId === project.id ? null : project.id)}
                          className="flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark dark:text-brand-light dark:hover:text-brand transition-colors group/btn"
                        >
                          {expandedProjectId === project.id ? 'Hide Specifications' : 'View Specifications & Roadmap'}
                          {expandedProjectId === project.id ? (
                            <ChevronUp className="w-3.5 h-3.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
                          )}
                        </button>
                        
                        {expandedProjectId === project.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 border-t border-slate-200/50 dark:border-slate-800/50 pt-4 space-y-4"
                          >
                            {project.roadmap && (
                              <div>
                                <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Roadmap & Ship Sequence</h4>
                                <ul className="space-y-1.5 text-xs text-slate-650 dark:text-slate-400">
                                  {project.roadmap.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-brand dark:bg-brand-light mt-1.5 shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {project.structure && (
                              <div>
                                <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Project Structure</h4>
                                <ul className="space-y-1 text-xs text-slate-650 dark:text-slate-400 font-mono">
                                  {project.structure.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900/60 p-1.5 rounded-lg border border-slate-200/20 dark:border-slate-800/20">
                                      <span className="w-1.5 h-1.5 rounded-full bg-teal dark:bg-teal-light mt-1.5 shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {project.next_steps && (
                              <div>
                                <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Next Steps</h4>
                                <ul className="space-y-1.5 text-xs text-slate-650 dark:text-slate-400">
                                  {project.next_steps.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-teal dark:bg-teal-light mt-1.5 shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech_stack.map((tech, tIndex) => (
                        <span 
                          key={tIndex} 
                          className="text-[11px] font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-900 text-slate-650 dark:text-slate-350 rounded-md border border-slate-200/40 dark:border-slate-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center gap-4 text-sm font-medium border-t border-slate-200/50 dark:border-slate-800/50 pt-4">
                      <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-600 hover:text-brand dark:text-slate-400 dark:hover:text-brand-light transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a 
                        href={project.demo_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-650 hover:text-brand dark:text-slate-400 dark:hover:text-brand-light transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
