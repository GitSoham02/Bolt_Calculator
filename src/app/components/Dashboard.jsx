'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Dashboard({
  isMobileMenuOpen = false,
  setIsMobileMenuOpen = null,
}) {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark'),
  );

  const closeMobileMenu = () => {
    if (setIsMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Desktop Sidebar + Mobile Overlay */}
      <aside
        className={`w-64 border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex flex-col overflow-y-auto transition-all duration-300 ${
          isMobileMenuOpen
            ? 'fixed inset-0 z-50 mt-0 lg:mt-16 lg:static lg:h-screen'
            : 'hidden lg:flex lg:mt-16 lg:h-screen lg:relative'
        }`}
      >
        {/* Close button for mobile */}
        <div className="p-4 lg:hidden flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl">
                hardware
              </span>
            </div>
            <span className="font-bold text-lg tracking-tight">
              BoltCalc<span className="text-primary">Pro</span>
            </span>
          </div>
          <button
            type="button"
            className="material-icons-round text-slate-600 dark:text-slate-400 lg:hidden"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            close
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
            Navigation
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
            href="/home"
            onClick={closeMobileMenu}
          >
            <span className="material-icons-round text-[20px]">home</span>
            Home
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
            href="/about"
            onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
          >
            <span className="material-icons-round text-[20px]">bolt</span>
            Load Calculator
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
            href="/coming_soon"
            onClick={closeMobileMenu}
          >
            <span className="material-icons-round text-[20px]">
              architecture
            </span>
            Torque Specs
          </Link>
          <Link
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              pathname === '/history'
                ? 'bg-primary/10 text-primary border-r-2 border-primary'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            href="/history"
            onClick={closeMobileMenu}
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
          onClick={closeMobileMenu}
        >
          <span className="material-icons-round text-[20px]">menu_book</span>
          ASTM Standards
        </Link>
        <Link
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
          href="/coming_soon"
          onClick={closeMobileMenu}
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
    </>
  );
}
