export default function LiveAnalysisSection() {
  return (
    <section
      className="py-32 border-y border-border-light dark:border-border-dark relative overflow-hidden"
      id="analysis-section"
    >
      <div className="absolute inset-0 schematic-bg opacity-5 -z-10"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal bg-surface-dark rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-700/50">
          <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center px-6 gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50 hover:bg-amber-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50 hover:bg-emerald-500 transition-colors cursor-pointer"></div>
            </div>
            <div className="mx-auto text-[11px] font-mono text-slate-400 tracking-widest uppercase opacity-60">
              BOLTCALC_PRO_SYSTEM_ANALYSIS_V4.0
            </div>
          </div>
          <div className="p-12 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-emerald-400">
                <span className="material-symbols-outlined animate-pulse">
                  bolt
                </span>
                <span className="text-sm font-bold tracking-widest uppercase">
                  Live Telemetry Analysis
                </span>
              </div>
              <div className="space-y-5">
                <div className="h-14 bg-slate-900/80 rounded-xl border border-slate-700/50 flex items-center justify-between px-6 group hover:border-primary/50 transition-colors">
                  <span className="text-slate-400 text-sm font-medium">
                    Clamping Force (Fc)
                  </span>
                  <div className="text-right">
                    <span
                      className="text-white font-mono text-lg counter-animate"
                      data-target="12450"
                    >
                      0
                    </span>
                    <span className="text-slate-500 font-mono text-sm ml-1">
                      N
                    </span>
                  </div>
                </div>
                <div className="h-14 bg-slate-900/80 rounded-xl border border-slate-700/50 flex items-center justify-between px-6 group hover:border-primary/50 transition-colors">
                  <span className="text-slate-400 text-sm font-medium">
                    Tensile Stress (σ)
                  </span>
                  <div className="text-right">
                    <span
                      className="text-white font-mono text-lg counter-animate"
                      data-target="482"
                    >
                      0
                    </span>
                    <span className="text-white font-mono text-lg">.2</span>
                    <span className="text-slate-500 font-mono text-sm ml-1">
                      MPa
                    </span>
                  </div>
                </div>
                <div className="h-16 bg-emerald-500/10 rounded-xl border border-emerald-500/30 flex items-center justify-between px-6">
                  <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">
                    Safety Margin
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold text-lg">
                      PASS
                    </span>
                    <span className="text-emerald-500/80 font-mono text-sm font-bold">
                      (+
                      <span className="counter-animate" data-target="12">
                        0
                      </span>
                      .4%)
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                Real-time visualization of joint response under dynamic loading
                conditions, verified against VDI 2230 guidelines.
              </p>
            </div>
            <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-700/30 aspect-4/3 flex flex-col relative overflow-hidden group">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Load-Strain Curve
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                  <div className="text-[10px] font-mono text-primary uppercase">
                    Recording...
                  </div>
                </div>
              </div>
              <div className="grow relative">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 400 200"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0%"
                      x2="0%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#2563eb"
                        stopOpacity="0.2"
                      ></stop>
                      <stop
                        offset="100%"
                        stopColor="#2563eb"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <line
                    stroke="#1e293b"
                    strokeDasharray="4"
                    strokeWidth="1"
                    x1="0"
                    x2="400"
                    y1="0"
                    y2="0"
                  ></line>
                  <line
                    stroke="#1e293b"
                    strokeDasharray="4"
                    strokeWidth="1"
                    x1="0"
                    x2="400"
                    y1="50"
                    y2="50"
                  ></line>
                  <line
                    stroke="#1e293b"
                    strokeDasharray="4"
                    strokeWidth="1"
                    x1="0"
                    x2="400"
                    y1="100"
                    y2="100"
                  ></line>
                  <line
                    stroke="#1e293b"
                    strokeDasharray="4"
                    strokeWidth="1"
                    x1="0"
                    x2="400"
                    y1="150"
                    y2="150"
                  ></line>
                  <path
                    className="chart-path-area transition-opacity duration-1000 opacity-0 group-hover:opacity-100"
                    d="M0,200 L0,150 L50,140 L100,100 L150,90 L200,60 L250,55 L300,30 L350,25 L400,10 L400,200 Z"
                    fill="url(#chartGradient)"
                  ></path>
                  <path
                    className="chart-path"
                    d="M0,150 L50,140 L100,100 L150,90 L200,60 L250,55 L300,30 L350,25 L400,10"
                    fill="none"
                    stroke="#2563eb"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></path>
                  <circle
                    className="reveal stagger-delay-1"
                    cx="200"
                    cy="60"
                    fill="#2563eb"
                    r="4"
                  ></circle>
                  <circle
                    className="reveal stagger-delay-2"
                    cx="300"
                    cy="30"
                    fill="#2563eb"
                    r="4"
                  ></circle>
                </svg>
              </div>
              <div className="mt-4 flex justify-between text-[9px] font-mono text-slate-500 uppercase">
                <span>Min Load</span>
                <span>Nominal</span>
                <span>Ultimate Yield</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
