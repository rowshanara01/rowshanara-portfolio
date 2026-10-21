import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { 
  XCircle, 
  CheckCircle2, 
  Clock, 
  Eye, 
  TrendingUp, 
  Briefcase, 
  DollarSign, 
  ChevronRight,
  ShieldAlert,
  Zap
} from 'lucide-react';

interface RecruiterPovComparisonProps {
  language: Language;
}

export const RecruiterPovComparison: React.FC<RecruiterPovComparisonProps> = ({ language }) => {
  const [selectedScenario, setSelectedScenario] = useState<'junior' | 'pro'>('pro');

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>HIRING MANAGER EYE-TRACKING ANALYSIS</span>
          <span aria-hidden="true">·</span>
          <span>THE 30-SECOND RECRUITER GAUNTLET</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
          {language === 'bn' 
            ? 'একজন রিক্রুটার বা ক্লায়েন্টের চোখে আপনার ওয়েবসাইট' 
            : 'How a Technical Recruiter Evaluates Your Portfolio in 30 Seconds'}
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl leading-relaxed">
          {language === 'bn'
            ? 'আন্তর্জাতিক সফটওয়্যার কোম্পানি ও ক্লায়েন্টরা প্রতিদিন শত শত আবেদন পায়। তারা আপনার সাইটে ক্লিক করে কোন কোন বিষয় দেখে সিদ্ধান্ত নেয়?'
            : 'Hiring managers spend less than 30 seconds on initial portfolio scans. See the contrast between what causes immediate rejection versus instant callback invitations.'}
        </p>
      </div>

      {/* Switcher Toggle */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl max-w-md mb-8">
        <button
          onClick={() => setSelectedScenario('junior')}
          className={`flex-1 py-2 px-3 text-xs md:text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 ${
            selectedScenario === 'junior'
              ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <XCircle className="w-4 h-4 text-rose-400" />
          <span>{language === 'bn' ? 'সাধারণ পোর্টফোলিও (রিজেকশন)' : 'Generic Portfolio (95% Skipped)'}</span>
        </button>

        <button
          onClick={() => setSelectedScenario('pro')}
          className={`flex-1 py-2 px-3 text-xs md:text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
            selectedScenario === 'pro'
              ? 'bg-cyan-500 text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{language === 'bn' ? 'SaaS & AI পোর্টফোলিও (হায়ার)' : 'SaaS/AI Specialist (Hired)'}</span>
        </button>
      </div>

      {/* Side-by-side or detailed perspective breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Scenario 1: Generic Portfolio */}
        <div
          className={`rounded-2xl p-6 md:p-8 border transition-all ${
            selectedScenario === 'junior'
              ? 'bg-slate-900/90 border-rose-500/50 shadow-lg'
              : 'bg-slate-950/60 border-slate-800 opacity-70'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>{language === 'bn' ? 'সাধারণ ডেভেলপার পোর্টফোলিও' : 'The Generic Developer Portfolio'}</span>
            </div>
            <span className="text-xs font-mono text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800/40">
              5% Callback Rate
            </span>
          </div>

          <div className="mt-4 space-y-4">
            <div className="space-y-1 text-xs">
              <span className="text-slate-400 font-medium">{language === 'bn' ? 'সাইটে যা থাকে:' : 'Typical Contents:'}</span>
              <p className="text-slate-300">
                To-Do List, Weather App, Calculator, বা সাধারণ ইউটিউব টিউটোরিয়াল কপি প্রজেক্ট।
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <span className="text-slate-400 font-medium">{language === 'bn' ? 'ডেমো লিংক:' : 'Demo Experience:'}</span>
              <p className="text-slate-300">
                শুধুমাত্র কিছু স্ক্রিনশট অথবা গিটহাবের ফাঁকা লিঙ্ক। কোনো লাইভ টেস্ট ক্রিডেনশিয়াল নেই।
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <span className="text-slate-400 font-medium">{language === 'bn' ? 'AI ফিচার:' : 'AI Chatbot Claims:'}</span>
              <p className="text-slate-300">
                শুধু একটি `fetch('/api/chat')` কল যাতে কোনো RAG, ভেক্টর ডাটাবেস বা বিজনেস ইউজ-কেস নেই।
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30 text-xs text-rose-300 space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'রিক্রুটারের প্রতিক্রিয়া (১০ম সেকেন্ডে):' : 'Recruiter Reaction at 10s:'}</span>
              </div>
              <p className="italic">
                &quot;{language === 'bn' 
                  ? 'এই প্রার্থী বেসিক সিনট্যাক্স জানে, কিন্তু আমাদের প্রোডাকশন কোডবেস সামলানোর মতো বাস্তব প্রজেক্ট এর নেই। পাস।' 
                  : 'Candidate has syntax skills, but no proof of production complexity or business acumen. Next resume.'}&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Scenario 2: High Impact SaaS & AI Portfolio */}
        <div
          className={`rounded-2xl p-6 md:p-8 border transition-all ${
            selectedScenario === 'pro'
              ? 'bg-slate-900/90 border-cyan-400/50 shadow-lg'
              : 'bg-slate-950/60 border-slate-800 opacity-70'
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
              <Zap className="w-4 h-4" />
              <span>{language === 'bn' ? 'SaaS ও AI চ্যাটবট স্পেশালিস্ট' : 'The Production SaaS & AI Engineer'}</span>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
              85% Callback Rate
            </span>
          </div>

          <div className="mt-4 space-y-4">
            <div className="space-y-1 text-xs">
              <span className="text-slate-400 font-medium">{language === 'bn' ? 'সাইটে যা থাকে:' : 'Typical Contents:'}</span>
              <p className="text-slate-300">
                Multi-tenant B2B SaaS প্ল্যাটফর্ম, Stripe সাবস্ক্রিপশন, এবং RAG ভেক্টর সার্চ চ্যাটবট।
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <span className="text-slate-400 font-medium">{language === 'bn' ? 'ডেমো লিংক:' : 'Demo Experience:'}</span>
              <p className="text-slate-300">
                সরাসরি ব্রাউজারে লাইভ স্যান্ডবক্স উইজেট + প্রিফিল্ড টেস্ট একাউন্ট বাটন। কোনো লগইন ঝামেলা নেই।
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <span className="text-slate-400 font-medium">{language === 'bn' ? 'AI ফিচার:' : 'AI Chatbot Claims:'}</span>
              <p className="text-slate-300">
                pgvector এম্বেডিং, সাব-সেকেন্ড স্ট্রিমিং লেটেন্সি, ডক সার্চ ও হিউম্যান এসকেলেশন ফলব্যাক।
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-300 space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'রিক্রুটারের প্রতিক্রিয়া (১০ম সেকেন্ডে):' : 'Recruiter Reaction at 10s:'}</span>
              </div>
              <p className="italic">
                &quot;{language === 'bn' 
                  ? 'বাহ! ইনি সরাসরি মাল্টি-টেন্যান্ট ডেটাবেজ এবং স্ট্রাইপ পেমেন্ট হ্যান্ডেল করেছেন, আর চ্যাটবটটি লাইভ কাজ করছে! অবিলম্বে ইন্টারভিউ স্কেজিউল করা হোক।' 
                  : 'Wow! Candidate actually engineered production multi-tenancy, Stripe webhooks, and live vector RAG. Fast-track to interview.'}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Golden Rules Strip */}
      <div className="mt-12 p-6 md:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl">
        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          <span>{language === 'bn' ? 'চাকরি পাওয়ার ৫টি গোল্ডেন রুলস' : '5 Golden Rules to Land High-Paying Remote Tech Jobs'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-cyan-400 font-mono font-bold block mb-1">01. No Dead Clicks</span>
            <p className="text-slate-400">
              {language === 'bn' ? 'প্রতিটি বাটনের লাইভ রেসপন্স থাকতে হবে।' : 'Every project demo must load instantly.'}
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-cyan-400 font-mono font-bold block mb-1">02. Numbers Over Buzzwords</span>
            <p className="text-slate-400">
              {language === 'bn' ? 'প্রজেক্টের লেটেন্সি ও কস্টের সংখ্যা দিন।' : 'Include concrete latency & cost figures.'}
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-cyan-400 font-mono font-bold block mb-1">03. Real Multi-Tenancy</span>
            <p className="text-slate-400">
              {language === 'bn' ? 'SaaS-এ রোল বেজড পারমিশন দেখান।' : 'Demonstrate tenant schema & auth roles.'}
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-cyan-400 font-mono font-bold block mb-1">04. Clean Architecture</span>
            <p className="text-slate-400">
              {language === 'bn' ? 'গিটহাবে আর্কিটেকচার ডায়াগ্রাম দিন।' : 'Provide visual pipeline diagrams.'}
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-cyan-400 font-mono font-bold block mb-1">05. 1-Click Contact</span>
            <p className="text-slate-400">
              {language === 'bn' ? 'LinkedIn ও Email এক ক্লিকে রাখুন।' : 'Direct email & resume download link.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
