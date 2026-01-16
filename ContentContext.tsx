import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, TestCase, Partner, PortfolioItem } from '../types';

// Default content (Initial State) - Jenco Marketing
const defaultContent: SiteContent = {
  seo: {
    title: "Jenco Marketing | 高端数字增长合作伙伴",
    description: "Jenco Group Sdn Bhd (202501022846) - 专业社交媒体营销。数据驱动策略，内容创作与效果广告。"
  },
  hero: {
    title: "Marketing 就像炒菜",
    subtitle: "火候不对，再好的料都浪费！",
    description: "老板，别再烧钱做无效广告了！引流是 Amplifier（放大器），产品是 Core（核心）。Jenco Marketing 拥有 8 年实战经验，不讲 Theory，只讲 Result。不管是 F&B 还是 Service Line，我们都懂怎样利用 Data + Content 帮你找客源，让你的生意 Huat 啊！"
  },
  cases: [
    {
      id: '1',
      name: "Alex (名将美食馆)",
      result: "12点烧肉就卖完",
      desc: "以前店里静到拍苍蝇，找不到吃。Jenco Team 帮我搞了那个 Brand Story 还有拍美美的烧肉照，现在 everyday 12点 烧肉就卖完 liao！生意好到我想哭，真的很 Keng！",
      image: "" 
    },
    {
      id: '2',
      name: "Tommy Wong (Summer Cafe)",
      result: "厨房佬 Complain 做不及",
      desc: "之前都是安哥安娣来，你们把那个菠萝包和奶茶拍到几诱人一下，现在全是年轻人排队打卡！厨房佬都 Complain 做不及，但我数钱数到爽啦！",
      image: "" 
    },
    {
      id: '3',
      name: "Hou (星喜咖喱面)",
      result: "排队排到大马路",
      desc: "那个 Video 一出，哇不得了！Weekend 排队排到大马路，连 KL 的人都特地跑来吃。我的咖喱面卖到锅底都空去。这个 Marketing 钱花得最值得！",
      image: "" 
    }
  ],
  partners: [], 
  portfolio: [] 
};

interface ContentContextType {
  content: SiteContent;
  updateSEO: (seo: SiteContent['seo']) => void;
  updateHero: (hero: SiteContent['hero']) => void;
  updateCase: (id: string, field: keyof TestCase, value: string) => void;
  updatePartner: (id: string, field: keyof Partner, value: string) => void;
  addPartner: (name: string, logo?: string) => void;
  removePartner: (id: string) => void;
  addPortfolioItem: (item: PortfolioItem) => void;
  removePortfolioItem: (id: string) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('site_content_v3_cn'); // Changed key
    return saved ? JSON.parse(saved) : defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('site_content_v3_cn', JSON.stringify(content));
  }, [content]);

  const updateSEO = (seo: SiteContent['seo']) => {
    setContent(prev => ({ ...prev, seo }));
  };

  const updateHero = (hero: SiteContent['hero']) => {
    setContent(prev => ({ ...prev, hero }));
  };

  const updateCase = (id: string, field: keyof TestCase, value: string) => {
    setContent(prev => ({
      ...prev,
      cases: prev.cases.map(c => c.id === id ? { ...c, [field]: value } : c)
    }));
  };

  const updatePartner = (id: string, field: keyof Partner, value: string) => {
    setContent(prev => ({
      ...prev,
      partners: prev.partners.map(p => p.id === id ? { ...p, [field]: value } : p)
    }));
  };

  const addPartner = (name: string, logo?: string) => {
    const newPartner = { id: Date.now().toString(), name, logo };
    setContent(prev => ({
      ...prev,
      partners: [newPartner, ...prev.partners]
    }));
  };

  const removePartner = (id: string) => {
    setContent(prev => ({
      ...prev,
      partners: prev.partners.filter(p => p.id !== id)
    }));
  };

  const addPortfolioItem = (item: PortfolioItem) => {
    setContent(prev => ({
      ...prev,
      portfolio: [item, ...prev.portfolio || []]
    }));
  };

  const removePortfolioItem = (id: string) => {
    setContent(prev => ({
      ...prev,
      portfolio: prev.portfolio?.filter(p => p.id !== id) || []
    }));
  };

  const resetContent = () => {
    if (confirm("确定要重置所有内容吗？你的设置将会丢失。")) {
      setContent(defaultContent);
    }
  };

  return (
    <ContentContext.Provider value={{ 
      content, 
      updateSEO, 
      updateHero, 
      updateCase, 
      updatePartner, 
      addPartner, 
      removePartner, 
      addPortfolioItem, 
      removePortfolioItem, 
      resetContent 
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within ContentProvider');
  return context;
};