import { useState } from 'react';
import { MapPin, Calendar, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'commercial' | 'hotel' | 'healthcare' | 'residential'>('all');

  const tabs: { label: string; value: typeof activeTab }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Hotel & Leisure', value: 'hotel' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Residential', value: 'residential' }
  ];

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 font-sans" id="projects-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mb-12 space-y-4" id="projects-intro">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f1c2c] tracking-tight">
            Featured Projects
          </h1>
          <div className="h-[3px] w-12 bg-[#cca23b]"></div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            A curated selection of our premium architectural installations across Sri Lanka. Showcasing precision, safety authority, and uncompromising material quality in commercial, hospitality, healthcare, and high-end residential spaces.
          </p>
        </div>

        {/* Categories Tab Selector Row (As shown in Screenshot 4) */}
        <div className="border-b border-gray-100 mb-12" id="projects-tabs-row">
          <div className="flex flex-wrap gap-2 sm:gap-6 -mb-px">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`py-4 text-xs sm:text-sm font-bold border-b-2 transition duration-300 relative uppercase tracking-wider ${
                    isActive 
                      ? 'border-[#cca23b] text-[#cca23b]' 
                      : 'border-transparent text-gray-400 hover:text-gray-900'
                  }`}
                  id={`projects-tab-${tab.value}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid Design (Precisely matching visual layout of Screenshot 4) */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 text-gray-400" id="projects-empty-state">
            No projects found in this category. We are actively executing new builds in Sri Lanka.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8" id="projects-bento-grid">
            {filteredProjects.map((p, index) => {
              // Create an asymmetric grid structure for a modern bespoke bento feel
              const colSpanClass = index === 0 
                ? 'lg:col-span-4' 
                : index === 1 
                  ? 'lg:col-span-4' 
                  : index === 2 
                    ? 'lg:col-span-4' 
                    : 'lg:col-span-4';

              return (
                <div 
                  key={p.id}
                  className={`${colSpanClass} bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg hover:border-gray-200 transition duration-500 group relative min-h-[500px]`}
                  id={`project-card-${p.id}`}
                >
                  {/* Full-bleed Card Background Image */}
                  <div className="absolute inset-0 z-0 bg-gray-100">
                    <img 
                      src={p.imageUrl} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    {/* Shadow overlay darkening the bottom and top of the card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/55"></div>
                  </div>

                  {/* Absolute Top Overlays (Screenshot 4 style) */}
                  <div className="relative z-10 p-6 flex justify-between items-start" id={`project-headers-${p.id}`}>
                    <div className="flex flex-col gap-1">
                      <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 text-white inline-block ${
                        p.status === 'COMPLETED' ? 'bg-emerald-600' : 'bg-amber-600'
                      }`} id={`project-status-${p.id}`}>
                        {p.status}
                      </span>
                      <span className="text-[10px] text-gray-200 font-extrabold flex items-center gap-1 bg-black/45 px-2 py-0.5 rounded-xs self-start mt-1">
                        <MapPin className="h-3 w-3 text-[#cca23b]" />
                        {p.location}
                      </span>
                    </div>

                    <span className="text-xs text-gray-300 font-bold bg-white/10 backdrop-blur-3xs px-2.5 py-1 rounded-sm">
                      {p.year}
                    </span>
                  </div>

                  {/* Absolute Bottom Information Column */}
                  <div className="relative z-10 mt-auto p-6 md:p-8 space-y-4" id={`project-body-${p.id}`}>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black tracking-widest uppercase text-[#cca23b]">
                        {p.category.toUpperCase()} &bull; SCOPE DETAIL
                      </span>
                      <h3 className="text-white text-xl md:text-2xl font-black tracking-tight leading-tight group-hover:text-[#cca23b] transition-colors">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {p.details}
                    </p>

                    {/* Scope Items list badges */}
                    <div className="pt-4 border-t border-white/15 flex flex-wrap gap-1.5" id={`project-scopes-${p.id}`}>
                      {p.scope.map((s, idx) => (
                        <span 
                          key={idx} 
                          className="bg-white/10 text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
