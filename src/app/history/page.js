'use client';

import { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import NavBar from '../components/NavBar';
import { useResult } from '../context/ResultContext';
// import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

export default function HistoryPage() {
  const router = useRouter();
  const [historyItems, setHistoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { setHistoryIndex } = useResult();

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

    setHistoryIndex(actualIndex);
    router.push('/history/report');
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
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex fixed inset-0 m-0 p-0 overflow-hidden">
      <Dashboard />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <NavBar />
        <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Calculation History
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Review and manage past industrial bolt load calculations
              </p>
            </div>
          </div>

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
              historyItems.map((item, index) => {
                // const status = getStatus(
                //   item.obtainedValues.tensileStress,
                //   item.limits.tensileStress,
                // );
                // const statusStyle = getStatusStyle(
                //   item.obtainedValues.tensileStress,
                //   item.limits.tensileStress,
                // );
                // const safetyFactor = getSafetyFactor(
                //   item.limits.tensileStress,
                //   item.obtainedValues.tensileStress,
                // );

                return (
                  <div
                    key={index}
                    className="group bg-white dark:bg-[#2a1d17] p-6 rounded-xl border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold dark:text-white mb-1">
                          Selected Bolt - {item.curBolt.designation}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                          <span className="material-symbols-outlined text-base">
                            schedule
                          </span>
                          {formatDate(item.userInputData.calculatedAt)}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-white/5">
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                              Plate Thickness
                            </p>
                            <p className="text-sm font-semibold dark:text-slate-200">
                              {item.userInputData.plateThickness.toFixed(2)} mm
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                              External Load
                            </p>
                            <p className="text-sm font-semibold dark:text-slate-200">
                              {item.userInputData.externalLoad} N
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                              Grade
                            </p>
                            <p className="text-sm font-semibold dark:text-slate-200">
                              {item.curBoltProperty.className}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                              Bolt Diameter
                            </p>
                            <p className="text-sm font-semibold dark:text-slate-200">
                              {item.curBolt.nominalDiameter} mm
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end">
                        <button
                          type="button"
                          className={`w-full md:w-auto px-6 py-2.5 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-bold flex items-center justify-center gap-2`}
                          onClick={() => handleViewReport(index)}
                        >
                          View Report
                          <span className="material-symbols-outlined text-base">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
