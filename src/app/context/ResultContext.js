'use client';

import { createContext, useContext, useState } from 'react';

const ResultContext = createContext(null);

function initializeResult() {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('boltResult');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to parse stored result:', error);
      localStorage.removeItem('boltResult');
    }
  }
  return null;
}

export function ResultProvider({ children }) {
  const [result, setResultState] = useState(initializeResult);
  const [isLoading, setIsLoading] = useState(false);

  const setResult = (data) => {
    setResultState(data);
    if (data) {
      localStorage.setItem('boltResult', JSON.stringify(data));
    }
  };

  const clearResult = () => {
    setResultState(null);
    localStorage.removeItem('boltResult');
  };

  return (
    <ResultContext.Provider
      value={{ result, setResult, clearResult, isLoading, setIsLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
}

export function useResult() {
  const ctx = useContext(ResultContext);
  if (!ctx) throw new Error('useResult must be used within ResultProvider');
  return ctx;
}
