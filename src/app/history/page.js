'use client';

import { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import NavBar from '../components/NavBar';
import { useResult } from '../context/ResultContext';
// import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import TitleDesc from '../components/history/TitleDesc';
import HistoryItem from '../components/history/HistoryItem';

export default function HistoryPage() {
  const router = useRouter();
  const [historyItems, setHistoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { setHistoryIndex, isMobileMenuOpen, setIsMobileMenuOpen } =
    useResult();

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('boltResultHistory');
      if (!storedData) {
        setHistoryItems([]);
        setIsLoading(false);
        return;
      }

      const parsed = JSON.parse(storedData);
      if (!Array.isArray(parsed)) {
        setErrorMessage('Saved history data is invalid.');
        setHistoryItems([]);
        setIsLoading(false);
        return;
      }

      setHistoryItems(parsed.slice(-5).reverse());
      setIsLoading(false);
    } catch (error) {
      console.error('[HistoryPage] Failed to load history:', error);
      setErrorMessage('Failed to load calculation history.');
      setHistoryItems([]);
      setIsLoading(false);
    }
  }, []);

  function handleViewReport(index) {
    // Calculate the actual index in localStorage (original array)
    const storedData = localStorage.getItem('boltResultHistory');
    const boltHistoryData = JSON.parse(storedData) || [];
    const actualIndex = boltHistoryData.length - 1 - index;

    // Pass index as URL parameter instead of context
    router.push(`/history/report?index=${actualIndex}`);
  }

  // const getStatus = (tensileStress, limit) => {
  //   const utilization = (tensileStress / limit) * 100;
  //   if (utilization > 80) return 'Marginal';
  //   return 'Safe';
  // };

  // const getStatusStyle = (tensileStress, limit) => {
  //   const utilization = (tensileStress / limit) * 100;
  //   if (utilization > 80) {
  //     return 'bg-primary/10 text-primary';
  //   }
  //   return 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400';
  // };

  // const getSafetyFactor = (limit, tensileStress) => {
  //   return (limit / tensileStress).toFixed(2);
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col fixed inset-0 m-0 p-0 overflow-hidden">
      <NavBar />
      <div className="flex flex-row flex-1 min-h-0 p-0 m-0">
        {/* Desktop Sidebar - Always visible on lg+ screens */}
        <aside className="hidden lg:flex lg:w-64 border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex-col overflow-y-auto">
          <Dashboard />
        </aside>

        {/* Mobile Overlay Sidebar - Only visible when menu is open on mobile */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu */}
            <aside className="relative w-64 h-full bg-surface-light dark:bg-surface-dark flex flex-col overflow-y-auto">
              <Dashboard
                isMobileMenuOpen={true}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </aside>
          </div>
        )}

        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto scrollbar-hide">
          <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full">
            <TitleDesc />

            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-12">
                  <p className="text-slate-500 dark:text-slate-400">
                    Loading history...
                  </p>
                </div>
              ) : errorMessage ? (
                <div className="text-center py-12">
                  <p className="text-slate-500 dark:text-slate-400">
                    {errorMessage}
                  </p>
                </div>
              ) : historyItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-500 dark:text-slate-400">
                    No calculation history available
                  </p>
                </div>
              ) : (
                historyItems.map((item, index) => (
                  <HistoryItem
                    key={index}
                    item={item}
                    index={index}
                    formatDate={formatDate}
                    onViewReport={handleViewReport}
                  />
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
