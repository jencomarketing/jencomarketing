import React from 'react';
import { LayoutDashboard, Video, Rocket, Megaphone, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-neonBlue" />,
      title: "社媒代运营 (Social Media)",
      desc: "全案托管账号。不仅仅是发帖，我们负责账号规划、数据监控、危机管理。让您的主页看起来专业且具有吸引力。",
      color: "border-neonBlue/30 text-neonBlue"
    },
    {
      icon: <Video className="w-6 h-6 text-brandYellow" />,
      title: "内容创作 (Production)",
      desc: "专业拍摄团队。无论是 Reels 短视频、产品照、还是 Menu 设计，全部包办。用高级的视觉画面来吸引观众。",
      color: "border-brandYellow/30 text-brandYellow"
    },
    {
      icon: <Rocket className="w-6 h-6 text-red-500" />,
      title: "效果广告 (Performance Ads)",
      desc: "精准投放。拒绝盲目烧钱，每一分预算都花在刀刃上。我们看数据说话，持续优化 ROI。",
      color: "border-red-500/30 text-red-500"
    },
    {
      icon: <Megaphone className="w-6 h-6 text-brandOrange" />,
      title: "爆款营销 (Viral Marketing)",
      desc: "流量加速器。结合 KOC + 5大平台 (Fun4Life 生态圈)，瞬间引爆流量，制造网红效应。",
      color: "border-brandOrange/30 text-brandOrange"
    }
  ];

  return (
    <section id="services" className="py-24 bg-cyberDark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-4">
             <span className="text-neonBlue font-mono text-xs">SYSTEM MODULES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-tech">
            GROWTH <span className="text-neonBlue">PROTOCOL</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Jenco Marketing 提供全方位的 Digital Solution。从 Account Management、Content Creation 到精准 Ads 投放，一站式搞定。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <div key={index} className={`bg-black/60 backdrop-blur border ${service.color} hover:bg-white/5 transition-all duration-300 p-6 rounded-xl group relative overflow-hidden`}>
                    <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:scale-110 transition-transform">
                        {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-tech">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {service.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};