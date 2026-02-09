'use client';

import { useState, useEffect } from 'react';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has dark mode preference
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  const handleExportPDF = () => {
    // TODO: Implement PDF export functionality
    console.log('Export PDF clicked');
  };

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-primary p-1.5 sm:p-2 rounded-lg text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-xl sm:text-2xl">
              settings_input_component
            </span>
          </div>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-tight">
              BoltCalc <span className="text-slate-500 font-normal">Pro</span>
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="material-symbols-outlined text-yellow-400 text-xl sm:text-2xl">
                light_mode
              </span>
            ) : (
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                dark_mode
              </span>
            )}
          </button>
          <button
            onClick={handleExportPDF}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            <span className="hidden xs:inline">Export PDF</span>
            <span className="xs:hidden">PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
