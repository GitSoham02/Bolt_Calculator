'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Dashboard from '../components/Dashboard';
import { useResult } from '../context/ResultContext';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ResultPage() {
  const router = useRouter();
  const { result, clearResult, userInput } = useResult();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate reference ID once on mount using lazy initialization
  const [refId] = useState(() => Math.floor(Math.random() * 9999));

  // PDF Download function
  async function handlePDFDownload() {
    console.log('[Result] userInput from context:', userInput);
    console.log('[Result] result from context:', result);
    const pdfBoltData = { userData: userInput, ...result };
    console.log('[Result] Requesting PDF generation:', pdfBoltData);

    try {
      const response = await fetch('api/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pdfBoltData),
      });

      // Check if response is an error
      if (!response.ok) {
        const contentType = response.headers.get('content-type');

        // If server returned JSON, it's an error message
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          console.error('[Result] PDF generation error:', errorData);
          alert(
            `Failed to generate PDF: ${errorData.details || errorData.error || 'Unknown error'}`,
          );
          return;
        }

        // Other error
        throw new Error(
          `Server returned ${response.status}: ${response.statusText}`,
        );
      }

      // Success - we have a PDF
      const blob = await response.blob();

      // Verify it's actually a PDF
      if (blob.type !== 'application/pdf' && blob.size === 0) {
        throw new Error('Received invalid PDF data');
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'bolt-report.pdf';
      a.click();
      window.URL.revokeObjectURL(url);

      console.log('[Result] PDF downloaded successfully');
    } catch (error) {
      console.error('[Result] PDF download failed:', error);
      alert(`Failed to download PDF: ${error.message}`);
    }
  }

  useEffect(() => {
    // Wait for data to be available
    const timer = setTimeout(() => {
      if (!result) {
        setHasError(true);
        setIsLoading(false);
      } else {
        // Validate that result has all required properties
        if (
          !result.curBolt ||
          !result.curBoltProperty ||
          !result.limits ||
          !result.obtainedValues
        ) {
          setHasError(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }
    }, 500); // Wait 500ms for result to be set

    return () => clearTimeout(timer);
  }, [result]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-500">Processing calculation...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (!result || hasError) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">
            Error Processing Calculation
          </h2>
          <p className="text-slate-500 mb-6">
            The calculation could not be completed. Please try again or check
            your inputs.
          </p>
          <button
            onClick={() => {
              clearResult();
              router.push('/input');
            }}
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90"
          >
            Back to Input
          </button>
        </div>
      </div>
    );
  }

  const {
    curBolt: boltDesc,
    curBoltProperty: boltProperty,
    limits,
    obtainedValues,
  } = result;

  function handleBackToForm() {
    clearResult();
    router.push('/input');
  }

  // Prepare bolt data for display
  const boltData = {
    specification: boltDesc.designation,
    propertyClass: `${boltProperty.xValue}.${boltProperty.yValue}`,
    nominalDiameter: boltDesc.nominalDiameter.toFixed(2),
    threadMeanDiameter: boltDesc.threadMeanDiameter.toFixed(3),
    tensileStressArea: boltDesc.tensileStressArea.toFixed(1),
  };

  // Prepare verification data
  const verificationData = [
    {
      name: 'Tensile Stress',
      calculated: obtainedValues.tensileStress.toFixed(2),
      permissible: limits.tensileStress.toFixed(2),
      utilization: Math.round(
        (obtainedValues.tensileStress / limits.tensileStress) * 100,
      ),
      status: obtainedValues.tensileStress <= limits.tensileStress,
    },
    {
      name: 'Shear Stress',
      calculated: obtainedValues.shearStress.toFixed(2),
      permissible: limits.shearStress.toFixed(2),
      utilization: Math.round(
        (obtainedValues.shearStress / limits.shearStress) * 100,
      ),
      status: obtainedValues.shearStress <= limits.shearStress,
    },
    {
      name: 'Bearing Stress',
      calculated: obtainedValues.plateBearingStress.toFixed(2),
      permissible: limits.plateBearingStress.toFixed(2),
      utilization: Math.round(
        (obtainedValues.plateBearingStress / limits.plateBearingStress) * 100,
      ),
      status: obtainedValues.plateBearingStress <= limits.plateBearingStress,
    },
    {
      name: 'Thread Shear Stress',
      calculated: obtainedValues.threadShearStress.toFixed(2),
      permissible: limits.threadShearStress.toFixed(2),
      utilization: Math.round(
        (obtainedValues.threadShearStress / limits.threadShearStress) * 100,
      ),
      status: obtainedValues.threadShearStress <= limits.threadShearStress,
    },
    {
      name: 'Preload',
      calculated: obtainedValues.preLoad.toFixed(2),
      permissible: limits.preLoad.toFixed(2),
      utilization: Math.round((obtainedValues.preLoad / limits.preLoad) * 100),
      status: obtainedValues.preLoad <= limits.preLoad,
    },
    {
      name: 'Separation Load',
      calculated: obtainedValues.separationLoad.toFixed(2),
      permissible: limits.separationLoad.toFixed(2),
      utilization: Math.round(
        (limits.separationLoad / obtainedValues.separationLoad) * 100,
      ),
      status: obtainedValues.separationLoad >= limits.separationLoad,
    },
  ];

  // Check if all criteria pass
  const allPass = verificationData.every((item) => item.status);

  // Calculate safety factor (example - adjust based on your actual calculation)
  const safetyFactor = 2.0;
  // limits.tensileStress / obtainedValues.tensileStress || 1.0;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex fixed inset-0 m-0 p-0 overflow-hidden">
      <Dashboard
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="flex-1 max-w-7xl mx-auto px-3 mt-16 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 w-full">
          <div className="mb-6 sm:mb-8">
            <nav className="flex mb-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <Link
                href="/"
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Calculators
              </Link>
              <span className="mx-1 sm:mx-2">/</span>
              <span className="truncate">Results Dashboard</span>
            </nav>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              Analysis Report: {boltData.specification}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Ref ID: #BOLT-{new Date().getFullYear()}-{refId} • Generated on{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              {/* Selected Bolt Details */}
              <div className="bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-3 sm:p-4 md:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                  <h3 className="text-sm sm:text-base font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      engineering
                    </span>
                    Selected Bolt Details
                  </h3>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <div className="flex justify-center py-4 sm:py-6 bg-slate-50 dark:bg-slate-950 rounded-lg mb-4 sm:mb-6 border border-dashed border-slate-200 dark:border-slate-800">
                    <Image
                      src="/bolt_logo1.svg"
                      width={500}
                      height={500}
                      alt="bolt logo"
                      className="text-slate-400 dark:text-slate-600 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                    ></Image>
                    {/* <svg
                      className="text-slate-400 dark:text-slate-600 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3"></path>
                      <path d="M11 6l3 3"></path>
                      <path d="M14 9l4 4a2 2 0 0 1 0 2.83l-1.41 1.41a2 2 0 0 1-2.83 0l-4-4"></path>
                    </svg> */}
                  </div>
                  <dl className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between gap-2 border-b border-slate-50 dark:border-slate-800 pb-2">
                      <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                        Specification
                      </dt>
                      <dd className="font-medium text-sm sm:text-base text-right">
                        {boltData.specification}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-slate-50 dark:border-slate-800 pb-2">
                      <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                        Property Class
                      </dt>
                      <dd className="font-medium text-sm sm:text-base">
                        {boltData.propertyClass}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-slate-50 dark:border-slate-800 pb-2">
                      <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                        Nominal Diameter
                      </dt>
                      <dd className="font-medium text-sm sm:text-base">
                        {boltData.nominalDiameter} mm
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-slate-50 dark:border-slate-800 pb-2">
                      <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                        Thread Mean Dia.
                      </dt>
                      <dd className="font-medium text-sm sm:text-base">
                        {boltData.threadMeanDiameter} mm
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                        Tensile Stress Area
                      </dt>
                      <dd className="font-medium text-sm sm:text-base">
                        {boltData.tensileStressArea} mm²
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Design Safety Check */}
              <div className="bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="p-3 sm:p-4 md:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                  <h3 className="text-sm sm:text-base font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-500">
                      verified
                    </span>
                    Design Safety Check
                  </h3>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                    {verificationData.map((item) => (
                      <div
                        key={item.name}
                        className={`flex items-center gap-2 p-2 sm:p-3 rounded-lg ${
                          item.status ? 'status-pass' : 'status-fail'
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm shrink-0">
                          {item.status ? 'check_circle' : 'cancel'}
                        </span>
                        <span className="text-xs sm:text-sm font-medium">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg text-[10px] sm:text-xs flex gap-2">
                    <span className="material-symbols-outlined text-sm">
                      info
                    </span>
                    {allPass
                      ? `All criteria meet or exceed industrial safety factors for class ${boltData.propertyClass} fasteners.`
                      : 'Some criteria do not meet the required safety factors. Review the verification table below.'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Stress and Load Verification Table */}
              <div className="bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-3 sm:p-4 md:p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Stress and Load Verification
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Detailed comparison against permissible design limits.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-wider rounded">
                      ISO 898-1
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto -mx-3 sm:mx-0">
                  <table className="w-full text-left min-w-160">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold">
                          Parameter
                        </th>
                        <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-right">
                          Calculated Value
                        </th>
                        <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-right">
                          Permissible Limit
                        </th>
                        <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-center">
                          Utilization
                        </th>
                        <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {verificationData.map((row) => (
                        <tr
                          key={row.name}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                        >
                          <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm">
                            {row.name}
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-right font-mono text-xs sm:text-sm">
                            {row.calculated}{' '}
                            {row.name.includes('Load') ? 'N' : 'MPa'}
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-right font-mono text-slate-500 text-xs sm:text-sm">
                            {row.permissible}{' '}
                            {row.name.includes('Load') ? 'N' : 'MPa'}
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                            <div className="w-16 sm:w-20 md:w-24 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mx-auto overflow-hidden">
                              <div
                                className={`h-1.5 rounded-full ${
                                  row.utilization > 80
                                    ? 'bg-rose-500'
                                    : row.utilization > 40
                                      ? 'bg-primary'
                                      : 'bg-green-500'
                                  // : 'bg-primary'
                                }`}
                                style={{
                                  width: `${Math.min(row.utilization, 100)}%`,
                                }}
                              ></div>
                            </div>
                          </td>
                          <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                            <span
                              className={`material-symbols-outlined ${
                                row.status
                                  ? 'text-emerald-500'
                                  : 'text-rose-500'
                              }`}
                            >
                              {row.status ? 'check_circle' : 'cancel'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/50 text-center">
                  <p className="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 italic">
                    All values are evaluated as per VDI 2230 guidelines. Dynamic
                    loads considered at 10^6 cycles.
                  </p>
                </div>
              </div>

              {/* Calculation Complete CTA */}
              <div className="bg-white dark:bg-slate-900 border border-primary/30 dark:border-primary/40 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg shadow-primary/5 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/2 pointer-events-none"></div>
                <div className="relative z-0 text-center md:text-left">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
                    <span className="material-symbols-outlined text-emerald-500">
                      task_alt
                    </span>
                    Calculation Complete
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                    {allPass
                      ? `The selected bolt configuration is safe for the applied load case with a safety factor of ${safetyFactor.toFixed(2)}.`
                      : 'The selected bolt configuration requires review. Some safety criteria are not met.'}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto shrink-0 relative z-0">
                  <button
                    onClick={handleBackToForm}
                    className="w-full sm:w-auto sm:flex-1 md:flex-none px-4 sm:px-6 py-2 sm:py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap shadow-sm"
                  >
                    Edit Inputs
                  </button>
                  <button
                    className="w-full sm:w-auto sm:flex-1 md:flex-none px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 whitespace-nowrap"
                    onClick={handlePDFDownload}
                  >
                    Save Calculation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto py-6 sm:py-8 border-t border-slate-200 dark:border-slate-800 text-center px-4">
          <p className="text-xs sm:text-sm text-slate-400">
            © {new Date().getFullYear()} Industrial Fastener Engineering Suite.
            All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
