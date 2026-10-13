import React, { createContext, useContext, useEffect, useState } from 'react';
import { StationId, StationResult, StationReflection, UserProfile } from '../types';
import { STATIONS } from '../data/stationsData';

interface AppContextType {
  currentView: 'home' | 'station' | 'profile' | 'guide';
  selectedStationId: StationId | null;
  userProfile: UserProfile;
  completedStationsCount: number;
  totalStationsCount: number;
  setView: (view: 'home' | 'station' | 'profile' | 'guide') => void;
  startStation: (stationId: StationId) => void;
  saveStationResult: (result: StationResult) => void;
  saveStationReflection: (stationId: StationId, reflection: StationReflection) => void;
  resetStation: (stationId: StationId) => void;
  resetAllData: () => void;
  updateProfileDetails: (updates: Partial<UserProfile>) => void;
}

const STORAGE_KEY = 'kham_pha_toi_grade10_v1';

const initialProfile: UserProfile = {
  studentName: '',
  stationResults: {} as Record<StationId, StationResult>,
  targetCompetenciesToGrow: [
    'Tư duy phản biện và bằng chứng',
    'Khả năng quản lý cảm xúc và thấu cảm bạn bè',
  ],
  customGoalForNextWeek: 'Chủ động tham gia 1 hoạt động nhóm và áp dụng lắng nghe tích cực với bạn cùng bàn.',
  personalNotes: '',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setView] = useState<'home' | 'station' | 'profile' | 'guide'>('home');
  const [selectedStationId, setSelectedStationId] = useState<StationId | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // LocalStorage access fallback
    }
    return initialProfile;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userProfile));
    } catch {
      // Ignore write errors if storage quota or sandboxed
    }
  }, [userProfile]);

  const completedStationsCount = Object.values(userProfile.stationResults).filter(
    (res) => res && res.completed
  ).length;

  const totalStationsCount = STATIONS.length;

  const startStation = (stationId: StationId) => {
    setSelectedStationId(stationId);
    setView('station');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const saveStationResult = (result: StationResult) => {
    setUserProfile((prev) => ({
      ...prev,
      stationResults: {
        ...prev.stationResults,
        [result.stationId]: result,
      },
    }));
  };

  const saveStationReflection = (stationId: StationId, reflection: StationReflection) => {
    setUserProfile((prev) => {
      const existing = prev.stationResults[stationId];
      if (!existing) return prev;
      return {
        ...prev,
        stationResults: {
          ...prev.stationResults,
          [stationId]: {
            ...existing,
            reflection,
          },
        },
      };
    });
  };

  const resetStation = (stationId: StationId) => {
    setUserProfile((prev) => {
      const nextResults = { ...prev.stationResults };
      delete nextResults[stationId];
      return {
        ...prev,
        stationResults: nextResults,
      };
    });
  };

  const resetAllData = () => {
    setUserProfile(initialProfile);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setView('home');
    setSelectedStationId(null);
  };

  const updateProfileDetails = (updates: Partial<UserProfile>) => {
    setUserProfile((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        selectedStationId,
        userProfile,
        completedStationsCount,
        totalStationsCount,
        setView: (view) => {
          setView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        startStation,
        saveStationResult,
        saveStationReflection,
        resetStation,
        resetAllData,
        updateProfileDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
