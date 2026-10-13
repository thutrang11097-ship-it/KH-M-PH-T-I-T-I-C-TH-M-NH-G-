import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Sparkles, BookOpen, User, Menu, X, HelpCircle, Shield } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentView, setView, completedStationsCount, totalStationsCount } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 no-print transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => {
              setView('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 text-left group transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-sm shadow-teal-200">
              <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 block leading-tight">
                Khám Phá Tôi
              </span>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:block leading-none">
                Hoạt động trải nghiệm · Khối 10
              </span>
            </div>
          </button>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setView('home')}
              className={`hover:text-teal-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentView === 'home' ? 'text-teal-700 font-semibold border-b-2 border-teal-600' : ''
              }`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => setView('home')}
              className="hover:text-teal-600 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              8 Trạm trải nghiệm
            </button>
            <button
              onClick={() => setView('profile')}
              className={`hover:text-teal-600 transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1.5 ${
                currentView === 'profile' ? 'text-teal-700 font-semibold border-b-2 border-teal-600' : ''
              }`}
            >
              <span>Hồ sơ bản thân</span>
              <span className="text-xs px-1.5 py-0.2 bg-teal-50 text-teal-700 rounded-md font-mono font-bold">
                {completedStationsCount}/{totalStationsCount}
              </span>
            </button>
            <button
              onClick={() => setView('guide')}
              className={`hover:text-teal-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentView === 'guide' ? 'text-teal-700 font-semibold border-b-2 border-teal-600' : ''
              }`}
            >
              Hướng dẫn & Tra cứu
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setView('profile')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span>Xem hồ sơ ({completedStationsCount}/{totalStationsCount})</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => {
              setView('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
          >
            <span>Trang chủ</span>
            <Compass className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={() => {
              setView('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
          >
            <span>8 Trạm trải nghiệm</span>
            <Sparkles className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={() => {
              setView('profile');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-teal-700 bg-teal-50 flex items-center justify-between"
          >
            <span>Hồ sơ khám phá bản thân</span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-white text-teal-800 rounded">
              {completedStationsCount}/{totalStationsCount} trạm
            </span>
          </button>
          <button
            onClick={() => {
              setView('guide');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-between"
          >
            <span>Hướng dẫn & Chia sẻ link khối 10</span>
            <HelpCircle className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      )}
    </header>
  );
};
