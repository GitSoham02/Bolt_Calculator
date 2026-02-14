'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

function NavBar({
  variant = 'sidebar',
  icon = 'settings_input_component',
  brandName = 'Bolt',
  brandHighlight = 'Calculator',
  showSocialLinks = false,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark'),
  );

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode((prev) => !prev);
  };

  // Horizontal navbar variant for marketing pages
  if (variant === 'horizontal') {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark md:bg-surface-light/80 md:dark:bg-surface-dark/80 backdrop-blur-none md:backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-start md:justify-between w-full">
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {icon}
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight whitespace-nowrap">
              {brandName}
              <span className="text-primary">{brandHighlight}</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400 shrink-0">
            <Link className="hover:text-primary transition-colors" href="/home">
              Home
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md shadow-primary/20 btn-glow transform hover:scale-105"
              href="/input"
            >
              Launch Calculator
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10">
        <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="bg-primary p-1.5 sm:p-2 rounded-lg text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                settings_input_component
              </span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-tight">
                Bolt{' '}
                <span className="text-slate-500 font-normal">Calculator</span>
              </h1>
            </div>
          </Link>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="sm:hidden material-icons-round text-slate-600 dark:text-slate-400"
              aria-label="Open menu"
            >
              menu
            </button>
          </div>
        </div>
      </header>

      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden fixed inset-0 z-50 bg-black/50`}
        onClick={closeMobileMenu}
      >
        <aside
          className="w-64 h-full bg-surface-light dark:bg-surface-dark flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex items-center justify-between">
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
              className="material-icons-round text-slate-600 dark:text-slate-400"
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
              href="/"
              onClick={closeMobileMenu}
            >
              <span className="material-icons-round text-[20px]">home</span>
              Home
            </Link>

            <div className="pt-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
              Calculators
            </div>
            <Link
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary border-r-2 border-primary"
              href="/input"
              onClick={closeMobileMenu}
            >
              <span className="material-icons-round text-[20px]">bolt</span>
              Load Calculator
            </Link>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
              href="#"
            >
              <span className="material-icons-round text-[20px]">
                architecture
              </span>
              Torque Specs
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
              href="#"
            >
              <span className="material-icons-round text-[20px]">history</span>
              History
            </a>

            <div className="pt-8 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
              Library
            </div>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
              href="#"
            >
              <span className="material-icons-round text-[20px]">
                menu_book
              </span>
              ASTM Standards
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded-md"
              href="#"
            >
              <span className="material-icons-round text-[20px]">
                inventory_2
              </span>
              Material DB
            </a>
          </nav>

          <div className="p-4 border-t border-border-light dark:border-border-dark">
            <button
              type="button"
              className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
              onClick={toggleDarkMode}
            >
              <span className="material-icons-round text-[20px]">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
              Theme Toggle
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

export default NavBar;
