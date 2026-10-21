import React from 'react';
import { Mail, ArrowUpRight, FileText, Database } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onResumeClick: () => void;
  onDeployClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onResumeClick, onDeployClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3.5 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single element wordmark */}
        <a 
          href="#"
          className="text-base md:text-lg font-bold font-display tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors"
        >
          Rowshanara Akhter
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a 
            href="#systems" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Systems
          </a>
          <a 
            href="#system-flow" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Live Flow
          </a>
          <a 
            href="#database-design" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <span>DB Schemas</span>
          </a>
          <a 
            href="#architecture" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Architecture
          </a>
          <a 
            href="#contact" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action + CV Button + Deploy Guide */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onDeployClick}
            className="px-2.5 py-1.5 text-xs font-mono font-medium text-cyan-300 hover:text-white bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-800/80 rounded-lg transition-colors flex items-center gap-1"
            title="Deploy to Vercel Guide"
          >
            <span>Deploy to Vercel</span>
          </button>

          <button
            onClick={onResumeClick}
            className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            title="Inspect CV & Experience"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Resume</span>
          </button>

          <button
            onClick={onContactClick}
            className="px-3.5 py-1.5 text-xs md:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-95"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};
