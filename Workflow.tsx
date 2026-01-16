import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    { num: "01", title: "初步咨询", desc: "了解您的商业模式与目前面临的痛点。" },
    { num: "02", title: "需求评估", desc: "深入诊断您的品牌，找出问题根源 (Audit)。" },
    { num: "03", title: "提案报价", desc: "量身定制营销方案，价格公道透明。" },
    { num: "04", title: "业绩起飞", desc: "执行方案，实时优化数据，坐等业绩增长。" },
  ];

  return (
    <section className="py-24 bg-brandDark border-t border-white/5 relative">
       <div className="absolute inset-0 bg-cyber-grid-pattern opacity-10"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-black font-tech text-white mb-4">合作流程 <span className="text-neonBlue">Workflow</span></h2>
            <p className="text-gray-400">简单 4 步，开启您的品牌增长之路。</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {steps.map((step, idx) => (
             <div key={idx} className="relative p-6 border border-white/10 hover:border-brandOrange bg-black/40 backdrop-blur group hover:-translate-y-2 transition-all duration-300 rounded-xl">
               <div className="text-5xl font-black font-tech text-white/5 absolute top-4 right-4 group-hover:text-brandOrange/20 transition-colors">{step.num}</div>
               <div className="w-10 h-10 bg-brandOrange/10 rounded-full flex items-center justify-center text-brandOrange font-bold mb-4 border border-brandOrange/30 shadow-[0_0_10px_rgba(255,102,0,0.2)]">
                  {idx + 1}
               </div>
               <h3 className="text-lg font-bold text-white mb-2 font-tech">{step.title}</h3>
               <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
               
               {idx < steps.length - 1 && (
                 <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-white/10">
                    <ArrowRight size={24} />
                 </div>
               )}
             </div>
           ))}
         </div>
       </div>
    </section>
  );
};