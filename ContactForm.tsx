import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, TABLE_NAME } from '../services/supabaseClient';
import { LeadForm, ServiceType } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    company_name: '',
    social_media_handle: '',
    phone: '',
    service_type: ServiceType.STRATEGY,
    budget_range: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const isConfigured = supabase.supabaseUrl && !supabase.supabaseUrl.includes('example.supabase.co');
      if (isConfigured) {
        await supabase.from(TABLE_NAME).insert([formData]);
      } 

      const message = `你好 Jentzen，我想咨询 Marketing 服务：
姓名: ${formData.name}
公司: ${formData.company_name}
电话: ${formData.phone}
社交媒体: ${formData.social_media_handle}
服务类型: ${formData.service_type}
预算范围: ${formData.budget_range}`;

      const whatsappUrl = `https://wa.me/60173309940?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setStatus('success');
      setFormData({
        name: '',
        company_name: '',
        social_media_handle: '',
        phone: '',
        service_type: ServiceType.STRATEGY,
        budget_range: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-brandOrange/50">
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandOrange to-brandYellow shadow-[0_0_20px_#FF6600]"></div>
       
       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-cyberGray p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(255,102,0,0.1)] rounded-xl relative overflow-hidden">
           {/* Tech Decor */}
           <div className="absolute top-0 right-0 p-4 opacity-20">
              <div className="flex gap-1">
                 <div className="w-2 h-2 bg-brandOrange"></div>
                 <div className="w-2 h-2 bg-brandOrange"></div>
                 <div className="w-2 h-2 bg-brandOrange"></div>
              </div>
           </div>

           <div className="text-center mb-10">
             <h2 className="text-3xl font-black text-white mb-2 font-tech">
               准备好让业绩 <span className="text-brandOrange text-shadow-neon">翻倍</span> 了吗？
             </h2>
             <p className="text-gray-400 font-medium">
               每月仅限 3 个全案管理名额。
             </p>
           </div>

           {status === 'success' ? (
             <div className="text-center py-12">
               <CheckCircle className="w-20 h-20 text-brandOrange mx-auto mb-6" />
               <h3 className="text-2xl font-bold text-white mb-2">正在跳转至 WhatsApp...</h3>
               <button onClick={() => setStatus('idle')} className="mt-8 text-brandOrange hover:underline font-bold">再次发送</button>
             </div>
           ) : (
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2 font-mono">姓名 Name</label>
                   <input 
                    required
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                    placeholder="您的名字"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2 font-mono">电话 Phone</label>
                   <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                    placeholder="017-330 9940"
                   />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2 font-mono">公司/品牌 Company</label>
                   <input 
                    required
                    type="text" 
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                    placeholder="品牌名称"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2 font-mono">社交媒体 Social Handle</label>
                   <input 
                    type="text" 
                    name="social_media_handle"
                    value={formData.social_media_handle}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                    placeholder="@brandname"
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-400 mb-2 font-mono">咨询服务 Service</label>
                 <select 
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                 >
                   {Object.values(ServiceType).map((svc) => (
                     <option key={svc} value={svc} className="bg-black">{svc}</option>
                   ))}
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-400 mb-2 font-mono">
                    预算范围 Budget
                 </label>
                 <select 
                  name="budget_range"
                  value={formData.budget_range}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                 >
                   <option value="" disabled className="bg-black">选择预算</option>
                   <option value="RM 2.5k - RM 5k" className="bg-black">RM 2,500 - RM 5,000 (入门)</option>
                   <option value="RM 5k - RM 10k" className="bg-black">RM 5,000 - RM 10,000 (增长)</option>
                   <option value="> RM 10k" className="bg-black">RM 10,000 + (加速扩张)</option>
                 </select>
               </div>

               <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-brandOrange to-brandYellow text-black font-black text-lg py-4 rounded-lg hover:shadow-[0_0_20px_#FF6600] transition-all flex items-center justify-center gap-2 mt-4 font-tech uppercase"
               >
                 {status === 'submitting' ? '正在处理...' : '发送咨询'} <Send size={20} />
               </button>
             </form>
           )}
         </div>
       </div>
    </section>
  );
};