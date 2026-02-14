'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Dashboard() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark'),
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode((prev) => !prev);
  };

  return (
    <aside className="mt-16 w-64 border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hidden lg:flex flex-col h-screen overflow-y-auto">
      {/* <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-2xl">
            hardware
          </span>
        </div>
        <span className="font-bold text-lg tracking-tight">
          Bolt<span className="text-primary">Calculator</span>
        </span>
      </div> */}

      <nav className="flex-1 px-4 py-4 space-y-1">
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
          Navigation
        </div>
        <Link
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
          href="/home"
        >
          <span className="material-icons-round text-[20px]">home</span>
          Home
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
          href="/about"
        >
          <span className="material-symbols-outlined text-[20px]">
            groups_3
          </span>
          About
        </Link>

        <div className="pt-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
          Calculators
        </div>
        <Link
          className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            pathname === '/input'
              ? 'bg-primary/10 text-primary border-r-2 border-primary'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          href="/input"
        >
          <span className="material-icons-round text-[20px]">bolt</span>
          Load Calculator
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
          href="/coming_soon"
        >
          <span className="material-icons-round text-[20px]">architecture</span>
          Torque Specs
        </Link>
        <Link
          className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            pathname === '/history'
              ? 'bg-primary/10 text-primary border-r-2 border-primary'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          href="/history"
        >
          <span className="material-icons-round text-[20px]">history</span>
          History
        </Link>

        {/* <div className="pt-8 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
          Library
        </div>
        <Link
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
          href="/coming_soon"
        >
          <span className="material-icons-round text-[20px]">menu_book</span>
          ASTM Standards
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
          href="/coming_soon"
        >
          <span className="material-icons-round text-[20px]">inventory_2</span>
          Material DB
        </Link> */}
      </nav>

      <div className="p-4 border-t border-border-light dark:border-border-dark">
        <button
          type="button"
          className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
          onClick={toggleDarkMode}
        >
          <span className="material-icons-round text-[20px] dark:hidden">
            dark_mode
          </span>
          <span className="material-icons-round text-[20px] hidden dark:block">
            light_mode
          </span>
          Theme Toggle
        </button>
      </div>
    </aside>
  );
}
