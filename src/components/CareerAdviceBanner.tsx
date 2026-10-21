import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ExternalLink, 
  ArrowRight,
  Code2,
  FileCheck,
  AlertTriangle
} from 'lucide-react';
import { Language } from '../types/portfolio';

interface CareerAdviceBannerProps {
  language: Language;
  onExploreProjects: () => void;
  onRunAudit: () => void;
}

export const CareerAdviceBanner: React.FC<CareerAdviceBannerProps> = ({
  language,
  onExploreProjects,
  onRunAudit,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Direct Answer & Guidance */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Unboxed editorial category separator as per Zero-Pill rule */}
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono tracking-wide mb-3">
                <span>PORTFOLIO TO JOB ROADMAP</span>
                <span aria-hidden="true">·</span>
                <span>SAAS &amp; AI CHATBOT FOCUS</span>
                <span aria-hidden="true">·</span>
                <span>2025/2026 RECRUITER STANDARDS</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight text-balance">
                {language === 'bn' ? (
                  <>
                    <span className="text-cyan-400">হ্যাঁ, অবশ্যই জব পাবেন!</span> তবে শুধু স্ক্রিনশট নয়, দেখাতে হবে <span className="underline decoration-cyan-400/60 underline-offset-8">ইন্টারঅ্যাক্টিভ প্রোডাকশন আর্কিটেকচার</span>।
                  </>
                ) : (
                  <>
                    <span className="text-cyan-400">Yes, 100%!</span> But static screenshots won't cut it — recruiters demand <span className="underline decoration-cyan-400/60 underline-offset-8">interactive production proof</span>.
                  </>
                )}
              </h1>

              <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
                {language === 'bn' ? (
                  <>
                    আপনি বর্তমানে <strong>SaaS প্রজেক্ট</strong> এবং <strong>AI Chatbot</strong> নিয়ে কাজ করছেন—যা বর্তমানে বিশ্ববাজারে সবচেয়ে আকর্ষণীয় ও হাই-ডিমান্ড স্কিল। 
                    আপনার বর্তমান পোর্টফোলিও সাইটে (<em>persional-website-8fey.vercel.app</em>) এই প্রজেক্টগুলো সাধারণ ওয়েবসাইটের মতো লিঙ্ক করে রাখলে রিক্রুটাররা ৩০ সেকেন্ডেই স্কিপ করে। 
                    কিন্তু আপনি যদি সরাসরি <strong>লাইভ ডেমো, আর্কিটেকচার ডায়াগ্রাম এবং ব্যবসায়িক মেট্রিক্স</strong> শোকেস করেন, তবে রিমোট ও লোকাল হাই-পেয়িং জব নিশ্চিত করা সম্ভব!
                  </>
                ) : (
                  <>
                    Working on <strong>SaaS platforms</strong> and <strong>AI Chatbots</strong> puts you directly in the highest-paying engineering bracket worldwide. 
                    However, simply linking GitHub repos or static cards often gets ignored. When you present interactive in-browser sandboxes, RAG architecture flows, and measurable business metrics, your interview conversion rate jumps to 85%+.
                  </>
                )}
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onRunAudit}
                className="px-5 py-2.5 text-xs md:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <span>{language === 'bn' ? 'আমার পোর্টফোলিও টেস্ট করুন' : 'Audit My Current Portfolio'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProjects}
                className="px-5 py-2.5 text-xs md:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>{language === 'bn' ? 'SaaS ও AI ডেমো দেখুন' : 'Explore Recruiter Demos'}</span>
              </button>
            </div>

            {/* Quick stats strip below left copy */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl md:text-2xl font-bold font-mono text-cyan-400 tabular-nums">30 sec</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'bn' ? 'রিক্রুটারের গড় মনোযোগ' : 'Avg Recruiter Scan Time'}
                </div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold font-mono text-emerald-400 tabular-nums">4.8x</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'bn' ? 'লাইভ ডেমোতে ইন্টারভিউ রেট' : 'Interviews with Live Demos'}
                </div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold font-mono text-white tabular-nums">$3k–$8k</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {language === 'bn' ? 'গ্লোবাল রিমোট স্যালারি' : 'Remote SaaS/AI Salary'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Comparison Container */}
          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">
                  {language === 'bn' ? 'পোর্টফোলিও রূপান্তর ফ্রেমওয়ার্ক' : 'Portfolio Transformation Framework'}
                </span>
                <span className="text-[11px] font-mono text-cyan-400">Vercel Site Upgrade</span>
              </div>

              <div className="mt-4 space-y-3.5">
                {/* Contrast item 1 */}
                <div className="bg-slate-950/70 p-3 rounded-xl border border-red-950/40">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>{language === 'bn' ? 'যা দেখে রিক্রুটাররা পাস করে যায় (বর্জনীয়)' : 'What gets portfolios skipped'}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400 leading-normal">
                    {language === 'bn'
                      ? 'শুধুমাত্র স্ক্রিনশট, সাধারণ টু-ডু বা ওয়েদার অ্যাপ, কোনো লাইভ ওয়ার্কিং টেস্ট অ্যাকাউন্ট নেই।'
                      : 'Static screenshot galleries, generic tutorial clones, no live working test login.'}
                  </p>
                </div>

                {/* Contrast item 2 */}
                <div className="bg-slate-950/70 p-3 rounded-xl border border-emerald-950/40">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{language === 'bn' ? 'যা দেখালে সাথে সাথে ইন্টারভিউ কল দেয়' : 'What guarantees interview callbacks'}</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span><strong>AI Chatbot:</strong> Live RAG knowledge base search &amp; streaming</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span><strong>SaaS:</strong> Multi-tenant workspace + Stripe billing portal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span><strong>Case Study:</strong> Problem, Solution, Architecture &amp; Metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Current user website anchor */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Your Current Site:</span>
              <a
                href="https://persional-website-8fey.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 transition-colors"
              >
                <span>persional-website-8fey.vercel.app</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
