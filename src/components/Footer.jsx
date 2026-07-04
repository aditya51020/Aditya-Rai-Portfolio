import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 max-w-5xl mx-auto border-t border-white/[0.04] text-zinc-600">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest font-medium">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <span>&copy; {currentYear} Aditya Rai</span>
          <span className="h-1 w-1 rounded-full bg-zinc-800" />
          <span>Independent Software Engineer</span>
        </div>

        {/* Center / Aesthetic Note */}
        <div className="hidden md:block text-zinc-700">
          <span>Production-grade systems built with purpose</span>
        </div>

        {/* Right Side / Meta */}
        <div className="flex items-center space-x-2">
          <span>UTC +5:30</span>
          <span className="h-1 w-1 rounded-full bg-zinc-800" />
          <span>India</span>
        </div>
      </div>
    </footer>
  );
}