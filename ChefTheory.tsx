import React from 'react';
import { MessageCircle, ExternalLink, ChefHat } from 'lucide-react';

export const ChefTheory: React.FC = () => {
  const platforms = [
    { name: '小红书 (XHS)', url: 'https://xhslink.com/m/6k9EGpFFLTW' },
    { name: 'Facebook', url: 'https://www.facebook.com/Fun4life.my' },
    { name: '抖音 (Douyin)', url: 'https://v.douyin.com/S4WH5uB/' },
    { name: 'Instagram', url: 'https://www.instagram.com/fun4life.my?igsh=MXNweWN1ZnhhZ3pieA==' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@fun4life.my' }
  ];

  return (
    <section id="usp" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-brandOrange/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-brandOrange to-brandYellow opacity-20 blur-xl"></div>
             <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
                alt="Strategy" 
                className="relative rounded-lg border-2 border-brandOrange/30 shadow-[0_0_30px_rgba(255,102,0,0.2)]"
             />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-brandYellow text-brandYellow font-bold text-sm mb-6 bg-brandYellow/10 font-mono">
              <ChefHat size={16}/> UNIQUE SELLING POINT
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-tech">
              独家 <span className="text-brandOrange">“大厨理论”</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
              很多老板以为只要丢钱投 Ads，生意就会自动好。
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light border-l-2 border-brandOrange pl-4">
              <strong className="text-white block mb-2">这是一个误区。</strong> 
              引流只是 Amplifier（放大器）。你的产品是“食材”，我是“大厨”。如果食材不新鲜，神仙也救不了你。但如果食材好，
              <span className="text-brandOrange font-bold">我会用我的火候（广告技术）和摆盘（Content Marketing），帮你炒出一盘让全城排队的爆款好菜！</span>
            </p>

            <a 
              href="https://wa.me/60173309940?text=Hi%20Jentzen,%20I%20want%20to%20know%20more%20about%20your%20Chef%20Theory."
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded font-bold hover:bg-[#128C7E] transition-colors shadow-glow-blue font-tech"
            >
              <MessageCircle size={20} />
              咨询营销策略
            </a>
          </div>
        </div>

        {/* Ecosystem */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-brandOrange/20 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brandOrange/10 rounded-full blur-[80px]"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
             <div>
                <h3 className="text-3xl font-black font-tech text-white mb-2">
                  <span className="text-brandOrange">Fun 4 Life</span> Ecosystem
                </h3>
                <p className="text-gray-400 mb-6 max-w-xl">
                  利用我们自有的 KOC 资源网络，全网累积粉丝超过 50,000+。一站式分发到 5 大热门平台，瞬间引爆流量。
                </p>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <a 
                      key={platform.name} 
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 bg-white/5 hover:bg-brandOrange border border-white/10 hover:border-brandOrange rounded text-xs text-gray-300 hover:text-white transition-all font-mono font-bold"
                    >
                      {platform.name} <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
             </div>
             
             <div className="hidden md:block text-right">
                <div className="text-6xl font-black font-tech text-white">50K<span className="text-brandOrange">+</span></div>
                <div className="text-xs text-neonBlue uppercase tracking-[0.3em] mt-2 font-mono">全网覆盖人数</div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};