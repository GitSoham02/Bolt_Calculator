export default function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Professional-Grade Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Everything you need to ensure the reliability of bolted joints in
            aerospace, automotive, and industrial applications.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="reveal stagger-delay-1 bg-surface-light dark:bg-surface-dark p-10 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">
                view_in_ar
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Geometry Analysis
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Automatic calculation of tensile stress areas, engaged thread
              lengths, and clamp length ratios based on standard bolt profiles.
            </p>
          </div>
          <div className="reveal stagger-delay-2 bg-surface-light dark:bg-surface-dark p-10 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">
                fact_check
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Safety Factor Verification
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Comprehensive validation against yield, fatigue, and stripping
              limits. Real-time visual feedback on joint integrity.
            </p>
          </div>
          <div className="reveal stagger-delay-3 bg-surface-light dark:bg-surface-dark p-10 rounded-2xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">
                inventory_2
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Material Library
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Extensive database of ISO, ASTM, and SAE material properties
              including thermal expansion and young&apos;s modulus data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
