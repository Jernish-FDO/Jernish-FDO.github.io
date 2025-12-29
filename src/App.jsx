import React, { Suspense } from 'react';
import { Terminal, Code, Cpu, Loader2 } from 'lucide-react';

// Lazy load heavy components
const ProjectsSection = React.lazy(() => import('./components/ProjectsSection.jsx'));

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-12">
        
        <div className="space-y-8 animate-fade-in">
          <div className="flex justify-center space-x-6 mb-8">
            <Code className="w-16 h-16 text-blue-400 drop-shadow-lg" />
            <Terminal className="w-16 h-16 text-green-400 drop-shadow-lg" />
            <Cpu className="w-16 h-16 text-purple-400 drop-shadow-lg" />
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text pb-2">
            Amala Jernish
          </h1>
          <p className="text-2xl text-slate-300 font-light tracking-wide">
            JavaScript Architecture (No TS)
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-left flex items-center">
            <span className="bg-yellow-500/10 text-yellow-400 p-2 rounded-lg mr-3">⚡</span>
            JavaScript Stack Active
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-mono text-sm text-slate-300">
            <div className="p-3 bg-slate-900/50 rounded border border-slate-700/50">
              <span className="text-yellow-400">➜</span> Pure JavaScript (.jsx)
            </div>
            <div className="p-3 bg-slate-900/50 rounded border border-slate-700/50">
              <span className="text-yellow-400">➜</span> Dynamic Typing
            </div>
          </div>
        </div>

        <Suspense fallback={
          <div className="flex items-center justify-center py-12 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin mr-2" />
            Loading Projects...
          </div>
        }>
          <ProjectsSection />
        </Suspense>

      </div>
    </div>
  )
}

export default App
