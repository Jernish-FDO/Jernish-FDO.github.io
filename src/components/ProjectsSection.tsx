import React from 'react';
import { Database, Server, Smartphone, Cloud } from 'lucide-react';

// This component simulates a heavy part of the application
// It will be bundled into a separate chunk file
const ProjectsSection: React.FC = () => {
  const projects = [
    { title: "Jarvis AI Assistant", icon: <Server className="w-6 h-6" />, desc: "Python automation with Gemini API", tech: "Python, AI" },
    { title: "IoT Controller", icon: <Cloud className="w-6 h-6" />, desc: "Firebase connected Pico W system", tech: "C++, Firebase" },
    { title: "E-Commerce App", icon: <Smartphone className="w-6 h-6" />, desc: "Full stack shopping platform", tech: "React, Node.js" },
    { title: "Archive System", icon: <Database className="w-6 h-6" />, desc: "High-performance data storage", tech: "PostgreSQL" },
  ];

  return (
    <div className="mt-16 text-left">
      <h3 className="text-3xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:-translate-y-1 group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-slate-700 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                {p.icon}
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                {p.tech}
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-2">{p.title}</h4>
            <p className="text-slate-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
