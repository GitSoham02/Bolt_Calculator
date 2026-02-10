'use client';

import { useEffect, useState } from 'react';

function ProgressBar({ done }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    async function runProgress() {
      if (done) {
        // Backend finished → force completion
        setProgress(100);

        // Hide after short delay
        const hideTimer = setTimeout(() => {
          setVisible(false);
        }, 500);

        return () => clearTimeout(hideTimer);
      }
    }

    // Fake progress timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 93) return prev; // stop at 93%
        return prev + 1;
      });
    }, 80);

    // Elapsed time tracker
    const elapsedInterval = setInterval(() => {
      setElapsed((prev) => prev + 0.1);
    }, 100);

    runProgress();
    return () => {
      clearInterval(interval);
      clearInterval(elapsedInterval);
    };
  }, [done]);

  if (!visible) return null;

  // Format elapsed time (MM:SS.S)
  const formatElapsed = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = (seconds % 60).toFixed(1);
    return `${String(mins).padStart(2, '0')}:${String(parseFloat(secs)).padStart(4, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className="relative bg-white dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400 mb-1">
                System Engine
              </span>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Calculation Progress
              </h3>
            </div>
            <div className="text-right">
              <span className="font-mono text-2xl font-bold text-blue-500 dark:text-blue-400">
                {progress}
                <span className="text-sm opacity-50">%</span>
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-6">
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="progress-bar-shimmer absolute inset-0 w-full h-full"></div>
            </div>
          </div>

          {/* Status Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-blue-500 dark:text-blue-400 animate-spin text-xl">
                  settings
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                  Analyzing geometric constraints...
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                  MODULE: STRESS_VECTOR_ANALYSIS_V2
                </p>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Elapsed Time
                </span>
                <span className="text-sm font-mono font-medium text-slate-600 dark:text-slate-300">
                  {formatElapsed(elapsed)}
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  Threads Active
                </span>
                <span className="text-sm font-mono font-medium text-slate-600 dark:text-slate-300">
                  12 Parallel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-blue-500 to-blue-500/20"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
