import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { StationDetailView } from './components/StationDetailView';
import { ProfileView } from './components/ProfileView';
import { GuideView } from './components/GuideView';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
      {currentView === 'home' && <HomeView />}
      {currentView === 'station' && <StationDetailView />}
      {currentView === 'profile' && <ProfileView />}
      {currentView === 'guide' && <GuideView />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </AppProvider>
  );
}
