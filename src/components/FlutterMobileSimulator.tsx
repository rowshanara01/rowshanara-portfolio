import React, { useState } from 'react';
import { 
  Smartphone, 
  Bell, 
  Package, 
  Truck, 
  Barcode, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft,
  RefreshCw,
  SlidersHorizontal
} from 'lucide-react';

export const FlutterMobileSimulator: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'orders' | 'inventory' | 'courier'>('orders');
  const [syncedStatus, setSyncedStatus] = useState('Online (Synced with PostgreSQL)');

  const mockOrders = [
    { id: '#ORD-994', customer: 'Sadia Islam', amount: '৳ 1,850', status: 'Dispatch Ready', items: '2x Floral Kurti' },
    { id: '#ORD-993', customer: 'Fahim Rahman', amount: '৳ 650', status: 'In Transit', items: '1x Cotton Polo' },
    { id: '#ORD-992', customer: 'Nayeem Chowdhury', amount: '৳ 3,200', status: 'Delivered', items: '1x Denim Jacket' },
  ];

  const mockStock = [
    { sku: 'TEE-BLK-L', title: 'Drop-Shoulder Black Tee', stock: 14, lowStock: false },
    { sku: 'SHIRT-OXF-M', title: 'Oxford Formal White Shirt', stock: 3, lowStock: true },
    { sku: 'DENIM-SLIM-32', title: 'Raw Blue Denim Jeans', stock: 22, lowStock: false },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-4">
      {/* Phone Hardware Mockup */}
      <div className="w-[300px] h-[580px] bg-slate-950 border-4 border-slate-750 rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative ring-1 ring-cyan-500/20">
        {/* Dynamic Island / Speaker Notch */}
        <div className="w-full h-6 bg-slate-950 flex items-center justify-center pt-1.5 shrink-0">
          <div className="w-20 h-4 bg-slate-900 rounded-full flex items-center justify-end px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </div>
        </div>

        {/* Mobile App Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white shrink-0">
          <div>
            <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
              <span>Flutter 3.x</span>
              <span className="text-slate-600">·</span>
              <span>Riverpod</span>
            </div>
            <div className="text-xs font-bold font-display">StorePulse Merchant</div>
          </div>
          <div className="relative">
            <Bell className="w-4 h-4 text-slate-300" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400"></span>
          </div>
        </div>

        {/* Sync telemetry bar */}
        <div className="bg-slate-950/80 px-3 py-1 border-b border-slate-850 text-[10px] font-mono text-slate-400 flex items-center justify-between">
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Hive Offline Sync
          </span>
          <span className="text-cyan-400">60 FPS</span>
        </div>

        {/* Mobile Screen Content */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-950 text-xs">
          {activeScreen === 'orders' && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>TODAY&apos;S INCOMING ORDERS</span>
                <span className="text-emerald-400">3 New</span>
              </div>

              {mockOrders.map((ord) => (
                <div key={ord.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">{ord.id}</span>
                    <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">
                      {ord.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300">{ord.customer} · {ord.items}</div>
                  <div className="text-cyan-400 font-mono font-bold text-xs">{ord.amount}</div>
                </div>
              ))}

              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-[10px] text-slate-400 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Swipe order to auto-book Steadfast Courier</span>
              </div>
            </div>
          )}

          {activeScreen === 'inventory' && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>STOCK MANAGEMENT</span>
                <span className="text-cyan-400">Live DB</span>
              </div>

              {mockStock.map((item) => (
                <div key={item.sku} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white text-xs">{item.title}</div>
                    <div className="text-[10px] font-mono text-slate-500">{item.sku}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-mono font-bold text-xs ${item.lowStock ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {item.stock} left
                    </div>
                    {item.lowStock && (
                      <span className="text-[9px] text-amber-300 font-mono">Restock Needed</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeScreen === 'courier' && (
            <div className="space-y-2.5 animate-in fade-in duration-150">
              <div className="text-[11px] font-mono text-slate-400">
                ACTIVE COURIER CONSIGNMENTS
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>Steadfast Parcel #STD-89210</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Rider Assigned</span>
                </div>
                <div className="text-[11px] text-slate-300">Destination: Dhanmondi 27, Dhaka</div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>Picked Up</span>
                  <span className="text-cyan-400">Out for Delivery</span>
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-around text-slate-400 shrink-0">
          <button
            onClick={() => setActiveScreen('orders')}
            className={`flex flex-col items-center gap-0.5 ${activeScreen === 'orders' ? 'text-cyan-400 font-bold' : 'hover:text-white'}`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[9px]">Orders</span>
          </button>

          <button
            onClick={() => setActiveScreen('inventory')}
            className={`flex flex-col items-center gap-0.5 ${activeScreen === 'inventory' ? 'text-cyan-400 font-bold' : 'hover:text-white'}`}
          >
            <Barcode className="w-4 h-4" />
            <span className="text-[9px]">Stock</span>
          </button>

          <button
            onClick={() => setActiveScreen('courier')}
            className={`flex flex-col items-center gap-0.5 ${activeScreen === 'courier' ? 'text-cyan-400 font-bold' : 'hover:text-white'}`}
          >
            <Truck className="w-4 h-4" />
            <span className="text-[9px]">Shipments</span>
          </button>
        </div>

        {/* Home Indicator */}
        <div className="w-full h-3 bg-slate-950 flex items-center justify-center shrink-0">
          <div className="w-24 h-1 bg-slate-800 rounded-full"></div>
        </div>
      </div>

      {/* Simulator Explanatory Card */}
      <div className="max-w-md space-y-4 text-xs text-slate-300">
        <div>
          <div className="text-cyan-400 font-mono text-xs font-bold mb-1">
            CROSS-PLATFORM ARCHITECTURE (FLUTTER 3.X &amp; DART)
          </div>
          <h4 className="text-base font-bold text-white font-display">
            Native iOS &amp; Android Companion App
          </h4>
          <p className="text-slate-400 text-xs mt-1 leading-relaxed">
            Engineered with a single clean Dart codebase, allowing merchants to manage orders on the go, receive Firebase background push alerts, and track Steadfast/Pathao courier shipments in real time.
          </p>
        </div>

        <div className="space-y-2">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <strong className="text-white block text-[11px]">Offline-First Hive Storage:</strong>
            <span className="text-[11px] text-slate-400">Merchants can view orders even during internet connectivity drops; local mutations automatically re-sync when network reconnects.</span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <strong className="text-white block text-[11px]">Riverpod State Management:</strong>
            <span className="text-[11px] text-slate-400">Strictly decoupled UI and business logic delivering consistent 60 FPS scrolling on both budget Android devices and flagship iPhones.</span>
          </div>
        </div>

        <div className="pt-2 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Tap the phone tabs (Orders, Stock, Shipments) to test live!</span>
        </div>
      </div>
    </div>
  );
};
