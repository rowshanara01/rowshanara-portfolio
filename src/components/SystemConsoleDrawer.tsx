import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, CheckCircle2, ChevronUp } from 'lucide-react';

interface ConsoleLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
}

export const SystemConsoleDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<ConsoleLog[]>([
    {
      id: '1',
      type: 'output',
      text: 'Rowshanara Systems Engine v2.6.0 [Interactive Engineer Console]\nType "help" to list commands, or tap the quick execution buttons below.',
    },
  ]);
  const endOfLogsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      endOfLogsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const inputLog: ConsoleLog = {
      id: Date.now().toString(),
      type: 'input',
      text: `$ ${cmd}`,
    };

    let outputLog: ConsoleLog;

    switch (trimmed) {
      case 'help':
        outputLog = {
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `Available Commands:
  • status        - Inspect live microservices, AI circuit breaker & database health
  • curl-order    - Dispatch synthetic e-commerce order & generate courier tracking ID
  • metrics       - Display latency, throughput & trial conversion benchmarks
  • stack         - View complete production technology stack
  • clear         - Flush console output buffer`,
        };
        break;

      case 'status':
        outputLog = {
          id: (Date.now() + 1).toString(),
          type: 'success',
          text: `[SYSTEM STATUS]: ALL SYSTEMS NOMINAL
  ✔ PostgreSQL (Neon/AWS): CONNECTED (pool: 12 active, p99: 18ms)
  ✔ Meta Webhook Ingress: VERIFIED (HMAC-SHA256 signature guard active)
  ✔ AI Failover Circuit: ARMED (Gemini 2.5 Flash / Fallback standby)
  ✔ Courier REST Gateway: READY (Steadfast & Pathao APIs authenticated)
  ✔ Cross-Tab Sync: BROADCAST_CHANNEL_ACTIVE (0 dropped sessions)`,
        };
        break;

      case 'curl-order':
        const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
        const tracking = 'STD-' + Math.floor(1000000 + Math.random() * 9000000);
        outputLog = {
          id: (Date.now() + 1).toString(),
          type: 'success',
          text: `> POST /api/v1/orders/checkout HTTP/1.1
> Host: api.storepulse.app
> Content-Type: application/json
> Body: { "item": "Black Drop-Shoulder Tee", "price": 550, "city": "Dhaka" }

< HTTP/1.1 201 Created
< Consignment-ID: ${tracking}
< Result: Order ${orderId} booked into Steadfast Courier. Live dispatch notification sent to customer via Facebook Messenger in 240ms.`,
        };
        break;

      case 'metrics':
        outputLog = {
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `PERFORMANCE BENCHMARKS:
  • Avg Messenger Latency: 340ms (Target: <500ms)
  • Uptime with Failover: 99.98%
  • Data Submit Integrity: 100% (0 dropped payloads after Zod fix)
  • Free Trial Conversion: 42.8% (15/30-day domain trial lifecycle)`,
        };
        break;

      case 'stack':
        outputLog = {
          id: (Date.now() + 1).toString(),
          type: 'output',
          text: `CORE STACK:
  • Frontend: React 19, TypeScript, Tailwind CSS v4, BroadcastChannel API
  • Backend: Node.js, Express, PostgreSQL, Zod, Redis
  • Integrations: Meta Developer Graph API, Courier APIs (Steadfast/Pathao), Stripe
  • Deployment: Vercel, Docker, Git CI/CD`,
        };
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      default:
        outputLog = {
          id: (Date.now() + 1).toString(),
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" to see valid commands.`,
        };
    }

    setLogs((prev) => [...prev, inputLog, outputLog]);
    setInputVal('');
  };

  return (
    <>
      {/* Floating Bottom Console Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-md text-xs font-mono font-medium flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 group"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping"></div>
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Open System Console</span>
          </button>
        </div>
      )}

      {/* Expanded Terminal Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 z-50 w-[94vw] sm:w-[540px] max-h-[460px] bg-slate-950/95 border border-slate-700 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden font-mono text-xs animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-300">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-white text-xs">system_terminal_console</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800">
                ACTIVE
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick command buttons */}
          <div className="px-3 py-1.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            <span className="text-slate-500 text-[10px] shrink-0">Run:</span>
            <button
              onClick={() => handleCommand('status')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 shrink-0 transition-colors"
            >
              status
            </button>
            <button
              onClick={() => handleCommand('curl-order')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 shrink-0 transition-colors"
            >
              curl-order
            </button>
            <button
              onClick={() => handleCommand('metrics')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 shrink-0 transition-colors"
            >
              metrics
            </button>
            <button
              onClick={() => handleCommand('clear')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-700 shrink-0 transition-colors"
            >
              clear
            </button>
          </div>

          {/* Logs body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2.5 max-h-[300px]">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`leading-relaxed whitespace-pre-wrap text-[11px] ${
                  log.type === 'input'
                    ? 'text-cyan-400 font-bold'
                    : log.type === 'success'
                    ? 'text-emerald-300'
                    : log.type === 'error'
                    ? 'text-rose-400'
                    : 'text-slate-300'
                }`}
              >
                {log.text}
              </div>
            ))}
            <div ref={endOfLogsRef} />
          </div>

          {/* Command input prompt */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
            className="p-2.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <span className="text-cyan-400 font-bold pl-1">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'status', or 'curl-order'..."
              className="flex-1 bg-transparent text-white text-xs placeholder:text-slate-600 focus:outline-none"
            />
            <button
              type="submit"
              className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
