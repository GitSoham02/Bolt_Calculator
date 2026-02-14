'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useResult } from '@/app/context/ResultContext';
import { Superscript } from 'lucide-react';

export default function HistoryReportPage() {
  const router = useRouter();
  const [isExporting, setIsExporting] = useState(false);
  const [bolt, setBolt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { historyIndex } = useResult();

  // Fetch bolt data from localStorage on client side only
  useEffect(() => {
    setIsLoading(true);
    try {
      const storedData = localStorage.getItem('boltResultHistory');
      const boltHistoryData = JSON.parse(storedData) || [];
      setBolt(boltHistoryData[historyIndex]);
    } catch (error) {
      console.error('Error loading bolt data:', error);
      setBolt(null);
    } finally {
      setIsLoading(false);
    }
  }, [historyIndex]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-slate-500">Loading report...</p>
        </div>
      </div>
    );
  }

  // Redirect if no bolt data found
  if (bolt === undefined || bolt === null) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Report Not Found</h2>
          <p className="text-slate-500 mb-4">
            The requested report could not be found.
          </p>
          <button
            onClick={() => router.push('/history')}
            className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90"
          >
            Back to History
          </button>
        </div>
      </div>
    );
  }

  // Transform bolt data into report format
  const reportData = {
    refId: `BOLT-${new Date().getFullYear()}-${Math.floor(Math.random() * 9999)}`,
    boltName: bolt.curBolt.designation,
    date: new Date(bolt.userInputData.calculatedAt).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      },
    ),
    userInputs: [
      {
        label: 'Plate Thickness',
        value: `${bolt.userInputData.plateThickness.toFixed(2)} mm`,
      },
      { label: 'External Load', value: `${bolt.userInputData.externalLoad} N` },
      {
        label: 'Engaged Thread Length',
        value: `${bolt.userInputData.engagedThreadLength.toFixed(2)} mm`,
      },
      {
        label: 'Pre Load',
        value: `${bolt.userInputData.preLoad.toFixed(2)} N`,
      },
      {
        label: 'Lateral Load',
        value: `${bolt.userInputData.lateralLoad.toFixed(2)} N`,
      },
    ],
    boltDetails: [
      { label: 'Name', value: bolt.curBolt.designation },
      { label: 'Grade', value: bolt.curBoltProperty.className },
      { label: 'Diameter', value: `${bolt.curBolt.nominalDiameter} mm` }, // Default - adjust if available
      {
        label: 'Tensile Stress Area',
        value: `${bolt.curBolt.tensileStressArea.toFixed(2)} mm\u00B2`,
      },
      {
        label: 'Thread Mean Diameter',
        value: `${bolt.curBolt.threadMeanDiameter.toFixed(2)} mm`,
      },
    ],
    verification: [
      {
        name: 'Tensile Stress',
        description: 'Based on effective area',
        calculated: `${bolt.obtainedValues.tensileStress.toFixed(2)} MPa`,
        limit: `${bolt.limits.tensileStress.toFixed(2)} MPa`,
        utilization: Math.round(
          (bolt.obtainedValues.tensileStress / bolt.limits.tensileStress) * 100,
        ),
        status:
          bolt.obtainedValues.tensileStress <= bolt.limits.tensileStress
            ? 'PASS'
            : 'FAIL',
      },
      {
        name: 'Shear Stress',
        description: 'Cross-sectional resistance',
        calculated: `${bolt.obtainedValues.shearStress.toFixed(2)} MPa`,
        limit: `${bolt.limits.shearStress.toFixed(2)} MPa`,
        utilization: Math.round(
          (bolt.obtainedValues.shearStress / bolt.limits.shearStress) * 100,
        ),
        status:
          bolt.obtainedValues.shearStress <= bolt.limits.shearStress
            ? 'PASS'
            : 'FAIL',
      },
      {
        name: 'Bearing Stress',
        description: 'Plate bearing stress check',
        calculated: `${bolt.obtainedValues.plateBearingStress.toFixed(2)} MPa`,
        limit: `${bolt.limits.plateBearingStress.toFixed(2)} MPa`,
        utilization: Math.round(
          (bolt.obtainedValues.plateBearingStress /
            bolt.limits.plateBearingStress) *
            100,
        ),
        status:
          bolt.obtainedValues.plateBearingStress <=
          bolt.limits.plateBearingStress
            ? 'PASS'
            : 'FAIL',
      },
      {
        name: 'Thread Shear Stress',
        description: 'Engagement length check',
        calculated: `${bolt.obtainedValues.threadShearStress.toFixed(2)} MPa`,
        limit: `${bolt.limits.threadShearStress.toFixed(2)} MPa`,
        utilization: Math.round(
          (bolt.obtainedValues.threadShearStress /
            bolt.limits.threadShearStress) *
            100,
        ),
        status:
          bolt.obtainedValues.threadShearStress <= bolt.limits.threadShearStress
            ? 'PASS'
            : 'FAIL',
      },
      {
        name: 'Preload',
        description: 'Preload check',
        calculated: `${bolt.obtainedValues.preLoad.toFixed(2)} N`,
        limit: `${bolt.limits.preLoad.toFixed(2)} N`,
        utilization: Math.round(
          (bolt.obtainedValues.preLoad / bolt.limits.preLoad) * 100,
        ),
        status:
          bolt.obtainedValues.preLoad <= bolt.limits.preLoad ? 'PASS' : 'FAIL',
      },
      {
        name: 'Separation Load',
        description: 'Separation Load check',
        calculated: `${bolt.obtainedValues.separationLoad.toFixed(2)} MPa`,
        limit: `${bolt.limits.separationLoad.toFixed(2)} MPa`,
        utilization: Math.round(
          (bolt.limits.separationLoad / bolt.obtainedValues.separationLoad) *
            100,
        ),
        status:
          bolt.limits.separationLoad <= bolt.obtainedValues.separationLoad
            ? 'PASS'
            : 'FAIL',
      },
    ],
  };

  async function handleExportPDF() {
    const { userInputData, ...rest } = bolt;
    const boltData = { ...rest, userData: userInputData };
    console.log(boltData);
    setIsExporting(true);
    try {
      const response = await fetch('/api/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(boltData),
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `bolt-report.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('PDF export failed:', error);
    } finally {
      setIsExporting(false);
    }
  }

  const handleBackToHistory = () => {
    router.back();
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs & Report Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="w-full">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
              <Link
                href="/history"
                className="hover:text-primary transition-colors"
              >
                History
              </Link>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
              <span className="text-slate-900 dark:text-slate-200 font-medium">
                Analysis Report: {reportData.boltName}
              </span>
            </nav>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Analysis Report: {reportData.boltName}
            </h2>
            <div className="flex items-center gap-4 mt-2 flex-wrap">
              <span className="flex items-center gap-1.5 text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[16px]">
                  tag
                </span>
                Ref: #{reportData.refId}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[16px]">
                  calendar_today
                </span>
                Date: {reportData.date}
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[20px]">
                picture_as_pdf
              </span>
              {isExporting ? 'Exporting...' : 'Export PDF'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Top Row: Input Parameters and Bolt Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Input Parameters Section */}
            <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    tune
                  </span>
                  User Input Parameters
                </h3>
              </div>
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reportData.userInputs.map((input, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-100 dark:border-slate-800"
                  >
                    <span className="text-sm text-slate-500">
                      {input.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {input.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Bolt Details Section */}
            <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    nat
                  </span>
                  Selected Bolt Details
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                  {reportData.boltDetails.map((detail, index) => (
                    <div key={index}>
                      <p className="text-[11px] font-bold text-slate-400 uppercase">
                        {detail.label}
                      </p>
                      <p
                        className={`text-sm font-semibold text-slate-900 dark:text-slate-200'
                        `}
                      >
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Stress and Load Verification Table (Full Width) */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
                Stress and Load Verification
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="p-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Verification Metric
                    </th>
                    <th className="p-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">
                      Calculated
                    </th>
                    <th className="p-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">
                      Limit
                    </th>
                    <th className="p-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Utilization
                    </th>
                    <th className="p-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {reportData.verification.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="p-4">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          {row.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {row.description}
                        </p>
                      </td>
                      <td className="p-4 text-right font-mono text-sm text-slate-900 dark:text-white">
                        {row.calculated}
                      </td>
                      <td className="p-4 text-right font-mono text-sm text-slate-500">
                        {row.limit}
                      </td>
                      <td className="p-4 min-w-[140px]">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                row.utilization > 80
                                  ? 'bg-rose-500'
                                  : row.utilization > 40
                                    ? 'bg-primary'
                                    : 'bg-green-500'
                              }`}
                              style={{ width: `${row.utilization}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                            {row.utilization}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Actions Section */}
          <div className="flex items-center justify-start pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={handleBackToHistory}
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold hover:text-primary transition-colors py-2 px-4 group"
            >
              <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
              Back to History
            </button>
          </div>
        </div>
      </main>

      {/* Footer Copyright */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-200 dark:border-slate-800 mt-12 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Bolt Analysis Pro. Certified Engineering Software.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Compliance Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
