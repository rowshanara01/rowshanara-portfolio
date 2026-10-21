import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Terminal, 
  Globe, 
  Rocket, 
  ArrowRight, 
  Github, 
  Download, 
  FileCode,
  FolderArchive,
  Sparkles
} from 'lucide-react';
import { downloadProjectZip } from '../utils/exportProjectZip';

interface VercelDeployModalProps {
  onClose: () => void;
}

export const VercelDeployModal: React.FC<VercelDeployModalProps> = ({ onClose }) => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'download' | 'git' | 'files'>('download');
  const [selectedFile, setSelectedFile] = useState<'package.json' | 'vercel.json' | 'App.tsx'>('package.json');

  const gitCommands = `git init
git add .
git commit -m "feat: production portfolio for Rowshanara Akhter"
git branch -M main
git remote add origin https://github.com/rowshanara01/portfolio.git
git push -u origin main`;

  const fileContents = {
    'package.json': `{
  "name": "rowshanara-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "tailwindcss": "^4.3.3",
    "typescript": "^7.0.2"
  }
}`,
    'vercel.json': `{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`,
    'App.tsx': `// Open src/App.tsx in your code editor or see the complete file in AI Studio File Explorer!
// Everything is fully typed with React 19, Tailwind v4 and Lucide icons.`
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadProjectZip();
    } catch (e) {
      console.error(e);
    } finally {
      setIsDownloading(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(label);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">
              Vercel Deployment &amp; Code Exporter
            </h3>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              Instant Download
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="px-6 pt-3 bg-slate-950/60 border-b border-slate-800 flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('download')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${
              activeTab === 'download'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP</span>
          </button>

          <button
            onClick={() => setActiveTab('git')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${
              activeTab === 'git'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>Git &amp; Vercel Steps</span>
          </button>

          <button
            onClick={() => setActiveTab('files')}
            className={`pb-2.5 px-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${
              activeTab === 'files'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Copy Config Files</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          {activeTab === 'download' && (
            <div className="space-y-5">
              {/* Big Download Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-950 border border-cyan-800/50 flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-900/50 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-lg">
                  <FolderArchive className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">
                    এক ক্লিকে সম্পূর্ণ প্রজেক্ট ডাউনলোড করুন (ZIP)
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 max-w-md">
                    AI Studio-র বাইরে কোনো বাটন খোঁজার প্রয়োজন নেই। নিচের বাটনে ক্লিক করলেই আপনার ব্রাউজারে সম্পূর্ণ কোডবেস <strong className="text-cyan-300 font-mono">rowshanara-portfolio.zip</strong> হিসেবে ডাউনলোড হয়ে যাবে!
                  </p>
                </div>

                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{isDownloading ? 'Generating ZIP...' : 'Download Code (rowshanara-portfolio.zip)'}</span>
                </button>
              </div>

              {/* AI Studio Manual Location Instructions */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="font-bold text-white text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>AI Studio-র নিজস্ব ইন্টারফেসে কোড যেভাবে দেখবেন:</span>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                  <li><strong>বাম পাশের ফাইল এক্সপ্লোরার (File Explorer):</strong> AI Studio স্ক্রিনের বাম পাশে বা ফাইল আইকনে ক্লিক করলে `src/`, `index.html`, `package.json` ফাইলগুলো সরাসরি দেখতে ও কোড কপি করতে পারবেন।</li>
                  <li><strong>টপ টুলবার:</strong> অনেক সময় স্ক্রিন ছোট থাকলে ওপরের ডানদিকের থ্রি-ডটস (<strong>...</strong>) মেনুর ভেতরে &quot;Export / Download&quot; লুকানো থাকে।</li>
                  <li>তবে ওপরের <strong>&quot;Download Code ZIP&quot;</strong> বাটনে চাপ দিলেই ব্রাউজারে সরাসরি ডাউনলোড হয়ে যাবে!</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'git' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Vercel-এ লাইভ করার সহজ ৩টি ধাপ:
                </h4>
                <p className="text-slate-400 text-xs">
                  ডাউনলোড করা ZIP ফাইলটি আনজিপ করে আপনার টার্মিনালে নিচের কমান্ডগুলো চালান:
                </p>
              </div>

              {/* Step 1: Git push */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between font-bold text-white text-xs">
                  <span>GitHub-এ পুশ করার কমান্ড:</span>
                  <button
                    onClick={() => copyToClipboard(gitCommands, 'git')}
                    className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded border border-slate-700 flex items-center gap-1 font-mono transition-colors"
                  >
                    {copiedStep === 'git' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedStep === 'git' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <pre className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-cyan-200 overflow-x-auto leading-relaxed">
                  {gitCommands}
                </pre>
              </div>

              {/* Step 2: Vercel Settings */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="font-bold text-white text-xs">
                  Vercel Build Configurations:
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Framework Preset:</span>
                    <span className="text-white font-bold">Vite</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Build Command:</span>
                    <span className="text-cyan-400 font-bold">npm run build</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Output Directory:</span>
                    <span className="text-white font-bold">dist</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Install Command:</span>
                    <span className="text-white font-bold">npm install</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {(['package.json', 'vercel.json', 'App.tsx'] as const).map((file) => (
                  <button
                    key={file}
                    onClick={() => setSelectedFile(file)}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      selectedFile === file
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {file}
                  </button>
                ))}
              </div>

              <div className="relative">
                <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-cyan-200 overflow-x-auto max-h-[300px] leading-relaxed">
                  {fileContents[selectedFile]}
                </pre>
                <button
                  onClick={() => copyToClipboard(fileContents[selectedFile], selectedFile)}
                  className="absolute top-3 right-3 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded border border-slate-700 flex items-center gap-1 font-mono transition-colors"
                >
                  {copiedStep === selectedFile ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedStep === selectedFile ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP</span>
          </button>

          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-lg flex items-center gap-1.5 transition-colors font-mono"
          >
            <span>Open Vercel.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
