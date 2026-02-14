'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProgressBar from '../components/ProgressBar';
import NavBar from '../components/NavBar';
import Dashboard from '../components/Dashboard';
import InfoTooltip from '../components/InfoTooltip';
import { useResult } from '../context/ResultContext';
import { useState } from 'react';

export default function InputPage() {
  const router = useRouter();
  const { userInput, setUserInput, setResult, setIsLoading, isLoading } =
    useResult();
  const [formData, setFormData] = useState({
    plateThickness: '',
    engagedThreadLength: '',
    externalLoad: '',
    preLoad: '',
    lateralLoad: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmitForm(e) {
    e.preventDefault();
    setIsLoading(true);

    // Convert string values to numbers for API
    const numericData = {
      plateThickness: parseFloat(formData.plateThickness),
      engagedThreadLength: parseFloat(formData.engagedThreadLength),
      externalLoad: parseFloat(formData.externalLoad),
      preLoad: parseFloat(formData.preLoad),
      lateralLoad: parseFloat(formData.lateralLoad),
    };
    const userData = { ...numericData, calculatedAt: Date.now() };
    console.log(userData);
    setUserInput(userData);

    try {
      const res = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(numericData),
      });

      if (!res.ok) {
        throw new Error(`API returned ${res.status}: ${res.statusText}`);
      }

      const result = await res.json();

      // Validate result has required properties
      if (
        !result ||
        !result.curBolt ||
        !result.curBoltProperty ||
        !result.limits ||
        !result.obtainedValues
      ) {
        throw new Error('API response missing required fields');
      }

      setResult(result, userData);

      // Navigate to results page after a slight delay
      setTimeout(() => {
        router.push('/result');
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to fetch:', error);
      alert(`Calculation failed: ${error.message}. Please try again.`);
      setIsLoading(false);
    }
  }

  const handleReset = () => {
    setFormData({
      plateThickness: '',
      engagedThreadLength: '',
      externalLoad: '',
      preLoad: '',
      lateralLoad: '',
    });
  };

  if (isLoading) {
    return <ProgressBar done={false} />;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex fixed inset-0 m-0 p-0 overflow-hidden">
      <Dashboard />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header */}
        <NavBar />

        {/* Form Content */}
        <div className="p-4 sm:p-6 mt-2 md:p-8 max-w-6xl mx-auto w-full">
          <div className="mb-8">
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">
              Design Parameters
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Configure geometry and load conditions for safety factor analysis.
            </p>
          </div>

          <form onSubmit={handleSubmitForm} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Geometry Settings Section */}
              <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <span className="material-icons-round text-xl">
                    straighten
                  </span>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 uppercase text-xs tracking-wider">
                    Geometry Settings
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* Plate Thickness */}
                  <div className="group">
                    <label className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <span>Plate Thickness</span>
                      <InfoTooltip>
                        Thickness of the clamped member stack contributing to
                        joint stiffness.
                        <br />
                        Used for calculating member stiffness and load
                        distribution between bolt and plates.
                        <br />
                        Use effective grip length, not nominal plate size.
                      </InfoTooltip>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all dark:text-slate-100"
                        placeholder="10.00"
                        type="number"
                        name="plateThickness"
                        value={formData.plateThickness}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                        mm
                      </span>
                    </div>
                  </div>

                  {/* Engaged Thread Length */}
                  <div className="group">
                    <label className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <span>Engaged Thread Length (L&apos;e)</span>
                      <InfoTooltip>
                        Effective length of threads engaged in the nut or tapped
                        hole.
                        <br />
                        Used for thread stripping and load-sharing checks.
                        <br />
                        Excludes run-out and incomplete threads.
                      </InfoTooltip>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all dark:text-slate-100"
                        placeholder="12.00"
                        type="number"
                        name="engagedThreadLength"
                        value={formData.engagedThreadLength}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                        mm
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Load Conditions Section */}
              <section className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <span className="material-icons-round text-xl">speed</span>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 uppercase text-xs tracking-wider">
                    Load Conditions
                  </h3>
                </div>
                <div className="space-y-6">
                  {/* External Load */}
                  <div className="group">
                    <label className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <span>External Load</span>
                      <InfoTooltip>
                        Axial service load applied to the joint after
                        tightening.
                        <br />
                        Assumed to act in tension unless stated otherwise.
                        <br />
                        Used to compute additional bolt load based on joint
                        stiffness ratio.
                      </InfoTooltip>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all dark:text-slate-100"
                        placeholder="5000"
                        type="number"
                        name="externalLoad"
                        value={formData.externalLoad}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                        N
                      </span>
                    </div>
                  </div>

                  {/* Preload */}
                  <div className="group">
                    <label className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <span>Preload (Fi)</span>
                      <InfoTooltip>
                        Initial tensile force induced in the bolt during
                        tightening.
                        <br />
                        Typically derived from torque–tension relation or
                        recommended preload percentage of proof load.
                        <br />
                        Critical for joint separation and fatigue checks.
                      </InfoTooltip>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all dark:text-slate-100"
                        placeholder="8000"
                        type="number"
                        name="preLoad"
                        value={formData.preLoad}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                        N
                      </span>
                    </div>
                  </div>

                  {/* Lateral Load */}
                  <div className="group">
                    <label className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      <span>Lateral Load</span>
                      <InfoTooltip>
                        Transverse shear load acting parallel to the joint
                        interface.
                        <br />
                        Used for slip, bearing, or shear failure checks
                        depending on joint type (friction-grip or bearing-type).
                        <br />
                        Assumed uniformly distributed unless specified.
                      </InfoTooltip>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all dark:text-slate-100"
                        placeholder="2000"
                        type="number"
                        name="lateralLoad"
                        value={formData.lateralLoad}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                        N
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Material Properties Section (Fixed) */}
              <section className="md:col-span-2 bg-slate-100 dark:bg-slate-800/20 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span className="material-icons-round text-xl">
                      science
                    </span>
                    <h3 className="font-semibold uppercase text-xs tracking-wider">
                      Material Properties (Fixed)
                    </h3>
                  </div>
                  <span className="material-icons-round text-slate-400 text-sm">
                    lock
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Young's Modulus */}
                  <div className="group">
                    <label className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 block">
                      Young&apos;s Modulus (E)
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 font-mono cursor-not-allowed"
                        disabled
                        readOnly
                        type="number"
                        value="210000"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded uppercase">
                        N/mm²
                      </span>
                    </div>
                  </div>

                  {/* Safety Factor */}
                  <div className="group">
                    <label className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 block">
                      Safety Factor (S.F.)
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed"
                        disabled
                        readOnly
                        step="0.1"
                        type="number"
                        value="2.0"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded">
                        ratio
                      </span>
                    </div>
                  </div>

                  {/* Material Grade */}
                  <div className="group">
                    <label className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 block">
                      Material Grade
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-500 dark:text-slate-400 appearance-none cursor-not-allowed"
                        disabled
                      >
                        <option>ISO (Carbon Steel)</option>
                        <option defaultValue>ISO 10.9 (Alloy Steel)</option>
                        <option>ISO 12.9 (High Tensile)</option>
                        <option>A2-70 (Stainless Steel)</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 material-icons-round text-slate-400 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-t border-border-light dark:border-border-dark pt-6 md:pt-8 gap-4">
              <button
                className="px-4 sm:px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center justify-center gap-2 order-2 sm:order-1"
                type="button"
                onClick={handleReset}
              >
                <span className="material-icons-round text-lg">
                  restart_alt
                </span>
                <span className="hidden sm:inline">Reset Parameters</span>
                <span className="sm:hidden">Reset</span>
              </button>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 order-1 sm:order-2">
                {/* <button
                  className="px-4 sm:px-6 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all flex items-center justify-center gap-2"
                  type="button"
                >
                  <span className="material-icons-round text-lg">
                    file_download
                  </span>
                  <span className="hidden sm:inline">Export JSON</span>
                  <span className="sm:hidden">Export</span>
                </button> */}
                <button
                  className="px-6 sm:px-10 py-2.5 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>RUN CALCULATION</span>
                  <span className="material-icons-round">play_arrow</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-auto py-4 sm:py-6 px-4 sm:px-6 md:px-8 border-t border-border-light dark:border-border-dark text-slate-500 dark:text-slate-500 text-xs flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">
            <span className="hidden sm:inline">
              © 2024 Engineering Calculation Suite
            </span>
            <span className="sm:hidden">© 2024 BoltCalcPro</span>
            <a className="hover:underline" href="#">
              Documentation
            </a>
            <a className="hover:underline" href="#">
              Support
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="hidden sm:inline">All systems operational</span>
            <span className="sm:hidden">Operational</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
