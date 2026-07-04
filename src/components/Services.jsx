import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  Cpu, 
  Layers, 
  LineChart, 
  Database, 
  Zap, 
  MessageSquareCode 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      description: 'Building custom React and Node.js web applications engineered for scalability, safety, and performance. I handle architectural design, database modeling, and front-to-back integration.',
    },
    {
      icon: Briefcase,
      title: 'Business Websites',
      description: 'Developing bespoke promotional websites that elevate brand credibility, optimize conversion funnels, and represent your business at an elite level online.',
    },
    {
      icon: Layers,
      title: 'SaaS Development',
      description: 'Turning software concepts into subscription-ready products. Implementing robust tenant isolation, payment flows, subscription gates, and user management systems.',
    },
    {
      icon: Cpu,
      title: 'AI Integrations',
      description: 'Leveraging LLMs, Vector Databases, and Agentic frameworks (LangChain) to automate business operations, run semantic analysis, and develop custom AI co-pilots.',
    },
    {
      icon: LineChart,
      title: 'Custom Dashboards',
      description: 'Creating internal tooling and analytics dashboards that aggregate complex operations data, providing business operators with clear, real-time insights.',
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'Designing clean, secure, and self-documenting RESTful and GraphQL APIs that integrate seamlessly with third-party systems and client frontends.',
    },
    {
      icon: Zap,
      title: 'Website Optimization',
      description: 'Auditing and optimizing existing web applications to achieve perfect Lighthouse scores, reducing churn rates, and drastically improving SEO rankings.',
    },
    {
      icon: MessageSquareCode,
      title: 'Technical Consulting',
      description: 'Serving as a software consultant to define tech stacks, plan system architectures, review code quality, and help management make informed engineering choices.',
    },
  ];

  return (
    <section id="services" className="py-32 px-6 max-w-5xl mx-auto border-t border-white/[0.04]">
      {/* Title */}
      <div className="mb-20 space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block">
          Services
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          What I Offer to <span className="text-gradient">Scale Your Business</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel glass-panel-hover p-8 rounded-lg space-y-4 group transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-sm bg-white/[0.02] border border-white/[0.06] group-hover:border-white/10 group-hover:bg-white/[0.04] transition-all duration-300">
                <IconComponent className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-medium text-white tracking-tight">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
