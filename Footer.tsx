import React from 'react';
import { Facebook, Instagram, Video, Mail, MapPin, Phone, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-neonBlue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            
            {/* Column 1: Brand */}
            <div className="lg:col-span-1">
                <div className="mb-6 flex items-center gap-2">
                    <Zap className="text-brandOrange w-6 h-6 fill-current" />
                    <span className="font-tech font-black text-xl text-white">JENCO</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed font-mono">
                    高端数字增长合作伙伴，通过数据驱动策略和卓越创意，助力品牌实现规模化增长。
                </p>
                <div className="text-gray-600 text-xs font-mono">
                    <p>Jenco Group Sdn Bhd</p>
                    <p>202501022846 (1624259-M)</p>
                </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
                <h4 className="text-white font-tech mb-6 text-lg tracking-wide">导航 NAVIGATION</h4>
                <ul className="space-y-3 text-sm text-gray-400 font-mono">
                    <li><a href="#hero" className="hover:text-neonBlue transition-colors">首页</a></li>
                    <li><a href="#services" className="hover:text-neonBlue transition-colors">服务项目</a></li>
                    <li><a href="#portfolio" className="hover:text-neonBlue transition-colors">作品案例</a></li>
                    <li><a href="#contact" className="hover:text-neonBlue transition-colors">联系我们</a></li>
                </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
                <h4 className="text-white font-tech mb-6 text-lg tracking-wide">联系 CONTACT</h4>
                <ul className="space-y-4 text-sm text-gray-400 font-mono">
                    <li className="flex items-start gap-3">
                        <Phone size={16} className="text-brandOrange mt-0.5"/> 
                        <span>017-330 9940</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Mail size={16} className="text-brandOrange mt-0.5"/> 
                        <span>jencoteam123@gmail.com</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <MapPin size={16} className="text-brandOrange mt-0.5"/> 
                        <span>Kuala Lumpur, Malaysia</span>
                    </li>
                </ul>
            </div>

            {/* Column 4: Socials */}
            <div>
                 <h4 className="text-white font-tech mb-6 text-lg tracking-wide">关注 FOLLOW</h4>
                 <div className="flex gap-4">
                    <a href="https://www.facebook.com/Fun4life.my" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brandOrange hover:text-white transition-all text-gray-400 border border-white/10">
                        <Facebook size={18} />
                    </a>
                    <a href="https://www.instagram.com/fun4life.my" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brandOrange hover:text-white transition-all text-gray-400 border border-white/10">
                        <Instagram size={18} />
                    </a>
                    <a href="https://www.tiktok.com/@fun4life.my" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brandOrange hover:text-white transition-all text-gray-400 border border-white/10">
                        <Video size={18} />
                    </a>
                 </div>
            </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-gray-600 text-xs font-mono">© {new Date().getFullYear()} Jenco Group Sdn Bhd. All Rights Reserved.</p>
             <div className="flex gap-6 text-xs text-gray-600 font-mono">
                <a href="#" className="hover:text-white transition-colors">隐私政策</a>
                <a href="#" className="hover:text-white transition-colors">服务条款</a>
             </div>
        </div>
      </div>
    </footer>
  );
};