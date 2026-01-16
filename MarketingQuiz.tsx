import React, { useState } from 'react';
import { CheckCircle2, RefreshCcw, Activity } from 'lucide-react';

export const MarketingQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      q: "您的社交媒体更新频率是？",
      options: [
        { text: "很少 (一个月一次)", points: 0 },
        { text: "每周 (1-2 次)", points: 5 },
        { text: "每天 (持续更新)", points: 10 }
      ]
    },
    {
      q: "您的主要内容形式是？",
      options: [
        { text: "纯图片 (Static Images)", points: 0 },
        { text: "基础视频/幻灯片 (Slideshows)", points: 5 },
        { text: "高级剧情/拍摄制作 (High-End Video)", points: 10 }
      ]
    },
    {
      q: "您有投放付费广告吗？",
      options: [
        { text: "没有，纯靠自然流量", points: 0 },
        { text: "有，偶尔 Boost Post", points: 5 },
        { text: "有，系统的漏斗投放 (Funnels)", points: 10 }
      ]
    }
  ];

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); 
      if ((window as any).confetti) {
        (window as any).confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#FF6600', '#ffffff']
        });
      }
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setScore(0);
  };

  const getResult = () => {
    if (score < 10) return {
      title: "CRITICAL CONDITION (Weak)",
      desc: "您的品牌曝光率极低。建议立即进行全面整改，建立基础的数字形象。",
      color: "text-red-500",
      border: "border-red-500"
    };
    if (score < 25) return {
      title: "STABLE BUT LOW GROWTH",
      desc: "您有一定的基础，但还有很大的优化空间。通过专业运营可以使效果翻倍。",
      color: "text-brandYellow",
      border: "border-brandYellow"
    };
    return {
      title: "OPTIMIZED POTENTIAL",
      desc: "您的基础很扎实。现在是时候注入更多广告预算，最大化投资回报率 (ROI)。",
      color: "text-neonBlue",
      border: "border-neonBlue"
    };
  };

  return (
    <section className="py-24 bg-cyberGray border-t border-white/5 relative">
      <div className="absolute inset-0 bg-cyber-grid-pattern opacity-10"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
           <div className="inline-flex items-center gap-2 mb-4">
              <Activity className="text-neonBlue" size={20}/>
              <span className="font-mono text-neonBlue text-sm tracking-widest">SYSTEM DIAGNOSTIC</span>
           </div>
           <h2 className="text-3xl font-black text-white mb-4 font-tech">
             营销健康度 <span className="text-brandOrange">自测</span>
           </h2>
           <p className="text-gray-400">
             Run a 30-second scan on your business marketing performance.
           </p>
        </div>

        <div className="glass-tech rounded-2xl p-8 min-h-[350px] flex flex-col justify-center items-center relative overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.1)]">
           
           {/* Scanning Line Effect */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonBlue to-transparent animate-scanline opacity-30"></div>

           {step < questions.length && (
             <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
               <div 
                 className="h-full bg-neonBlue transition-all duration-300 shadow-[0_0_10px_#00F0FF]"
                 style={{ width: `${((step + 1) / questions.length) * 100}%` }}
               ></div>
             </div>
           )}

           {step < questions.length ? (
             <div className="w-full animate-fade-in">
               <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                   <span className="font-mono text-xs text-gray-500">QUERY {step + 1}/{questions.length}</span>
                   <span className="font-mono text-xs text-neonBlue animate-pulse">SCANNING...</span>
               </div>
               
               <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center font-sans">
                 {questions[step].q}
               </h3>
               <div className="grid gap-4">
                 {questions[step].options.map((opt, idx) => (
                   <button
                     key={idx}
                     onClick={() => handleAnswer(opt.points)}
                     className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:border-neonBlue hover:bg-neonBlue/10 transition-all font-medium text-gray-300 hover:text-white group"
                   >
                     <span className="mr-3 text-gray-600 group-hover:text-neonBlue font-mono">[{String.fromCharCode(65 + idx)}]</span>
                     {opt.text}
                   </button>
                 ))}
               </div>
             </div>
           ) : (
             <div className="text-center w-full">
                <h3 className="text-gray-400 text-xs font-mono mb-2">DIAGNOSTIC COMPLETE</h3>
                <h2 className={`text-4xl font-black mb-4 font-tech ${getResult().color}`}>
                  {getResult().title}
                </h2>
                <div className={`p-6 border-l-4 ${getResult().border} bg-white/5 text-left max-w-lg mx-auto mb-8 rounded-r-lg`}>
                  <p className="text-white text-lg leading-relaxed">
                    {getResult().desc}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`https://wa.me/60173309940?text=Hi%20Jenco,%20my%20marketing%20health%20scan%20result%20is:%20${getResult().title}.%20Need%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-brandOrange text-white font-bold font-tech rounded hover:bg-white hover:text-brandOrange transition-all shadow-glow-orange flex items-center gap-2 justify-center"
                  >
                     <CheckCircle2 size={18} /> 咨询专家
                  </a>
                  <button 
                    onClick={resetQuiz}
                    className="px-8 py-3 border border-white/20 text-gray-400 font-bold font-tech rounded hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCcw size={16} /> 重新测试
                  </button>
                </div>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};