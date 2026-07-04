import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-[#030303]/60 backdrop-blur-xl border-b border-white/[0.04]' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a 
          href="#" 
          className="flex items-center space-x-2.5 group"
        >
          <span className="font-serif text-lg md:text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-zinc-300">
            Aditya Rai
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-white opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="hidden sm:inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-wider text-zinc-500 font-medium px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Contracts</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center space-x-1 text-xs uppercase tracking-widest text-white hover:text-zinc-300 transition-colors duration-300 font-medium group"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-60" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-zinc-400 hover:text-white transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[60px] z-30 bg-[#030303]/98 backdrop-blur-2xl md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 p-8 items-center justify-center h-[calc(100vh-100px)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-light uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-1.5 text-lg font-light uppercase tracking-widest text-white hover:text-zinc-300 transition-colors duration-300"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          
          <div className="pt-8 border-t border-white/[0.05] w-full flex flex-col items-center justify-center space-y-4">
            <span className="flex items-center space-x-2 text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select roles</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
