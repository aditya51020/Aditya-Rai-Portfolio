import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: '01',
      category: 'Real Estate Platform',
      title: 'StarX Properties',
      link: 'https://starxproperties.in/',
      description: 'A modern, high-performance real estate platform designed to showcase luxury properties, generate high-intent leads, and create a premium, interactive property browsing experience.',
      problem: 'The client needed to replace a slow, template-based WordPress site that suffered from high bounce rates, poor lead capturing, and lack of visual sophistication to match their high-end property listings.',
      solution: 'Built a custom headless React framework with lightning-fast static generation, an optimized image delivery pipeline, a robust search engine with smart filtering, and direct CRM integrations for instant lead alerts.',
      impact: 'Decreased page load times by 70%, resulting in a 42% increase in property inquiries and a significantly elevated digital brand presence.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'Headless CMS', 'Vercel'],
    },
    {
      id: '02',
      category: 'Custom Freelance Project',
      title: 'Aether Analytics Dashboard',
      link: null,
      description: 'A enterprise-grade BI dashboard built for a SaaS logistics client to track real-time delivery performance, driver metrics, and automated route optimizations.',
      problem: 'Operating with fragmented CSV spreadsheets and manual reports, causing a 6-hour delay in decision-making and frequent routing inefficiencies.',
      solution: 'Engineered a real-time analytics portal utilizing WebSocket streams, custom chart visualizations, and an automated route planning engine using coordinate APIs.',
      impact: 'Reduced operational lag from 6 hours to sub-second real-time tracking, improving route efficiency by 18% in the first quarter of deployment.',
      tech: ['React', 'Tailwind', 'Node.js', 'Express', 'WebSockets', 'ChartJS', 'PostgreSQL'],
    },
    {
      id: '03',
      category: 'SaaS Platform Placeholder',
      title: 'Synergy AI Portal',
      link: null,
      description: 'An AI-powered client onboarding and document parsing platform designed to streamline corporate accounting workflows.',
      problem: 'Accounting departments spending thousands of hours manually transcribing client invoices and auditing transaction categories.',
      solution: 'Designed and implemented an automated agentic flow that extracts raw text, executes intelligent semantic mapping, and flags inconsistencies automatically.',
      impact: 'Achieved 95% accuracy in automated bookkeeping categorization, saving accounts team over 30 hours per week.',
      tech: ['React', 'LangChain', 'OpenAI API', 'Tailwind', 'Docker', 'MongoDB'],
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
      {/* Section Title */}
      <div className="mb-20 space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block">
          Featured Work
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Case Studies of <span className="text-gradient">Real Solutions</span>
        </h2>
      </div>

      {/* Case Studies List */}
      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            {/* Visual Separation Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.06] group-hover:bg-white/[0.12] transition-colors duration-500" />
            
            <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Title & Tech */}
              <div className="lg:col-span-4 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block">
                    {`Case Study ${project.id} // ${project.category}`}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium px-2 py-0.5 rounded-sm bg-white/[0.03] border border-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white hover:text-zinc-300 font-semibold group/link"
                    >
                      <Globe className="h-4 w-4 text-zinc-400" />
                      <span>Live Website</span>
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 opacity-60" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-zinc-600 font-semibold cursor-not-allowed">
                      <Layers className="h-4 w-4 text-zinc-700" />
                      <span>Confidential Client Work</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Case Study Structure (Problem, Solution, Impact) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4 lg:pt-0">
                
                {/* Problem */}
                <div className="glass-panel p-6 rounded-md space-y-3">
                  <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                    The Problem
                  </h4>
                  <p className="text-zinc-500 text-xs font-light leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="glass-panel p-6 rounded-md space-y-3 border-white/[0.08] bg-white/[0.02]">
                  <h4 className="text-[11px] uppercase tracking-wider text-zinc-300 font-semibold">
                    The Solution
                  </h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="glass-panel p-6 rounded-md space-y-3">
                  <h4 className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                    The Impact
                  </h4>
                  <p className="text-zinc-500 text-xs font-light leading-relaxed">
                    {project.impact}
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
