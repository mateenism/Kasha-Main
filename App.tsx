import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import FloatingActions from './components/FloatingActions';
import Chatbot from './components/Chatbot';
import CostCalculatorPage from './pages/CostCalculatorPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ImageGeneratorPage from './pages/ImageGeneratorPage';
import TeamPage from './pages/TeamPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

interface LayoutProps {
  toggleTheme: () => void;
  theme: string;
  toggleChatbot: () => void;
}

const Layout: React.FC<LayoutProps> = ({ toggleTheme, theme, toggleChatbot }) => {
  const location = useLocation();

  // Site-wide scroll animation observer - MOVED HERE TO FIX NAVIGATION BUG
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Delay slightly to ensure all elements are in the DOM after route change
    const timer = setTimeout(() => {
        const targets = document.querySelectorAll('.scroll-target');
        targets.forEach((target) => observer.observe(target));
    }, 100);


    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run effect when pathname changes

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="flex-grow">
        <div key={location.pathname} className="page-transition">
            <Outlet />
        </div>
      </main>
      <Footer />
      <FloatingActions toggleChatbot={toggleChatbot} />
    </div>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(prev => !prev);
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout toggleTheme={toggleTheme} theme={theme} toggleChatbot={toggleChatbot} />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cost-calculator" element={<CostCalculatorPage />} />
          <Route path="image-generator" element={<ImageGeneratorPage />} />
          <Route path="*" element={<HomePage />} /> {/* Fallback to home */}
        </Route>
      </Routes>
      {isChatbotOpen && <Chatbot closeChatbot={toggleChatbot} />}
    </HashRouter>
  );
};

export default App;