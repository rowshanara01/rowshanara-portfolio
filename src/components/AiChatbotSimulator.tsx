import React, { useState } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Database, 
  Terminal, 
  CheckCircle2, 
  Package, 
  Truck, 
  ShieldAlert, 
  RefreshCw,
  ShoppingBag
} from 'lucide-react';
import { Language } from '../types/portfolio';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  productCard?: {
    name: string;
    price: string;
    stock: string;
    imageColor: string;
  };
  orderBooking?: {
    orderId: string;
    courier: string;
    trackingId: string;
    status: string;
  };
  latency?: string;
  apiProvider?: string;
}

interface AiChatbotSimulatorProps {
  language: Language;
}

export const AiChatbotSimulator: React.FC<AiChatbotSimulatorProps> = ({ language }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: language === 'bn' 
        ? 'আসসালামু আলাইকুম! আমাদের শপে স্বাগতম। Facebook Messenger AI Sales Agent সক্রিয় আছে। আপনি কী ধরনের প্রোডাক্ট খুঁজছেন?' 
        : 'Welcome to our verified Facebook store! I am your AI sales & customer support agent. What product are you looking to buy today?',
      timestamp: 'Just now',
      apiProvider: 'Meta Webhook::Primary AI Engine',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeApi, setActiveApi] = useState<'primary' | 'backup'>('primary');
  const [apiLogs, setApiLogs] = useState<string>('FB Webhook: 200 OK · Primary AI: Stable (210ms) · Courier Gateway: Connected');

  const samplePrompts = [
    language === 'bn' ? 'কালো টি-শার্ট আছে? সাইজ L লাগবে' : 'Do you have black cotton shirts in size L?',
    language === 'bn' ? 'অর্ডার কনফার্ম করুন: মিরপুর ১০, ঢাকা, ফোন: 01711000000' : 'Confirm order: Mirpur 10, Dhaka, Phone: 01711000000',
    language === 'bn' ? 'কুরিয়ার ডেলিভারি চার্জ এবং সময় কত লাগবে?' : 'What is the courier delivery fee and turnaround time?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      let product: Message['productCard'];
      let booking: Message['orderBooking'];

      if (query.toLowerCase().includes('অর্ডার') || query.toLowerCase().includes('order') || query.toLowerCase().includes('017') || query.toLowerCase().includes('ঢাকা')) {
        const orderNum = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
        const trackingNum = 'STD-' + Math.floor(1000000 + Math.random() * 9000000);
        botResponse = language === 'bn'
          ? `আপনার অর্ডারটি সফলভাবে কনফার্ম হয়েছে! আমরা স্বয়ংক্রিয়ভাবে কুরিয়ার সার্ভিসে বুকিং দিয়ে ট্র্যাকিং আইডি জেনারেট করেছি। ২-৩ দিনের মধ্যে ডেলিভারি পাবেন।`
          : `Order successfully placed! Automatically created courier consignment parcel with live tracking details below.`;
        booking = {
          orderId: orderNum,
          courier: 'Steadfast / Pathao Logistics',
          trackingId: trackingNum,
          status: 'Parcel Booked & Dispatched',
        };
      } else if (query.toLowerCase().includes('টি-শার্ট') || query.toLowerCase().includes('shirt') || query.toLowerCase().includes('কালো') || query.toLowerCase().includes('black')) {
        botResponse = language === 'bn'
          ? 'আমাদের ডাটাবেস সার্চ করে ৩টি প্রিমিয়াম ব্ল্যাক কটন টি-শার্ট পাওয়া গেছে। বর্তমান স্টক ও প্রাইস নিচে দেওয়া হলো:'
          : 'Database catalog match found for Premium Black Combed Cotton T-Shirt. In stock with cash-on-delivery:';
        product = {
          name: 'Premium Drop-Shoulder Black Tee (Size L)',
          price: '৳ 550 BDT (Cash on Delivery Available)',
          stock: 'Available (14 units in warehouse)',
          imageColor: 'from-slate-800 to-slate-900',
        };
      } else {
        botResponse = language === 'bn'
          ? 'আমাদের ডেলিভারি চার্জ ঢাকার ভেতর ৳৭০ এবং ঢাকার বাইরে ৳১৩০। আপনি যেকোনো প্রোডাক্টের নাম বা ছবি লিখে অর্ডার করতে পারেন।'
          : 'Delivery charge is 70 BDT inside Dhaka and 130 BDT nationwide. All deliveries are tracked via our automated courier API integration.';
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        productCard: product,
        orderBooking: booking,
        latency: '340ms',
        apiProvider: activeApi === 'primary' ? 'Primary AI Engine' : 'Backup Failover API (Auto-Switched)',
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const toggleFailover = () => {
    if (activeApi === 'primary') {
      setActiveApi('backup');
      setApiLogs('Primary AI Disconnected ➔ Auto-switched to Backup Failover AI (Zero Downtime)');
    } else {
      setActiveApi('primary');
      setApiLogs('Primary AI Reconnected ➔ Active Route Restored');
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[560px]">
      {/* Top Bar inside simulator: Meta Messenger + Failover Status */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-xs md:text-sm font-semibold text-white">
                CommerceBot AI (Meta Messenger)
              </h4>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/40">
                FB Verified
              </span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span>Catalog: Live SQL</span>
              <span aria-hidden="true">·</span>
              <span>Courier API: Auto-Dispatch</span>
            </div>
          </div>
        </div>

        {/* AI Failover Switcher Button */}
        <button
          onClick={toggleFailover}
          className={`text-xs px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors font-mono ${
            activeApi === 'primary'
              ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-cyan-400'
              : 'bg-amber-950/80 border-amber-600/60 text-amber-300'
          }`}
          title="Test auto-switching API fallback when AI connection drops"
        >
          <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{activeApi === 'primary' ? 'Simulate AI Drop' : 'Failover Active'}</span>
        </button>
      </div>

      {/* Connection & Telemetry Bar */}
      <div className="bg-slate-950/90 px-3 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
        <span className="truncate pr-2">{apiLogs}</span>
        <span className="text-cyan-400 font-bold shrink-0">Sub-second Queue</span>
      </div>

      {/* Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && (
              <div className="w-7 h-7 rounded-md bg-blue-950 border border-blue-800/40 flex items-center justify-center shrink-0 text-blue-400 mt-0.5">
                <Bot className="w-3.5 h-3.5" />
              </div>
            )}

            <div className={`max-w-[85%] rounded-xl p-3 text-xs md:text-sm ${
              msg.sender === 'user'
                ? 'bg-cyan-500 text-slate-950 font-medium'
                : 'bg-slate-800/90 text-slate-200 border border-slate-700/60'
            }`}>
              <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
              
              {/* Product Card if catalog search triggered */}
              {msg.productCard && (
                <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-slate-700 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-xs">{msg.productCard.name}</div>
                    <div className="text-cyan-400 font-mono font-bold text-xs mt-0.5">{msg.productCard.price}</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" /> {msg.productCard.stock}
                    </div>
                  </div>
                </div>
              )}

              {/* Courier Consignment Card if order confirmed */}
              {msg.orderBooking && (
                <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-emerald-800/60 text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4" />
                      <span>{msg.orderBooking.courier}</span>
                    </span>
                    <span className="font-mono text-[10px] bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">
                      {msg.orderBooking.status}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-300">
                    Order ID: <strong className="text-white">{msg.orderBooking.orderId}</strong>
                  </div>
                  <div className="font-mono text-[11px] text-cyan-400 mt-0.5">
                    Consignment Tracking: <strong>{msg.orderBooking.trackingId}</strong>
                  </div>
                </div>
              )}

              {/* Bot response latency & failover status */}
              {msg.sender === 'bot' && msg.latency && (
                <div className="mt-2 pt-2 border-t border-slate-700/50 flex flex-wrap items-center gap-2 text-[10px] text-slate-400 font-mono">
                  <span>Latency: {msg.latency}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-cyan-400">{msg.apiProvider}</span>
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300 mt-0.5">
                <User className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono pl-9">
            <span className="inline-block animate-pulse">●</span>
            <span className="inline-block animate-pulse delay-100">●</span>
            <span className="inline-block animate-pulse delay-200">●</span>
            <span className="text-slate-400 text-[11px] ml-1">
              {language === 'bn' ? 'ডাটাবেস প্রোডাক্ট সার্চ ও কুরিয়ার এপিআই চেক হচ্ছে...' : 'Querying catalog database & courier API...'}
            </span>
          </div>
        )}
      </div>

      {/* Suggested prompts buttons */}
      <div className="px-3 py-2 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
        <span className="text-[11px] text-slate-400 whitespace-nowrap shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          {language === 'bn' ? 'টেস্ট করুন:' : 'Test:'}
        </span>
        {samplePrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-2.5 py-1 text-[11px] text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white rounded border border-slate-800 whitespace-nowrap shrink-0 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            language === 'bn'
              ? 'প্রোডাক্টের নাম লিখুন বা অর্ডার কনফার্ম করার ঠিকানা দিন...'
              : 'Search product from catalog or provide delivery address for courier parcel...'
          }
          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2 md:px-4 md:py-2 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 text-slate-950 font-medium rounded-lg text-xs md:text-sm flex items-center gap-1.5 transition-colors shrink-0"
        >
          <span className="hidden md:inline">{language === 'bn' ? 'মেসেজ পাঠান' : 'Send'}</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
