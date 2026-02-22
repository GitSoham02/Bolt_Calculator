import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-2 pb-20 overflow-hidden min-h-[90vh] flex items-center mt-10">
      <div className="absolute inset-0 engineering-grid -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Trusted by 500+ Engineering Firms
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Precision Bolt Load Analysis for{' '}
            <span className="text-primary">Critical Engineering</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Bolt Calculator determines the optimal bolt size and grade for your
            application based on applied loads and design requirements. It
            simplifies bolt selection by combining core engineering calculations
            with design safety principles, while advanced algorithms enhance
            accuracy and reliability
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/input"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group btn-glow"
            >
              Get Started
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        <div className="relative parallax-container animate-float hidden md:block">
          <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow"></div>
          <div className="relative bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden aspect-square flex items-center justify-center p-12 transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 schematic-bg opacity-30"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <span
                  className="material-symbols-outlined text-primary/40 leading-none select-none"
                  style={{ fontSize: '140px', lineHeight: '1' }}
                >
                  settings_input_component
                </span>
                <span
                  className="material-symbols-outlined text-slate-300 dark:text-slate-700 -mt-24 -ml-16 rotate-45 select-none transition-transform duration-700 hover:rotate-90"
                  style={{ fontSize: '100px', lineHeight: '1' }}
                >
                  construction
                </span>
                <div className="absolute inset-0 flex flex-col justify-between p-6 font-mono text-[11px] text-primary/60 uppercase tracking-widest">
                  <div className="flex justify-between">
                    <span>[X: 12.44]</span>
                    <span>[Y: 88.10]</span>
                  </div>
                  <div className="flex justify-between">
                    <span>[Z: 04.92]</span>
                    <span>[S: 1.50]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-border-light dark:border-border-dark animate-stagger-1 hidden lg:block">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-500">
                check_circle
              </span>
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">
                  Status
                </div>
                <div className="text-sm font-bold">Verified Load</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
