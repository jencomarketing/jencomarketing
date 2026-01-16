import React from 'react';
import { TrendingDown, Users, EyeOff, AlertTriangle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "转化率低 (Low Conversion)",
      desc: "Traffic 很高，但是没人下单？食物明明很好吃，店里静过图书馆？",
      code: "ERR_NO_SALES"
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "无效询盘 (Ghost Leads)",
      desc: "Facebook PM 只有小猫两三只？全是问爽不要买的‘幽灵’客户？",
      code: "ERR_BAD_TARGETING"
    },
    {
      icon: <EyeOff className="w-8 h-8 text-red-500" />,
      title: "品牌隐形 (Brand Invisible)",
      desc: "产品很好但没人懂？投了 Ads 也是把钱丢进大海，ROI 惨不忍睹？",
      code: "ERR_INVISIBLE"
    }
  ];

  return (
    <section id="pain-points" className="py-24 bg-cyberGray relative border-t border-white/5 overflow-hidden">
      {/* Red Alert Ambient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-red-500 font-mono text-sm mb-4">
                <AlertTriangle size={16} />
                <span>SYSTEM ALERT: CRITICAL ERRORS DETECTED</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-tech leading-tight">
                您的生意是否面临 <span className="text-red-500 text-shadow-neon">这些瓶颈</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                很多老板在 Marketing 上最大的痛点，不是没有 Budget，而是不懂得把钱花在对的地方。
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map((pain, index) => (
                <div key={index} className="group relative bg-black/40 border border-red-500/20 p-8 rounded-lg hover:bg-red-900/10 hover:border-red-500 transition-all duration-300">
                    <div className="absolute top-2 right-2 text-[10px] font-mono text-red-900 group-hover:text-red-500 transition-colors">{pain.code}</div>
                    <div className="mb-6 p-3 bg-red-500/10 w-fit rounded border border-red-500/20 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all">
                        {pain.icon}
                    </div>
                    <h3 className="text-xl font-bold font-tech text-white mb-4 group-hover:text-red-400">{pain.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {pain.desc}
                    </p>
                </div>
            ))}
        </div>

        <div className="mt-12 text-center">
            <a 
                href="https://wa.me/60173309940?text=Hi%20Jenco,%20I%20want%20to%20solve%20my%20marketing%20challenges."
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold font-mono rounded shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all uppercase"
            >
                DEBUG NOW (解决问题)
            </a>
        </div>
      </div>
    </section>
  );
};