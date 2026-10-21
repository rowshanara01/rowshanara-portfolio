import JSZip from 'jszip';

export async function downloadProjectZip() {
  const zip = new JSZip();

  // Root files
  zip.file('package.json', `{
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
    "vite": "^8.3.0",
    "jszip": "^3.10.1"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "tailwindcss": "^4.3.3",
    "typescript": "^7.0.2"
  }
}`);

  zip.file('vite.config.ts', `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});`);

  zip.file('tsconfig.json', `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "types": ["vite/client"],
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./*"]
    },
    "noEmit": true
  },
  "exclude": ["dist"]
}`);

  zip.file('vercel.json', `{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`);

  zip.file('index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rowshanara Akhter — Full-Stack Software Engineer · SaaS, AI &amp; Flutter Mobile</title>
    <meta name="description" content="Portfolio of Rowshanara Akhter, Full-Stack &amp; Mobile Software Engineer specializing in resilient e-commerce SaaS platforms, cross-platform Flutter apps, and autonomous conversational AI agents." />
    <meta property="og:title" content="Rowshanara Akhter — Full-Stack Software Engineer · SaaS, AI &amp; Flutter Mobile" />
    <meta property="og:description" content="Portfolio of Rowshanara Akhter, Full-Stack &amp; Mobile Software Engineer specializing in resilient e-commerce SaaS platforms, cross-platform Flutter apps, and autonomous conversational AI agents." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`);

  zip.file('README.md', `# Rowshanara Akhter — Production Engineering Portfolio

Full-Stack Software Engineer specialized in:
- Multi-Tenant E-Commerce SaaS Architecture (15/30-Day Domain Trials, Zod Schema Validation)
- Conversational AI Agents & Meta Messenger Webhooks (SQL Catalog Search, Auto Courier Logistics)
- Cross-Platform Mobile Apps (Flutter & Dart for iOS and Android)

## 🚀 Fast Deployment to Vercel
1. Run \`npm install\`
2. Test locally: \`npm run dev\`
3. Push to GitHub:
\`\`\`bash
git init
git add .
git commit -m "feat: portfolio for Rowshanara Akhter"
git branch -M main
git remote add origin https://github.com/rowshanara01/portfolio.git
git push -u origin main
\`\`\`
4. Open [Vercel](https://vercel.com/new), select this repository, and click **Deploy**!
`);

  // Fetch or pack existing active source files
  // For key source components, we package them cleanly
  const src = zip.folder('src')!;
  src.file('main.tsx', `import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
`);

  src.file('index.css', `@import "tailwindcss";

@layer base {
  body {
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }
  h1, h2, h3, h4, .font-display {
    font-family: 'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif;
  }
  code, pre, .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #090d16;
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #334155;
}
`);

  // We can fetch the text of current loaded scripts or generate the blob
  // Generate zip blob
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'rowshanara-portfolio.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
