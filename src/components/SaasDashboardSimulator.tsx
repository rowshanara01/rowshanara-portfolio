import React, { useState } from 'react';
import { 
  Building2, 
  Store, 
  CreditCard, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  RefreshCw, 
  Globe, 
  ShoppingBag,
  ExternalLink,
  Layers
} from 'lucide-react';
import { Language } from '../types/portfolio';

interface SaasDashboardSimulatorProps {
  language: Language;
}

export const SaasDashboardSimulator: React.FC<SaasDashboardSimulatorProps> = ({ language }) => {
  const [storeName, setStoreName] = useState('StyleHub Fashion (BD Store)');
  const [trialDaysLeft, setTrialDaysLeft] = useState(4);
  const [activePlan, setActivePlan] = useState<'trial' | 'starter' | 'pro'>('trial');
  const [dataSubmitStatus, setDataSubmitStatus] = useState<string>('Validating payload schemas with Zod... All submissions 100% OK');
  const [recentOrders, setRecentOrders] = useState([
    { id: '#ORD-892', customer: 'Tanvir Hossain', amount: '৳ 1,450', status: 'Delivered', courier: 'Steadfast' },
    { id: '#ORD-891', customer: 'Nusrat Jahan', amount: '৳ 850', status: 'In Transit', courier: 'Pathao' },
    { id: '#ORD-890', customer: 'Rahim Ahmed', amount: '৳ 2,200', status: 'Confirmed', courier: 'RedX' },
  ]);

  const handleTestSubmitFix = () => {
    setDataSubmitStatus('Simulating edge-case form submit... Zod sanitization caught missing phone format ➔ Auto-corrected & Saved!');
    setTimeout(() => {
      setDataSubmitStatus('Payload validation guards active: Zero dropped forms across all browser tabs');
    }, 2500);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[560px]">
      {/* Store Header */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Store className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xs md:text-sm font-semibold text-white">
                StorePulse E-Commerce SaaS
              </h4>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800/40">
                Custom Domain Active
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {language === 'bn' ? 'ফ্রি ট্রায়াল ও সাবস্ক্রিপশন ম্যানেজমেন্ট' : 'Trial Lifecycle & Subscription Gateway'}
            </p>
          </div>
        </div>

        {/* Free Trial Banner / Action */}
        <div className="flex items-center gap-2">
          {activePlan === 'trial' ? (
            <div className="flex items-center gap-2 bg-amber-950/60 border border-amber-800/50 px-2.5 py-1 rounded-lg text-xs font-mono text-amber-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>15-Day Free Trial: {trialDaysLeft} days remaining</span>
              <button
                onClick={() => setActivePlan('starter')}
                className="ml-1 px-2 py-0.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded text-[11px]"
              >
                Upgrade Plan
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-lg text-xs font-mono text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Paid Subscription Active (৳999/mo)</span>
            </div>
          )}
        </div>
      </div>

      {/* Engineering Bug-Fix Showcase Strip */}
      <div className="bg-slate-950/70 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
          <span className="text-cyan-400 font-bold">Solved Production Issue:</span>
          <span className="text-slate-400 truncate max-w-md">{dataSubmitStatus}</span>
        </div>
        <button
          onClick={handleTestSubmitFix}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-mono border border-slate-700 flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3 h-3 text-cyan-400" />
          <span>Test Payload Validation</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-950/30 border-b border-slate-800">
        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400">Total Store Sales</div>
          <div className="text-base font-bold font-mono text-white mt-0.5">৳ 48,250 BDT</div>
          <div className="text-[10px] text-emerald-400">+28% this month</div>
        </div>

        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400">Orders Processed</div>
          <div className="text-base font-bold font-mono text-white mt-0.5">142 Orders</div>
          <div className="text-[10px] text-slate-400">0 Data submit failures</div>
        </div>

        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400">Store Domain</div>
          <div className="text-xs font-bold font-mono text-cyan-400 mt-1 truncate">
            stylehub.storepulse.app
          </div>
          <div className="text-[10px] text-slate-400">SSL Auto-Provisioned</div>
        </div>

        <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
          <div className="text-[11px] text-slate-400">Browser Sync</div>
          <div className="text-xs font-bold font-mono text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Cross-Tab Synced
          </div>
          <div className="text-[10px] text-slate-400">BroadcastChannel API</div>
        </div>
      </div>

      {/* Body: Live Orders & Engineering Architecture */}
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Recent Orders List */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-xs font-semibold text-white flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'bn' ? 'সাম্প্রতিক স্টোর অর্ডারসমূহ' : 'Live Store Orders'}</span>
            </h5>
            <span className="text-[10px] font-mono text-emerald-400">All Payloads Validated</span>
          </div>

          <div className="space-y-2">
            {recentOrders.map((ord) => (
              <div
                key={ord.id}
                className="p-2.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-semibold text-white flex items-center gap-2">
                    <span>{ord.id}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({ord.customer})</span>
                  </div>
                  <div className="text-[11px] text-cyan-400 font-mono mt-0.5">
                    {ord.amount} · Courier: {ord.courier}
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                  {ord.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Challenges Solved (Recruiter-Impacting Section) */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <h5 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>
                {language === 'bn' 
                  ? 'যেসব জটিল বাগ ও ইস্যু ফিক্স করা হয়েছে (Engineering Highlights)' 
                  : 'Key Engineering Fixes & Resilience'}
              </span>
            </h5>

            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block text-[11px]">
                  1. Form Data Submit Drops:
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Replaced loose form states with Zod payload schemas &amp; optimistic server responses.
                </p>
              </div>

              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block text-[11px]">
                  2. Cross-Browser Tab Out-of-Sync:
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Synchronized auth tokens and cart items using BroadcastChannel &amp; LocalStorage listeners.
                </p>
              </div>

              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block text-[11px]">
                  3. 15-Day Free Domain Trial Gate:
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Automated trial countdown cron worker that locks checkout until subscription is renewed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
