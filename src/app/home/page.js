'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function HomePage() {
  // Declare animateCounters before useEffect hooks so it can be used
  function animateCounters() {
    const counters = document.querySelectorAll('.counter-animate');
    counters.forEach((counter) => {
      if (counter.classList.contains('animated')) return;
      counter.classList.add('animated');
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.innerText = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.innerText = Math.floor(current).toLocaleString();
        }
      }, stepTime);
    });
  }

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.id === 'analysis-section') {
            animateCounters();
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    const analysisSection = document.getElementById('analysis-section');
    if (analysisSection) observer.observe(analysisSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e) => {
      const container = document.querySelector('.parallax-container');
      if (!container) return;
      const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
      container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/20">
        <NavBar
          variant="horizontal"
          icon="build"
          brandName="Bolt"
          brandHighlight="Calculator"
        />

        {/* Hero Section */}
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
                Bolt Calculator determines the optimal bolt size and grade for
                your application based on applied loads and design requirements.
                It simplifies bolt selection by combining core engineering
                calculations with design safety principles, while advanced
                algorithms enhance accuracy and reliability
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
                {/* <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group">
                  <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">
                    play_circle
                  </span>
                  Watch Demo
                </button> */}
              </div>
              {/* <div className="flex items-center gap-8 pt-4 grayscale opacity-60">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Compliant with:
                </span>
                <span className="font-mono text-sm font-bold">ASME B1.1</span>
                <span className="font-mono text-sm font-bold">ISO 898-1</span>
                <span className="font-mono text-sm font-bold">VDI 2230</span>
              </div> */}
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
              {/* Floating Badges */}
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
              {/* <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-border-light dark:border-border-dark animate-stagger-2 hidden lg:block">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    analytics
                  </span>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">
                      Factor of Safety
                    </div>
                    <div className="text-sm font-bold">2.45 n</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-24 bg-slate-50 dark:bg-slate-900/50"
          id="features"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Professional-Grade Capabilities
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Everything you need to ensure the reliability of bolted joints
                in aerospace, automotive, and industrial applications.
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
                  lengths, and clamp length ratios based on standard bolt
                  profiles.
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

        {/* Live Analysis Demo Section */}
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
                    Real-time visualization of joint response under dynamic
                    loading conditions, verified against VDI 2230 guidelines.
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
      </div>
      <Footer showSocialLinks={true} />
    </>
  );
}
