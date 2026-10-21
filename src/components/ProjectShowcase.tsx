import React, { useState } from 'react';
import { INITIAL_PROJECTS } from '../data/mockProjects';
import { ProjectItem, Language } from '../types/portfolio';
import { 
  Play, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle,
  Database,
  X
} from 'lucide-react';
import { AiChatbotSimulator } from './AiChatbotSimulator';
import { SaasDashboardSimulator } from './SaasDashboardSimulator';

interface ProjectShowcaseProps {
  language: Language;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProjectForSim, setSelectedProjectForSim] = useState<ProjectItem | null>(null);

  const filteredProjects = INITIAL_PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>HIGH-CONVERTING PROJECT BLUEPRINT</span>
            <span aria-hidden="true">·</span>
            <span>SAAS &amp; AI CHATBOT BENCHMARKS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
            {language === 'bn' 
              ? 'যেভাবে SaaS ও AI Chatbot প্রজেক্ট শোকেস করলে চাকরি হয়' 
              : 'Production-Grade Project Showcases That Win Offers'}
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl leading-relaxed">
            {language === 'bn'
              ? 'নিচে দেখুন কিভাবে একটি প্রজেক্টকে শুধু সাধারণ কোড হিসেবে না দেখিয়ে সম্পূর্ণ আর্কিটেকচার, লাইভ সিমুলেটর ও ব্যবসায়িক ইমপ্যাক্টসহ উপস্থাপন করতে হয়।'
              : 'Observe how top engineers present complex architectures, live in-browser sandbox tests, and concrete quantitative metrics.'}
          </p>
        </div>

        {/* Filter Segmented Controls as per Section 1.A */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {language === 'bn' ? 'সব প্রজেক্ট' : 'All Projects'}
          </button>
          <button
            onClick={() => setActiveCategory('ai-chatbot')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeCategory === 'ai-chatbot'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {language === 'bn' ? 'AI চ্যাটবট' : 'AI Chatbots'}
          </button>
          <button
            onClick={() => setActiveCategory('saas-platform')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeCategory === 'saas-platform'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {language === 'bn' ? 'B2B SaaS প্ল্যাটফর্ম' : 'B2B SaaS'}
          </button>
          <button
            onClick={() => setActiveCategory('ai-document')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
              activeCategory === 'ai-document'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {language === 'bn' ? 'ডকুমেন্ট ইন্টেলিজেন্স' : 'Document AI'}
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-all duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media & Simulator Preview Column */}
              <div className="lg:col-span-5 relative bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback as per Zero-Broken-Image Policy
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* In-Card Interactive Simulator Trigger */}
                <div className="p-5 bg-slate-950/90 border-t border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>
                          {project.category === 'ai-chatbot'
                            ? (language === 'bn' ? 'লাইভ চ্যাটবট স্যান্ডবক্স' : 'Live RAG Sandbox')
                            : (language === 'bn' ? 'লাইভ SaaS ড্যাশবোর্ড টেস্ট' : 'Interactive SaaS Sandbox')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {language === 'bn'
                          ? 'পেজ পরিবর্তন না করেই সরাসরি টেস্ট করুন'
                          : 'Test real-time workflow directly inside browser'}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProjectForSim(project)}
                      className="px-3.5 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{language === 'bn' ? 'চালান' : 'Run Demo'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Case Study Details Column */}
              <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata Header (Zero-Pill discipline) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                    <span className="text-cyan-400 font-semibold">{project.status}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{project.category.replace('-', ' ')}</span>
                    <span aria-hidden="true">·</span>
                    <span>Q1 2026 Production</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-slate-400 mt-0.5">
                    {project.subtitle}
                  </p>

                  {/* Problem & Solution Case Study */}
                  <div className="mt-4 space-y-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-slate-100 font-semibold">
                        {language === 'bn' ? 'চ্যালেঞ্জ ও সমস্যা:' : 'The Problem:'}{' '}
                      </strong>
                      {project.problem}
                    </p>
                    <p>
                      <strong className="text-slate-100 font-semibold">
                        {language === 'bn' ? 'ইঞ্জিনিয়ারিং সমাধান:' : 'Engineered Solution:'}{' '}
                      </strong>
                      {project.solution}
                    </p>
                  </div>

                  {/* Quantitative Metrics Strip */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-800/80">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-lg md:text-xl font-bold font-mono text-cyan-400 tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-slate-300 font-medium">{metric.label}</div>
                        {metric.change && (
                          <div className="text-[10px] text-slate-500 font-mono">{metric.change}</div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Architecture Flow Pipeline */}
                  <div className="mt-5">
                    <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{language === 'bn' ? 'সিস্টেম আর্কিটেকচার ফ্লো:' : 'System Architecture Pipeline:'}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {project.architecture.slice(0, 3).map((arch, aIdx) => (
                        <div
                          key={aIdx}
                          className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 text-xs"
                        >
                          <div className="font-semibold text-white">{arch.name}</div>
                          <div className="text-[11px] text-slate-400">{arch.role}</div>
                          <div className="text-[10px] text-cyan-400 font-mono mt-1">{arch.tech}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Metadata (Unboxed text with dots) */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Stack:</span>
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="font-mono text-slate-400">
                        {tech}
                        {tIdx < project.techStack.length - 1 && <span className="text-slate-600 ml-1.5">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Links */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <button
                      onClick={() => setSelectedProjectForSim(project)}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{language === 'bn' ? 'লাইভ স্যান্ডবক্স ওপেন করুন' : 'Launch Sandbox Simulator'}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <span>Vercel Live</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal for Interactive Simulator */}
      {selectedProjectForSim && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{selectedProjectForSim.title}</span>
                  <span className="text-xs font-mono text-cyan-400 font-normal">
                    [Live Interactive Sandbox]
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  {language === 'bn'
                    ? 'রিক্রুটার বা ক্লায়েন্ট এভাবেই আপনার প্রজেক্টের লাইভ ফাংশন টেস্ট করবে'
                    : 'Interactive demonstration of how recruiters experience your live system'}
                </p>
              </div>

              <button
                onClick={() => setSelectedProjectForSim(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Active Simulator */}
            <div className="p-4 md:p-6 overflow-y-auto">
              {selectedProjectForSim.category === 'ai-chatbot' || selectedProjectForSim.category === 'ai-document' ? (
                <AiChatbotSimulator language={language} />
              ) : (
                <SaasDashboardSimulator language={language} />
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>
                {language === 'bn' 
                  ? 'এই ধরনের ইন্টারেক্টিভ উইজেট আপনার Vercel সাইটে রাখলে কনভার্সন রেট ৯০% বাড়ে'
                  : 'Embedding this sandbox directly on your site converts 90% of recruiter visitors'}
              </span>
              <button
                onClick={() => setSelectedProjectForSim(null)}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded font-medium"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
