'use client';

import Link from 'next/link';

export default function Footer({
  icon = 'build',
  brandName = 'Bolt',
  brandHighlight = 'Calculator',
  tagline = 'The industrial standard for precision bolt load verification.',
  showSocialLinks = false,
}) {
  return (
    <footer className="w-full bg-white dark:bg-background-dark py-20 border-t border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-xl">
                  {icon}
                </span>
              </div>
              <span className="font-bold text-2xl tracking-tight">
                {brandName}
                <span className="text-primary">{brandHighlight}</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-sm">
              {tagline}
            </p>
            {showSocialLinks && (
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-300"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    share
                  </span>
                </a>
                <a
                  className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all duration-300"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    mail
                  </span>
                </a>
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="text-slate-500 dark:text-slate-400 text-sm space-y-4 font-medium">
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="/home"
                >
                  <span className="material-symbols-outlined text-xs">
                    home
                  </span>{' '}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="/input"
                >
                  <span className="material-symbols-outlined text-xs">
                    bolt
                  </span>{' '}
                  Load calculator
                </Link>
              </li>
              {/* <li>
                <a
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xs">
                    library_books
                  </span>{' '}
                  Standards Library
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="text-slate-500 dark:text-slate-400 text-sm space-y-4 font-medium">
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="/about"
                >
                  <span className="material-symbols-outlined text-xs">
                    corporate_fare
                  </span>{' '}
                  About Us
                </Link>
              </li>
              {/* <li>
                <a
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xs">
                    gavel
                  </span>{' '}
                  Terms of Service
                </a>
              </li> */}
              <li>
                <a
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xs">
                    support_agent
                  </span>{' '}
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400 font-medium">
          <p>
            © 2024 BoltCalculator Engineering Suite. All rights reserved.
            Registered ISO-9001 Partner.
          </p>
          <div className="flex gap-8">
            <a
              className="hover:text-primary transition-colors uppercase tracking-widest"
              href="#"
            >
              Privacy
            </a>
            <a
              className="hover:text-primary transition-colors uppercase tracking-widest"
              href="#"
            >
              Security
            </a>
            <a
              className="hover:text-primary transition-colors uppercase tracking-widest"
              href="#"
            >
              SLA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
