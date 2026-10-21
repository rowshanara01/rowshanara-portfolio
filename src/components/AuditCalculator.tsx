import React, { useState } from 'react';
import { AUDIT_QUESTIONS } from '../data/mockProjects';
import { Language } from '../types/portfolio';
import { Check, X, ShieldAlert, Award, ArrowRight, Lightbulb, RefreshCw } from 'lucide-react';

interface AuditCalculatorProps {
  language: Language;
  onGoToCaseStudy: () => void;
  onGoToShowcase: () => void;
}

export const AuditCalculator: React.FC<AuditCalculatorProps> = ({
  language,
  onGoToCaseStudy,
  onGoToShowcase,
}) => {
  // Initial state: let's start with partial items checked to simulate a typical developer site
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    'q-live-demo': true,
    'q-saas-features': false,
    'q-ai-rag': false,
    'q-case-study': false,
    'q-github-clean': true,
  });

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalScore = AUDIT_QUESTIONS.reduce((acc, q) => {
    return acc + (checkedIds[q.id] ? q.weight : 0);
  }, 0);

  const getScoreStatus = (score: number) => {
    if (score >= 85) {
      return {
        labelBn: 'ইন্টারভিউ কল নিশ্চিত (Top 5% Candidate)',
        labelEn: 'Interview Ready (Top 5% Candidate)',
        color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30',
        summaryBn: 'আপনার পোর্টফোলিওতে একজন সিরিয়াস SaaS ও AI ইঞ্জিনিয়ারের জন্য প্রয়োজনীয় সব ফ্যাক্টর উপস্থিত আছে!',
        summaryEn: 'Your portfolio contains every key production element expected by high-paying tech companies.',
      };
    } else if (score >= 50) {
      return {
        labelBn: 'মাঝারি সম্ভাবনা (উন্নতি প্রয়োজন)',
        labelEn: 'Moderate Chance (Key Gaps to Fix)',
        color: 'text-amber-400 border-amber-500/40 bg-amber-950/30',
        summaryBn: 'আপনার প্রজেক্টের আইডিয়া ভালো, কিন্তু লাইভ RAG বা SaaS আর্কিটেকচার মেট্রিক্স না থাকায় রিক্রুটাররা অনেক সময় এড়িয়ে যাবে।',
        summaryEn: 'Good start, but missing architectural case studies and real SaaS/RAG depth causes recruiters to pass.',
      };
    } else {
      return {
        labelBn: 'উচ্চ ঝুঁকির পোর্টফোলিও (রিজেকশন রেট বেশি)',
        labelEn: 'High Risk (Likely to get passed over)',
        color: 'text-rose-400 border-rose-500/40 bg-rose-950/30',
        summaryBn: 'শুধুমাত্র স্ট্যাটিক লিঙ্ক বা বেসিক কোড থাকলে বর্তমান প্রতিযোগিতামূলক মার্কেটে শর্টলিস্ট হওয়া খুবই কঠিন।',
        summaryEn: 'Current structure lacks live interactive proof and production complexity required for remote engineering roles.',
      };
    }
  };

  const status = getScoreStatus(totalScore);

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>PORTFOLIO AUDIT &amp; READINESS CHECK</span>
          <span aria-hidden="true">·</span>
          <span>RECRUITER 30-SEC CRITERIA</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
          {language === 'bn' 
            ? 'আপনার বর্তমান ওয়েবসাইট দিয়ে কি জব পাওয়া সম্ভব? রিয়েল-টাইম অডিট' 
            : 'Can Your Portfolio Land a Job? Real-Time Readiness Audit'}
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-3xl leading-relaxed">
          {language === 'bn'
            ? 'আন্তর্জাতিক ও লোকাল সফটওয়্যার কোম্পানিগুলো হায়ার করার সময় যেসব ক্রাইটেরিয়া যাচাই করে, তার ভিত্তিতে আপনার সাইটের প্রস্তুতি পরীক্ষা করুন।'
            : 'Evaluate your current website against the exact engineering checklist utilized by senior engineering managers and recruiters.'}
        </p>
      </div>

      {/* Main Scorecard + Question List Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Checkbox Questions */}
        <div className="lg:col-span-7 space-y-4">
          {AUDIT_QUESTIONS.map((q, idx) => {
            const isChecked = !!checkedIds[q.id];
            return (
              <div
                key={q.id}
                onClick={() => toggleCheck(q.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-sm'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                      isChecked
                        ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                        : 'bg-slate-900 border-slate-700 text-transparent'
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-sm font-semibold text-slate-100">
                        {language === 'bn' ? q.questionBn : q.questionEn}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400 shrink-0">
                        +{q.weight}%
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-slate-400 leading-normal">
                      {language === 'bn' ? q.whyImportantBn : q.whyImportantEn}
                    </p>

                    {!isChecked && (
                      <div className="mt-2.5 p-2.5 rounded bg-slate-950 border border-amber-900/40 text-xs text-amber-300/90 flex items-start gap-2">
                        <Lightbulb className="w-3.5 h-3.5 shrink-0 text-amber-400 mt-0.5" />
                        <div>
                          <strong>{language === 'bn' ? 'কীভাবে ঠিক করবেন:' : 'Actionable Fix:'}</strong>{' '}
                          {language === 'bn' ? q.recommendationBn : q.recommendationEn}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Score Summary & Action Recommendations */}
        <div className="lg:col-span-5 sticky top-24 bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
          <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>RECRUITER READINESS SCORE</span>
            <span>AUDIT V2.5</span>
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-5xl font-bold font-mono text-cyan-400 tabular-nums">
              {totalScore}%
            </span>
            <span className="text-sm text-slate-400 font-mono">/ 100% Target</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-950 h-2.5 rounded-full mt-3 overflow-hidden border border-slate-800">
            <div
              className={`h-full transition-all duration-500 ${
                totalScore >= 85 ? 'bg-emerald-400' : totalScore >= 50 ? 'bg-amber-400' : 'bg-rose-400'
              }`}
              style={{ width: `${totalScore}%` }}
            />
          </div>

          {/* Status Verdict */}
          <div className={`mt-5 p-3.5 rounded-xl border text-xs leading-relaxed ${status.color}`}>
            <div className="font-semibold text-sm mb-1">
              {language === 'bn' ? status.labelBn : status.labelEn}
            </div>
            <div>{language === 'bn' ? status.summaryBn : status.summaryEn}</div>
          </div>

          {/* Action CTAs based on score */}
          <div className="mt-6 space-y-2.5">
            <button
              onClick={onGoToCaseStudy}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>{language === 'bn' ? 'কেস স্টাডি বানিয়ে সাইটে যুক্ত করুন' : 'Generate Project Case Study'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onGoToShowcase}
              className="w-full py-2.5 px-4 text-xs font-medium text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>{language === 'bn' ? 'আদর্শ SaaS ও চ্যাটবট ডেমো দেখুন' : 'See How to Demo AI & SaaS'}</span>
            </button>
          </div>

          {/* Verified Advice Quote */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-normal">
            {language === 'bn' ? (
              <p>
                <strong>পরামর্শ:</strong> আপনার বর্তমান Vercel লিঙ্কটিতে (<em>persional-website-8fey.vercel.app</em>) এই ৩টি জিনিস যুক্ত করুন: ১. লাইভ চ্যাটবট উইজেট, ২. SaaS ড্যাশবোর্ডের টেস্ট লগইন বাটন, ৩. প্রতিটি প্রজেক্টের STAR ফরম্যাট ডেসক্রিপশন। তাহলে ইন্টারভিউয়ের সম্ভাবনা বহু গুণ বেড়ে যাবে।
              </p>
            ) : (
              <p>
                <strong>Recommendation:</strong> Embed an in-browser sandbox or one-click demo for your SaaS &amp; AI Chatbot directly on your site. This eliminates friction and turns visitors into interview interviewers.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
