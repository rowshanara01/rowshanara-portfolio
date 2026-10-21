import React from 'react';
import { Language } from '../types/portfolio';
import { Globe, UserCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenAudit: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onOpenAudit,
  activeTab,
  setActiveTab,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single element wordmark */}
        <button 
          onClick={() => setActiveTab('live-portfolio')}
          className="text-left group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
        >
          <span className="text-base md:text-lg font-bold font-display tracking-tight text-white whitespace-nowrap group-hover:text-cyan-400 transition-colors">
            Rowshanara <span className="text-cyan-400 font-mono text-xs font-normal">SaaS &amp; AI</span>
          </span>
        </button>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('live-portfolio')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'live-portfolio'
                ? 'text-cyan-400 border-b border-cyan-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            {language === 'bn' ? 'আমার পোর্টফোলিও' : 'Live Portfolio'}
          </button>

          <button
            onClick={() => setActiveTab('skill-strategy')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'skill-strategy'
                ? 'text-cyan-400 border-b border-cyan-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            {language === 'bn' ? 'স্কিল উপস্থাপনের গাইড' : 'Skill Strategy'}
          </button>

          <button
            onClick={() => setActiveTab('showcase')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'showcase'
                ? 'text-cyan-400 border-b border-cyan-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            {language === 'bn' ? 'প্রজেক্ট ডেমো স্যান্ডবক্স' : 'Project Demos'}
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'audit'
                ? 'text-cyan-400 border-b border-cyan-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            {language === 'bn' ? 'জব রেডিনেস অডিট' : 'Readiness Audit'}
          </button>

          <button
            onClick={() => setActiveTab('casestudy')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'casestudy'
                ? 'text-cyan-400 border-b border-cyan-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            {language === 'bn' ? 'কেস স্টাডি জেনারেটর' : 'Case Study Builder'}
          </button>
        </nav>

        {/* Zone 3: 1 primary action + clean language toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            title="Switch language / ভাষা পরিবর্তন করুন"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono">{language === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>

          <button
            onClick={() => setActiveTab('live-portfolio')}
            className="px-3.5 py-2 text-xs md:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-95"
          >
            {language === 'bn' ? 'রেডি সাইট দেখুন' : 'View Ready Site'}
          </button>
        </div>
      </div>
    </header>
  );
};
