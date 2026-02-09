'use client';

function Main({ children }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      {children}
    </div>
  );
}

export default Main;
