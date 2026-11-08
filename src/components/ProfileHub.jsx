import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProfileHub.css';
import { PeekOn } from './Peekers';
import {
  ArrowUpRight, ArrowRight, Lock, MapPin, Mail, FileText,
  Code, Briefcase, Cpu, Layers, LineChart, Database, Zap, MessageSquareCode,
} from 'lucide-react';

// brand icons (lucide v1 no longer ships them)
const Github = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);
const Linkedin = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data — edit here                                                   */
/* ------------------------------------------------------------------ */
const PROFILE = {
  name: 'Aditya Rai',
  headline: 'Full Stack Developer · Data Analyst',
  location: 'India — Available Globally',
  photo: '/assets/profile.jpg', // put your photo at public/assets/profile.jpg
  bio: 'I build fast business websites and web platforms, and turn raw data into ML models and dashboards that help companies make better decisions.',
  skills: ['React', 'Next.js', 'Node.js', 'Tailwind', 'PostgreSQL', 'MongoDB', 'Python', 'Pandas', 'scikit-learn', 'Power BI'],
  email: 'adityaworkdesk@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aditya-rai01',
  github: 'https://github.com/aditya51020',
  resume: '/Adityarai.pdf',
};

const PROJECTS = [
  // ---------- Websites ----------
  {
    type: 'project', kind: 'web',
    tag: 'Real Estate Platform',
    title: 'StarX Properties',
    link: 'https://starxproperties.in/',
    description: 'A modern, high-performance real estate platform designed to showcase luxury properties, generate high-intent leads, and create a premium property browsing experience.',
    impact: '70% faster load times · 42% more property inquiries',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'Headless CMS', 'Vercel'],
    featured: true,
  },
  {
    type: 'project', kind: 'web',
    tag: 'Company Website',
    title: 'Evoletrix',
    link: 'https://evoletrix.com/',
    description: 'Website for Evoletrix Private Limited, a Haryana-based software company building custom web apps, iOS apps, AI integrations, blockchain platforms, ERP systems, and GIS software.',
    meta: 'Business website',
  },
  {
    type: 'project', kind: 'web',
    tag: 'Contractor Website · Canada',
    title: 'Trohan Electric & Construction',
    link: 'https://trohan.vercel.app/',
    description: 'Website for a licensed electrical and construction contractor in New Westminster, BC — service pages, a before/after project gallery, a blog, and a free-quote request form.',
    highlight: 'Services · Before/after gallery · Blog · Quote form',
    meta: 'Business website · Vercel',
  },
  {
    type: 'project', kind: 'web',
    tag: 'Web Platform',
    title: 'Student Competition Platform',
    link: null,
    description: 'A web platform where students can take part in competitions.',
    meta: 'Web platform',
  },

  // ---------- Data analysis ----------
  {
    type: 'project', kind: 'data',
    tag: 'Machine Learning · Classification',
    title: 'Customer Churn Prediction',
    code: 'https://github.com/aditya51020/Customer-Churn-Prediction',
    description: 'Predicts which telecom customers will churn using the Kaggle Telco dataset — EDA, cleaning, encoding, and Logistic Regression vs Random Forest, evaluated on precision, recall, F1 and ROC-AUC.',
    highlight: '7,043 customers · ~27% churn · top drivers: tenure, contract type, monthly charges',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Seaborn', 'Jupyter'],
  },
  {
    type: 'project', kind: 'data',
    tag: 'Analytics Dashboard',
    title: 'Vendor Performance Dashboard',
    code: 'https://github.com/aditya51020/vender-performance-dashboard',
    description: 'A dashboard for tracking and comparing vendor performance.',
    meta: 'Data dashboard',
  },
  {
    type: 'project', kind: 'data',
    tag: 'Power BI Dashboard',
    title: 'Airbnb Analytics Dashboard',
    code: 'https://github.com/aditya51020/airbnb-powerbi-dashboaed',
    description: 'An interactive Power BI dashboard built on Airbnb listings data.',
    tech: ['Power BI'],
  },
];

const SERVICES = [
  { type: 'service', icon: Code, title: 'Full Stack Web Development', meta: 'React · Node.js', description: 'Custom React and Node.js web applications engineered for scalability, safety, and performance — architecture, database modeling, and front-to-back integration.' },
  { type: 'service', icon: Briefcase, title: 'Business Websites', meta: 'Brand · Conversion', description: 'Bespoke websites that elevate brand credibility, optimize conversion funnels, and represent your business at an elite level online.' },
  { type: 'service', icon: Layers, title: 'SaaS Development', meta: 'Payments · Auth', description: 'Turning software concepts into subscription-ready products with tenant isolation, payment flows, subscription gates, and user management.' },
  { type: 'service', icon: Cpu, title: 'AI Integrations', meta: 'LLMs · Agents', description: 'LLMs, vector databases, and agentic frameworks (LangChain) to automate operations, run semantic analysis, and build custom AI co-pilots.' },
  { type: 'service', icon: LineChart, title: 'Data Analytics & Dashboards', meta: 'Python · Power BI', description: 'Cleaning and analysing business data with Python, building predictive models, and turning the results into clear, interactive dashboards.' },
  { type: 'service', icon: Database, title: 'API Development', meta: 'REST · GraphQL', description: 'Clean, secure, self-documenting REST and GraphQL APIs that integrate seamlessly with third-party systems and frontends.' },
  { type: 'service', icon: Zap, title: 'Website Optimization', meta: 'Lighthouse · SEO', description: 'Auditing and optimizing existing web apps for top Lighthouse scores, lower churn, and better SEO rankings.' },
  { type: 'service', icon: MessageSquareCode, title: 'Technical Consulting', meta: 'Architecture · Review', description: 'Defining tech stacks, planning system architecture, reviewing code quality, and helping teams make informed engineering choices.' },
];

const WEB = PROJECTS.filter((p) => p.kind === 'web');
const DATA = PROJECTS.filter((p) => p.kind === 'data');

const TABS = [
  { key: 'service', label: 'Services', count: SERVICES.length },
  { key: 'web', label: 'Websites', count: WEB.length },
  { key: 'data', label: 'Data Analysis', count: DATA.length },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const scrollTo = (e, href) => {
  e.preventDefault();
  if (window.lenis) window.lenis.scrollTo(href, { duration: 1.2 });
  else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

// tiny hand-drawn underline, same ink as the crowd
const Squiggle = ({ color = '#f4f4f4' }) => (
  <svg className="hub-squiggle" viewBox="0 0 120 10" fill="none" aria-hidden="true">
    <path d="M2 6 C 12 1, 20 9, 30 5 S 48 1, 58 5 S 76 9, 86 5 S 104 1, 118 5" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const tilt = (i) => `${[-1.2, 0.9, -0.6, 1.1, -0.9, 0.7][i % 6]}deg`;

function Avatar() {
  const [failed, setFailed] = useState(false);
  const initials = PROFILE.name.split(' ').map((w) => w[0]).join('');
  return (
    <div className="hub-avatar">
      {failed ? (
        <div className="initials">{initials}</div>
      ) : (
        <img src={PROFILE.photo} alt={PROFILE.name} onError={() => setFailed(true)} />
      )}
      <span className="status" title="Available for work" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Left: sticky profile sticker                                       */
/* ------------------------------------------------------------------ */
function ProfileCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="sticker relative lg:sticky lg:top-28 p-7 space-y-6"
    >
      <PeekOn seed={41} size={120} right={30} />
      <div className="flex items-start justify-between">
        <Avatar />
        <span className="ink-chip solid">● Available</span>
      </div>

      <div className="space-y-2">
        <h2 className="mono text-2xl font-bold tracking-[0.08em] uppercase">{PROFILE.name}</h2>
        <p className="text-sm font-medium text-zinc-700">{PROFILE.headline}</p>
        <p className="mono flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-zinc-600">
          <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
        </p>
      </div>

      <p className="text-sm text-zinc-700 leading-relaxed">{PROFILE.bio}</p>

      {/* Quick stats */}
      <div className="ink-box hub-stats text-center">
        {[
          [PROJECTS.length, 'Projects'],
          [SERVICES.length, 'Services'],
          [PROFILE.skills.length, 'Core Skills'],
        ].map(([n, label]) => (
          <div key={label} className="py-3">
            <div className="mono text-xl font-bold">{n}</div>
            <div className="mono text-[10px] uppercase tracking-wider text-zinc-600">{label}</div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {PROFILE.skills.map((s) => (
          <span key={s} className="ink-chip">{s}</span>
        ))}
      </div>

      {/* CTAs */}
      <div className="grid grid-cols-2 gap-3">
        <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="ink-btn">
          Let's Talk
        </a>
        <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="ink-btn paper">
          <FileText className="h-3.5 w-3.5" /> Resume
        </a>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-2.5">
        {[
          { href: `mailto:${PROFILE.email}`, Icon: Mail, label: 'Email' },
          { href: PROFILE.linkedin, Icon: Linkedin, label: 'LinkedIn' },
          { href: PROFILE.github, Icon: Github, label: 'GitHub' },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="ink-icon"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <span className="mono ml-auto text-[10px] text-zinc-600 truncate">{PROFILE.email}</span>
      </div>
    </motion.aside>
  );
}

/* ------------------------------------------------------------------ */
/*  Right: sticker cards                                               */
/* ------------------------------------------------------------------ */
function ProjectCard({ item, i }) {
  const dark = !!item.featured;
  const tech = item.tech || [];
  const extra = tech.length - 3;
  const meta = tech.length ? `${tech.slice(0, 3).join(' · ')}${extra > 0 ? ` +${extra}` : ''}` : item.meta || '';
  const note = item.impact ? `↑ ${item.impact}` : item.highlight;
  return (
    <div className={`sticker pop ${dark ? 'dark' : ''} h-full flex flex-col p-6`} style={{ '--tilt': tilt(i) }}>
      <div className="flex items-center justify-between gap-2">
        <span className="ink-chip">{item.kind === 'data' ? 'Data Analysis' : 'Website'}</span>
        {item.featured && <span className="ink-chip solid">★ Featured</span>}
      </div>

      <h3 className="mono mt-5 text-lg font-bold uppercase tracking-[0.08em] leading-snug">{item.title}</h3>
      <p className={`mono text-[10px] uppercase tracking-widest mt-1 ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{item.tag}</p>
      <p className={`mt-3 text-sm leading-relaxed line-clamp-3 ${dark ? 'text-zinc-300' : 'text-zinc-700'}`}>{item.description}</p>

      {note && <div className="ink-box mt-4 px-3 py-2 mono text-[11px] font-semibold">{note}</div>}

      <div className="mt-auto pt-5">
        <div className="ink-box flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5">
          <span className={`mono text-[11px] truncate ${dark ? 'text-zinc-300' : 'text-zinc-700'}`}>{meta}</span>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="ink-btn shrink-0">
              Visit <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : item.code ? (
            <a href={item.code} target="_blank" rel="noopener noreferrer" className="ink-btn paper shrink-0">
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          ) : (
            <span className="ink-btn muted shrink-0">
              <Lock className="h-3.5 w-3.5" /> Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ item, i }) {
  const Icon = item.icon;
  return (
    <div className="sticker pop h-full flex flex-col p-6" style={{ '--tilt': tilt(i) }}>
      <div className="flex items-center justify-between">
        <span className="ink-chip">Service</span>
        <span className="ink-icon" style={{ width: 46, height: 46 }}>
          <Icon className="h-5 w-5" />
        </span>
      </div>

      <h3 className="mono mt-5 text-lg font-bold uppercase tracking-[0.08em] leading-snug">{item.title}</h3>
      <p className="mt-3 text-sm text-zinc-700 leading-relaxed line-clamp-3">{item.description}</p>

      <div className="mt-auto pt-5">
        <div className="ink-box flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5">
          <span className="mono text-[11px] text-zinc-700 truncate">{item.meta}</span>
          <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="ink-btn shrink-0">
            Enquire <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function ProfileHub() {
  const [tab, setTab] = useState('service');
  const [expanded, setExpanded] = useState(false);
  const all = tab === 'web' ? WEB : tab === 'data' ? DATA : SERVICES;
  const LIMIT = 4;
  const items = expanded ? all : all.slice(0, LIMIT);

  return (
    <section id="projects" className="hub relative py-24 px-6 max-w-6xl mx-auto">
      {/* keeps the navbar "Services" link working */}
      <span id="services" className="absolute -top-24" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left */}
        <div className="lg:col-span-4 min-w-0">
          <ProfileCard />
        </div>

        {/* Right */}
        <div className="lg:col-span-8 space-y-8 min-w-0">
          <div>
            <span className="hub-kicker block">Work &amp; Services</span>
            <h2 className="hub-title text-2xl md:text-3xl mt-3">What I've built &amp; what I offer</h2>
            <Squiggle />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 p-2 -m-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => { setTab(t.key); setExpanded(false); }}
                className={`hub-tab ${tab === t.key ? 'active' : ''}`}
              >
                {t.label}
                {t.count ? <span className="count">{t.count}</span> : null}
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.type === 'project' ? <ProjectCard item={item} i={i} /> : <ServiceCard item={item} i={i} />}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {all.length > LIMIT && (
            <div className="flex justify-center pt-2">
              <button
                onClick={() => {
                  if (expanded) document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  setExpanded((v) => !v);
                }}
                className="hub-tab"
              >
                {expanded ? 'Show less ↑' : `Show ${all.length - LIMIT} more ↓`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
