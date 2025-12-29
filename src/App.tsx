import React from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';

// Example of backend integration type definition
interface BackendConfig {
  apiKey: string;
  projectId: string;
}

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center space-x-4 mb-8">
          <Code className="w-12 h-12 text-blue-400" />
          <Terminal className="w-12 h-12 text-green-400" />
          <Cpu className="w-12 h-12 text-purple-400" />
        </div>
        
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Amala Jernish
        </h1>
        <p className="text-xl text-slate-400">
          Full Stack Developer | IoT Specialist | AI Enthusiast
        </p>

        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-left">Latest Stack Upgrade</h2>
          <div className="text-left space-y-2 font-mono text-sm">
            <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> Frontend: React 18 + TypeScript</p>
            <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> Build Tool: Vite</p>
            <p className="flex items-center"><span className="text-green-400 mr-2">✓</span> Styling: Tailwind CSS</p>
            <p className="flex items-center"><span className="text-yellow-400 mr-2">➜</span> Backend: Firebase (Ready for config)</p>
          </div>
        </div>

        <p className="text-slate-500 text-sm animate-pulse">
          Site is currently under major reconstruction using modern technologies...
        </p>
      </div>
    </div>
  )
}

export default App
