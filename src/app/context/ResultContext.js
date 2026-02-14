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

function initializeResultHistory() {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('boltResultHistory');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to parse stored result history:', error);
      localStorage.removeItem('boltResultHistory');
    }
  }
  return [];
}

export function ResultProvider({ children }) {
  const [userInput, setUserInput] = useState({});
  const [result, setResultState] = useState(initializeResult);
  const [isLoading, setIsLoading] = useState(false);
  const [resultHistory, setResultHistory] = useState(initializeResultHistory);
  const [historyIndex, setHistoryIndex] = useState();

  const setResult = (data, userInputData) => {
    console.log(userInputData);
    // for showing in results
    setResultState(data);
    if (data) {
      localStorage.setItem('boltResult', JSON.stringify(data));
    }

    // for history
    const localData = { userInputData, ...data };

    if (localData) {
      setResultHistory((prevHistory) => {
        const updatedHistory = [...prevHistory, localData];
        // Keep only the last 5 elements
        if (updatedHistory.length > 5) {
          updatedHistory.shift(); // Remove the oldest (first) element
        }
        localStorage.setItem(
          'boltResultHistory',
          JSON.stringify(updatedHistory),
        );
        return updatedHistory;
      });
    }
  };

  const clearResult = () => {
    setResultState(null);
    localStorage.removeItem('boltResult');
  };

  return (
    <ResultContext.Provider
      value={{
        userInput,
        setUserInput,
        result,
        setResult,
        clearResult,
        isLoading,
        setIsLoading,
        resultHistory,
        historyIndex,
        setHistoryIndex,
      }}
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
