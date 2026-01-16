import React from 'react';
import { ChevronDown, Cpu } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { title, subtitle, description } = content.hero;

  const scrollToNext = () => {
    document.getElementById('pain-points')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyberDark">
      {/* Cyber Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid-pattern opacity-20"></div>
      
      {/* Neon Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neonBlue/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brandOrange/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-neonBlue/30 bg-neonBlue/5 rounded text-neonBlue font-mono text-xs tracking-widest animate-fade-in-up">
            <Cpu size={14} className="animate-spin-slow" />
            <span>SYSTEM READY // V3.0</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-tech font-black text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {title}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-brandYellow text-shadow-neon">
             {subtitle}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-brandOrange text-white font-tech font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,102,0,0.5)] skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg] inline-block">立即咨询</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border border-neonBlue text-neonBlue font-tech font-bold text-lg hover:bg-neonBlue hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg] inline-block">查看战绩</span>
          </button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neonBlue cursor-pointer" onClick={scrollToNext}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};