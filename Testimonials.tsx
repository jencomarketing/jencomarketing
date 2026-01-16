import React from 'react';
import { Star, TrendingUp, Building2, Quote, ArrowRight, FileText, ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Testimonials: React.FC = () => {
  const { content } = useContent();
  const { cases } = content;

  return (
    <section id="success" className="py-24 bg-black border-y border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-3xl md:text-4xl font-black text-white mb-4 font-tech">
              客户成功案例 <span className="text-brandOrange">Success Stories</span>
            </h2>
            <p className="text-gray-400 font-medium">来自合作伙伴的真实反馈。</p>
          </div>
          <div className="hidden md:block">
            <span className="text-brandYellow font-mono text-sm border border-brandYellow px-2 py-1 rounded bg-brandYellow/10">Trust Score: 100%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cases.map((item) => (
            <div key={item.id} className="relative p-8 rounded-xl bg-cyberGray border border-white/10 hover:border-brandOrange/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col overflow-hidden">
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 rotate-12 group-hover:text-brandOrange/10 transition-colors z-0" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full border-2 border-brandOrange p-0.5 shadow-[0_0_15px_rgba(255,102,0,0.3)] bg-gray-900 flex-shrink-0 overflow-hidden">
                     {item.image ? <img src={item.image} className="w-full h-full object-cover rounded-full"/> : <div className="w-full h-full bg-brandOrange/20"></div>}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white leading-tight font-tech">{item.name}</h3>
                    <div className="flex gap-1 mt-1 text-brandYellow">
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                    </div>
                </div>
              </div>

              <div className="relative z-10 flex-1">
                 <p className="text-gray-300 italic leading-relaxed text-sm mb-6">
                   "{item.desc}"
                 </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 mt-auto">
                 <div className="inline-flex items-center gap-2 text-brandOrange font-bold text-xs bg-brandOrange/10 px-3 py-1.5 rounded font-mono">
                    <TrendingUp size={14} />
                    {item.result}
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Link */}
        <div className="flex justify-center">
             <a 
               href="https://drive.google.com/file/d/1_0-6rkRwL0GwaCA3804FeO1M9jNxQXG5/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neonBlue rounded-2xl p-6 transition-all duration-300 w-full max-w-2xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
             >
                <div className="bg-neonBlue/20 p-4 rounded-xl group-hover:bg-neonBlue group-hover:text-black transition-colors text-neonBlue">
                    <FileText size={32} />
                </div>
                <div className="flex-1 text-left">
                    <h4 className="text-lg font-bold text-white group-hover:text-neonBlue transition-colors font-tech">
                        查看合作伙伴名单 (PDF)
                    </h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">
                        超过 50+ 品牌的信任
                    </p>
                </div>
                <div className="bg-black/20 p-2 rounded-full text-gray-500 group-hover:text-white transition-colors">
                    <ExternalLink size={20} />
                </div>
             </a>
        </div>
      </div>
    </section>
  );
};