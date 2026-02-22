export default function WebsiteInfoSection() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden border-b border-border-light dark:border-border-dark">
      <div className="absolute inset-0 blueprint-bg -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark -z-10"></div>
      <div className="max-w-4xl mx-auto px-6 text-center reveal active">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          Mission Critical Excellence
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
          About Bolt Calculator
        </h1>
        <div className="space-y-12 text-left bg-surface-light dark:bg-surface-dark/50 p-8 md:p-12 rounded-3xl border border-border-light dark:border-border-dark shadow-2xl backdrop-blur-sm">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white font-bold">
                  Bolt Calculator
                </strong>{' '}
                is a smart engineering platform built to take the guesswork out
                of bolt selection. Developed by{' '}
                <strong className="text-primary">DVN Research Group</strong>,
                the platform uses intelligent algorithms to determine the most
                suitable bolt for a given application based on inputs such as
                load, operating conditions, and design constraints.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                By translating complex mechanical design logic into a simple,
                intuitive interface, Bolt Calculator enables engineers to make
                faster, more reliable decisions without relying on manual
                calculations or static reference tables. The system evaluates
                strength, safety margins, and standard compliance to deliver
                results you can trust.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
              <span className="material-symbols-outlined">speed</span>
            </div>
            <div>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                Designed for modern engineering workflows, Bolt Calculator
                supports efficient, data-driven design across industries
                including automotive, manufacturing, and heavy engineering. Our
                mission is to build practical digital tools that enhance
                engineering accuracy, speed, and confidence—right from the
                browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
