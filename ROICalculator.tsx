import React, { useState } from 'react';
import { Calculator, BarChart2, Target, Users, TrendingUp } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState(2500);

  // Simplified logic based on Total Budget directly
  const estimatedViews = Math.floor(totalBudget * 60); 
  const estimatedLeads = Math.floor(totalBudget * 0.04); 
  const potentialReach = Math.floor(totalBudget * 120); 

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandOrange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded border border-neonBlue/30 bg-neonBlue/5 text-neonBlue font-mono text-sm mb-4">
            <BarChart2 size={16} /> GROWTH SIMULATOR
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 font-tech">
            投资回报 <span className="text-brandOrange">估算器</span>
          </h2>
          <p className="text-gray-400">
            透明化是合作的核心。调整预算条查看潜在效果。
          </p>
        </div>

        <div className="bg-cyberGray border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden">
          {/* Tech lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandOrange to-neonBlue shadow-[0_0_10px_#00F0FF]"></div>
          
          <div className="mb-10">
            <label className="flex justify-between items-end mb-6">
              <span className="text-lg font-bold text-white font-tech">每月预算 MONTHLY BUDGET</span>
              <span className="text-4xl font-black text-brandOrange font-mono tracking-tighter text-shadow-neon">RM {formatNumber(totalBudget)}</span>
            </label>
            
            <div className="relative h-12 flex items-center">
                <input 
                type="range" 
                min="2500" 
                max="20000" 
                step="100" 
                value={totalBudget} 
                onChange={(e) => setTotalBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer z-20 relative"
                />
                <div 
                    className="absolute h-2 bg-gradient-to-r from-brandOrange to-neonBlue rounded-l-lg z-10 top-5 pointer-events-none" 
                    style={{ width: `${((totalBudget - 2500) / (20000 - 2500)) * 100}%` }}
                ></div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono uppercase">
              <span>入门 (RM 2.5k)</span>
              <span>企业级 (RM 20k+)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard 
                label="预计覆盖 REACH" 
                value={`${formatNumber(potentialReach)}+`} 
                icon={<Users size={20} className="text-neonBlue"/>}
                color="text-neonBlue"
            />
            <MetricCard 
                label="预计浏览 VIEWS" 
                value={`${formatNumber(estimatedViews)}+`} 
                icon={<Target size={20} className="text-brandOrange"/>}
                color="text-brandOrange"
                isHighlight
            />
            <MetricCard 
                label="预计询盘 LEADS" 
                value={`~${estimatedLeads}`} 
                icon={<TrendingUp size={20} className="text-green-400"/>}
                color="text-green-400"
            />
          </div>

          <div className="mt-10 text-center">
             <a 
               href={`https://wa.me/60173309940?text=Hi%20Jenco,%20my%20marketing%20budget%20is%20RM${totalBudget}.%20Lets%20start.`}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-tech font-bold hover:bg-neonBlue hover:text-black transition-all shadow-glow-blue uppercase"
             >
               <Calculator size={18} /> 启动方案 (ACTIVATE PLAN)
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ label, value, icon, color, isHighlight }: any) => (
    <div className={`bg-black/40 p-6 rounded-lg border ${isHighlight ? 'border-brandOrange/50 shadow-[0_0_20px_rgba(255,102,0,0.1)]' : 'border-white/5'} text-center group transition-all hover:bg-white/5`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-gray-500 text-xs font-mono font-bold mb-2 uppercase">{label}</h3>
        <p className={`text-2xl font-black font-sans ${color}`}>{value}</p>
    </div>
);