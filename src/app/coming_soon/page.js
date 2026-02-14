import Image from 'next/image';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="coming-soon-grid min-h-screen flex flex-col items-center justify-center p-6 text-slate-800 font-sans relative overflow-x-hidden">
      <header className="w-full max-w-4xl text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-nav text-primary text-xs font-bold tracking-wider mb-6 border border-techBlue-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-techBlue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-techBlue-600"></span>
          </span>
          SYSTEM EVOLUTION IN PROGRESS
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Advanced Simulation Engine:{' '}
          <span className="text-techBlue-600">Under Development</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Advancing industrial precision with next-generation mechanical
          structural modeling and automated load calculation engines.
        </p>
      </header>

      <main className="w-full max-w-3xl relative z-10 mb-32">
        <div className="tech-card rounded-2xl overflow-hidden border border-slate-100 p-2">
          <div className="relative bg-white rounded-xl border border-slate-100 p-8 md:p-12 flex flex-col items-center justify-center">
            <div className="corner-marker corner-tl"></div>
            <div className="corner-marker corner-tr"></div>
            <div className="corner-marker corner-bl"></div>
            <div className="corner-marker corner-br"></div>

            <span className="absolute top-8 left-8 text-[10px] md:text-xs font-mono text-slate-400 tracking-widest uppercase ml-4 mt-2">
              PRELOAD VECTOR_91
            </span>

            <div className="relative w-full max-w-[400px] flex justify-center items-center my-6">
              <Image
                alt="Technical line drawing of a circular mechanical flange with bolts, isometric view, blue blueprint style lines on a white background, clean vector aesthetic."
                className="w-full h-auto object-contain opacity-90"
                width={400}
                height={400}
                src="/coming_soon.png"
              />
              <div className="absolute top-1/2 left-1/2 translate-x-0 -translate-y-1/2 dev-badge bg-blue-500 text-white px-3 py-1 rounded border-2 border-white font-bold text-xs md:text-sm tracking-widest whitespace-nowrap z-20 select-none">
                UNDER DEVELOPMENT
              </div>
            </div>

            <span className="absolute bottom-8 right-8 text-[10px] md:text-xs font-mono text-slate-400 tracking-widest uppercase mr-4 mb-2">
              STRESS_DISTRIBUTION_MAP
            </span>
          </div>

          <div className="px-8 pb-8 pt-4">
            <div className="flex items-center mb-2 justify-start gap-4">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                Development Status
              </span>
              <span className="text-xs font-mono text-techBlue-600 font-bold">
                75% Complete
              </span>
            </div>
            <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-visible">
              <div
                className="absolute top-0 left-0 h-full bg-techBlue-500 rounded-full"
                style={{ width: '75%' }}
              ></div>
              <div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: '75%' }}
              >
                <div className="relative -top-7 -left-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded font-mono shadow-lg">
                  75%
                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-800"></div>
                </div>
                <div className="w-3 h-3 bg-white border-2 border-techBlue-500 rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-5xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t md:border-t-0 border-slate-200 pt-8 md:pt-0">
          <div className="px-4 text-center">
            <h3 className="text-techBlue-600 font-bold tracking-widest mb-2 uppercase text-lg">
              Precision
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              High-fidelity vector calculations ensuring micron-level accuracy
              in simulations.
            </p>
          </div>
          <div className="px-4 text-center pt-8 md:pt-0">
            <h3 className="text-techBlue-600 font-bold tracking-widest mb-2 uppercase text-lg">
              Standards
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Compliant with ISO 9001 and latest industrial safety protocols.
            </p>
          </div>
          <div className="px-4 text-center pt-8 md:pt-0">
            <h3 className="text-techBlue-600 font-bold tracking-widest mb-2 uppercase text-lg">
              Processing
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Cloud-native architecture enabling real-time structural analysis.
            </p>
          </div>
          <div className="px-4 text-center pt-8 md:pt-0">
            <h3 className="text-techBlue-600 font-bold tracking-widest mb-2 uppercase text-lg">
              Integrity
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              End-to-end encryption for proprietary model data protection.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link
            className="inline-flex items-center text-slate-400 hover:text-primary transition-colors duration-200 text-sm font-medium group"
            href="/input"
          >
            <svg
              className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            Return to Dashboard
          </Link>
        </div>
      </footer>
    </div>
  );
}
