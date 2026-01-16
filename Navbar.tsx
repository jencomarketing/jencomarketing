import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-brandOrange rounded flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_#FF6600]">
               <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col">
                <span className="font-tech font-black text-xl tracking-tighter text-white leading-none">
                JENCO
                </span>
                <span className="text-[10px] tracking-[0.2em] text-neonBlue uppercase leading-none">
                MARKETING
                </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {[
                { id: 'usp', label: '独家理论' },
                { id: 'services', label: '服务项目' },
                { id: 'portfolio', label: '作品案例' },
                { id: 'success', label: '客户见证' }
              ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="text-sm text-gray-400 hover:text-white hover:shadow-[0_0_10px_#00F0FF] transition-all font-tech uppercase tracking-wide"
                  >
                      {item.label}
                  </button>
              ))}
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="ml-4 px-6 py-2 bg-transparent border border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-black transition-all duration-300 font-tech font-bold text-sm clip-path-polygon"
              >
                开始合作
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-cyberGray border-b border-white/10 absolute w-full left-0 top-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('usp')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">独家理论</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">服务项目</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">作品案例</button>
            <button onClick={() => scrollToSection('success')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">客户见证</button>
            <button onClick={() => scrollToSection('contact')} className="w-full mt-4 bg-brandOrange text-white px-4 py-3 font-bold font-tech">开始合作</button>
          </div>
        </div>
      )}
    </nav>
  );
};