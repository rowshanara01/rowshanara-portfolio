import React from 'react';
import { Language } from '../types/portfolio';
import { 
  Bot, 
  Cloud, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Database, 
  ShieldCheck, 
  FileCode,
  DollarSign
} from 'lucide-react';

interface SkillPresentationGuideProps {
  language: Language;
  onGoToPortfolio: () => void;
}

export const SkillPresentationGuide: React.FC<SkillPresentationGuideProps> = ({
  language,
  onGoToPortfolio,
}) => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>HIGH-CONVERSION ENGINEERING BLUEPRINT</span>
          <span aria-hidden="true">·</span>
          <span>SAAS &amp; AI CHATBOT PRESENTATION</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold font-display text-white tracking-tight">
          {language === 'bn'
            ? 'SaaS ও AI চ্যাটবট স্কিল কীভাবে উপস্থাপন করলে নিশ্চিত জব পাওয়া যাবে?'
            : 'How to Position SaaS & AI Chatbot Skills to Win Job Offers'}
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-400 max-w-3xl leading-relaxed">
          {language === 'bn'
            ? 'শুধু সাধারণ স্কিল-লিস্ট (যেমন: "React, Node, AI") লিখলে রিক্রুটাররা গুরুত্ব দেয় না। নিচে দেখুন কিভাবে সাধারণ স্কিলকে হাই-পেয়িং প্রোডাকশন ইঞ্জিনিয়ারিং ল্যাঙ্গুয়েজে রূপান্তর করতে হয়।'
            : 'Listing generic keywords ("React, AI, Node") gets ignored. Discover the exact 4-tier architectural positioning that separates top 5% candidates.'}
        </p>
      </div>

      {/* Part 1: AI Chatbot Skill Presentation Transformation */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 mb-10">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {language === 'bn' ? '১. AI চ্যাটবট স্কিল উপস্থাপনের কৌশল' : '1. AI Chatbot Skill Positioning Strategy'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'bn' ? 'API র‍্যাপার বনাম প্রোডাকশন RAG ইঞ্জিনিয়ার' : 'API Wrapper vs Production AI System Engineer'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Wrong way */}
          <div className="bg-slate-950 p-5 rounded-xl border border-rose-950/50">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs md:text-sm mb-3">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>{language === 'bn' ? '❌ যেভাবে লিখলে রিজেক্ট হবেন (ভুল উপায়):' : '❌ How Most Candidates Write (Rejected):'}</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded font-mono text-xs text-slate-400 mb-3">
              &quot;I built an AI chatbot using OpenAI API and React to answer user questions.&quot;
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
              <li>{language === 'bn' ? 'রিক্রুটার ভাবে: এটা তো ২০ মিনিটের টিউটোরিয়াল কপি!' : 'Recruiter thinks: 10-minute tutorial wrapper clone.'}</li>
              <li>{language === 'bn' ? 'কোথায় ডাটাবেজ, কীভাবে হ্যালুসিনেশন আটকায়—কিছুই নেই।' : 'No mention of memory, chunking, or hallucination guards.'}</li>
              <li>{language === 'bn' ? 'খরচ ও লেটেন্সি নিয়ে কোনো কথা নেই।' : 'Zero token cost awareness or latency metrics.'}</li>
            </ul>
          </div>

          {/* Right way */}
          <div className="bg-slate-950 p-5 rounded-xl border border-cyan-950/60">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs md:text-sm mb-3">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{language === 'bn' ? '✅ যেভাবে লিখলে ইন্টারভিউ নিশ্চিত (সঠিক উপায়):' : '✅ How High-Earning Engineers Write (Hired):'}</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded font-mono text-xs text-cyan-200 mb-3 leading-relaxed">
              &quot;Architected an enterprise RAG agent with sub-second streaming, vector embeddings in pgvector, multi-turn memory buffer, and automated human CRM escalation.&quot;
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span><strong>RAG Pipeline:</strong> Document chunking, dense embeddings, hybrid search.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span><strong>Cost Optimization:</strong> System prompt compression, caching frequent queries.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span><strong>Latency &amp; UX:</strong> WebSocket streaming with sub-400ms time to first token.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Part 2: SaaS Project Skill Presentation Transformation */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 mb-10">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Cloud className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {language === 'bn' ? '২. SaaS প্রজেক্ট স্কিল উপস্থাপনের কৌশল' : '2. SaaS Platform Skill Positioning Strategy'}
            </h3>
            <p className="text-xs text-slate-400">
              {language === 'bn' ? 'CRUD অ্যাপ বনাম এন্টারপ্রাইজ মাল্টি-টেন্যান্ট প্ল্যাটফর্ম' : 'Basic CRUD App vs Enterprise Multi-Tenant Architecture'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Wrong way */}
          <div className="bg-slate-950 p-5 rounded-xl border border-rose-950/50">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs md:text-sm mb-3">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>{language === 'bn' ? '❌ যেভাবে লিখলে গুরুত্ব পাওয়া যায় না:' : '❌ The Unimpressive CRUD Description:'}</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded font-mono text-xs text-slate-400 mb-3">
              &quot;Full-stack web application with React, Express and MongoDB for managing user tasks.&quot;
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
              <li>{language === 'bn' ? 'বাজারে ১০ লাখ ফ্রেশারের সাইটে একই লেখা থাকে।' : 'Indistinguishable from millions of bootcamp graduates.'}</li>
              <li>{language === 'bn' ? 'কোনো মানিটাইজেশন বা পেমেন্ট হ্যান্ডেল করার প্রমাণ নেই।' : 'No billing or monetization infrastructure.'}</li>
              <li>{language === 'bn' ? 'কোনো টিম বা মাল্টি-অর্গানাইজেশন সিকিউরিটি নেই।' : 'No team workspaces or security boundaries.'}</li>
            </ul>
          </div>

          {/* Right way */}
          <div className="bg-slate-950 p-5 rounded-xl border border-indigo-950/60">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs md:text-sm mb-3">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{language === 'bn' ? '✅ যেভাবে লিখলে ক্লায়েন্ট ও কোম্পানি লুফে নেয়:' : '✅ The Commercial SaaS Architecture:'}</span>
            </div>
            <div className="bg-slate-900/80 p-3 rounded font-mono text-xs text-indigo-200 mb-3 leading-relaxed">
              &quot;Multi-tenant B2B SaaS platform with Stripe subscription billing, PostgreSQL Row-Level Security (RLS), RBAC member roles, and automated usage quotas.&quot;
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span><strong>Stripe Webhook Pipeline:</strong> Idempotent event handlers for auto-provisioning.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span><strong>Multi-Tenancy &amp; RLS:</strong> Isolated database queries preventing tenant data leaks.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span><strong>Rate Limiting &amp; Quotas:</strong> Redis token buckets preventing API abuse.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Part 3: What information to give me */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>WHAT YOU NEED TO PROVIDE</span>
          <span aria-hidden="true">·</span>
          <span>TO FULLY PERSONALIZE YOUR SITE</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
          {language === 'bn' 
            ? 'আপনার পোর্টফোলিওটি ১০০% আপডেট করতে আমাকে যে তথ্যগুলো দিতে পারেন:' 
            : 'Information to Share to Complete Your Portfolio 100%:'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-300">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="font-semibold text-cyan-400 flex items-center gap-2">
              <FileCode className="w-4 h-4" />
              <span>১. আপনার প্রজেক্টের বিস্তারিত (Your Projects)</span>
            </div>
            <ul className="space-y-1 text-slate-400 list-disc list-inside">
              <li>আপনার SaaS প্রজেক্টটির নাম এবং কী কাজ করে?</li>
              <li>আপনার AI Chatbot-টিতে কোন মডেল বা টেকনোলজি ব্যবহার করেছেন?</li>
              <li>প্রজেক্টগুলোর লাইভ Vercel লিঙ্ক বা GitHub লিঙ্ক (যদি অলরেডি থাকে)।</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="font-semibold text-cyan-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>২. আপনার ব্যক্তিগত পরিচিতি (Personal Info)</span>
            </div>
            <ul className="space-y-1 text-slate-400 list-disc list-inside">
              <li>আপনার পুরো নাম (যেমন: Rowshanara Akhter)।</li>
              <li>আপনার LinkedIn প্রোফাইল লিঙ্ক ও GitHub ইউজারনেম।</li>
              <li>আপনার অভিজ্ঞতা (যেমন: ফ্রেশার, ১ বছর, বা ২ বছর প্র্যাকটিস)।</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <p className="text-xs text-slate-400">
            {language === 'bn'
              ? '💡 আপনি কোনো তথ্য না দিলেও আমরা প্রি-বিল্ট বিশ্বমানের SaaS ও AI চ্যাটবট শোকেস দিয়ে পুরো সাইট তৈরি করে রেখেছি!'
              : '💡 Even without custom inputs, our pre-engineered SaaS & AI benchmarks are fully populated!'}
          </p>
          <button
            onClick={onGoToPortfolio}
            className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs md:text-sm rounded-lg transition-colors flex items-center gap-2"
          >
            <span>{language === 'bn' ? 'আমার রেডি পোর্টফোলিও দেখুন' : 'View My Ready Portfolio'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
