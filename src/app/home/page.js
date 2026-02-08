import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between w-full">
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                hardware
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight whitespace-nowrap">
              BoltCalc<span className="text-primary">Pro</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400 shrink-0">
            <a
              className="hover:text-primary transition-colors"
              href="#features"
            >
              Features
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#standards"
            >
              Standards
            </a>
            <a className="hover:text-primary transition-colors" href="#about">
              About
            </a>
            <Link
              className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-primary/20"
              href="/input"
            >
              Launch Calculator
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center mt-20">
        <div className="absolute inset-0 engineering-grid -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Trusted by 500+ Engineering Firms
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
              Precision Bolt Load Analysis for{' '}
              <span className="text-primary">Critical Engineering</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              A comprehensive suite for structural integrity verification.
              Calculate torque specs, safety factors, and material stresses with
              ASME &amp; ISO compliant algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/input"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group"
              >
                Get Started Free
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4 grayscale opacity-60">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Compliant with:
              </span>
              <span className="font-mono text-sm font-bold">ASME B1.1</span>
              <span className="font-mono text-sm font-bold">ISO 898-1</span>
              <span className="font-mono text-sm font-bold">VDI 2230</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-3xl shadow-2xl overflow-hidden aspect-square flex items-center justify-center p-8">
              <div className="absolute inset-0 schematic-bg opacity-30"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-[160px] text-primary/40 leading-none">
                    settings_input_component
                  </span>
                  <span className="material-symbols-outlined text-[120px] text-slate-300 dark:text-slate-700 -mt-16 -ml-12 rotate-45">
                    construction
                  </span>
                  <div className="absolute inset-0 flex flex-col justify-between p-4 font-mono text-[10px] text-primary/60 uppercase">
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Professional-Grade Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Everything you need to ensure the reliability of bolted joints in
              aerospace, automotive, and industrial applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  view_in_ar
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Geometry Analysis
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Automatic calculation of tensile stress areas, engaged thread
                lengths, and clamp length ratios based on standard bolt
                profiles.
              </p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                <span className="material-symbols-outlined text-3xl">
                  fact_check
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Safety Factor Verification
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Comprehensive validation against yield, fatigue, and stripping
                limits. Real-time visual feedback on joint integrity.
              </p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                <span className="material-symbols-outlined text-3xl">
                  inventory_2
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Material Library
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Extensive database of ISO, ASTM, and SAE material properties
                including thermal expansion and young&apos;s modulus data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Analysis Demo Section */}
      <section className="py-24 border-y border-border-light dark:border-border-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-surface-dark rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
            <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/30"></div>
              </div>
              <div className="mx-auto text-[10px] font-mono text-slate-500">
                BOLTCALC_PRO_CALCULATOR_UI.EXE
              </div>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-emerald-400">
                  <span className="material-symbols-outlined">bolt</span>
                  <span className="text-xs font-bold tracking-widest uppercase">
                    Live Analysis
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="h-10 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center justify-between px-4">
                    <span className="text-slate-400 text-xs">
                      Clamping Force (Fc)
                    </span>
                    <span className="text-white font-mono text-sm">
                      12,450 N
                    </span>
                  </div>
                  <div className="h-10 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center justify-between px-4">
                    <span className="text-slate-400 text-xs">
                      Tensile Stress
                    </span>
                    <span className="text-white font-mono text-sm">
                      482.2 MPa
                    </span>
                  </div>
                  <div className="h-12 bg-emerald-500/20 rounded-lg border border-emerald-500/30 flex items-center justify-between px-4">
                    <span className="text-emerald-400 text-xs font-bold">
                      Safety Margin
                    </span>
                    <span className="text-emerald-400 font-bold text-sm">
                      PASS (+12.4%)
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700/50 flex items-center justify-center">
                <span className="material-symbols-outlined text-[80px] text-primary animate-pulse">
                  monitoring
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark py-12 border-t border-border-light dark:border-border-dark">
        <div className="max-w-full mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-1 rounded-lg">
                  <span className="material-symbols-outlined text-white text-xl">
                    hardware
                  </span>
                </div>
                <span className="font-bold text-lg">
                  BoltCalc<span className="text-primary">Pro</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm">
                Standardizing bolt load calculations for modern engineering.
                Reliable, accurate, and industry-compliant.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Resources</h4>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    API Reference
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Standards Library
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Company</h4>
              <ul className="text-slate-500 text-sm space-y-2">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2024 BoltCalcPro Engineering Suite. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-primary" href="#">
                Privacy
              </a>
              <a className="hover:text-primary" href="#">
                Security
              </a>
              <a className="hover:text-primary" href="#">
                SLA
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
