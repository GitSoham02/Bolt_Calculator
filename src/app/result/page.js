'use client';

import { useRouter } from 'next/navigation';
import Dashboard from '../components/Dashboard';
import { useResult } from '../context/ResultContext';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import TitleInfo from '../components/result/TitleInfo';
import SelectedBoltInfo from '../components/result/SelectedBoltInfo';
import DesignSafetyCheck from '../components/result/DesignSafetyCheck';
import CalculationVerificationTable from '../components/result/CalculationVerificationTable';
import ResultCTAButtons from '../components/result/ResultCTAButtons';

export default function ResultPage() {
  const router = useRouter();
  const {
    result,
    clearResult,
    userInput,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  } = useResult();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate reference ID once on mount using lazy initialization
  const [refId] = useState(() => Math.floor(Math.random() * 9999));

  // PDF Download function
  async function handlePDFDownload() {
    console.log('[Result] userInput from context:', userInput);
    console.log('[Result] result from context:', result);
    const pdfBoltData = { userInputData: userInput, ...result };
    // const pdfBoltData = { ...result };
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
    propertyClass: `${boltProperty.xValue + boltProperty.yValue}`,
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
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col fixed inset-0 m-0 p-0 overflow-hidden">
      <NavBar />
      {/* Desktop Sidebar - Always visible on lg+ screens */}
      <div className="flex flex-row flex-1 min-h-0 p-0 m-0">
        <aside className="hidden lg:flex lg:w-64 border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex-col overflow-y-auto">
          <Dashboard />
        </aside>

        {/* Mobile Overlay Sidebar - Only visible when menu is open on mobile */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu */}
            <aside className="relative w-64 h-full bg-surface-light dark:bg-surface-dark flex flex-col overflow-y-auto">
              <Dashboard />
            </aside>
          </div>
        )}

        <main className="flex-1 flex flex-col min-w-0 min-h-0 overflow-y-auto scrollbar-hide">
          <div className="flex-1 max-w-7xl mx-auto px-3 mt-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 w-full">
            <TitleInfo specification={boltData.specification} refId={refId} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              {/* Left Column */}
              <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                <SelectedBoltInfo boltData={boltData} />
                <DesignSafetyCheck
                  verificationData={verificationData}
                  allPass={allPass}
                  boltData={boltData}
                />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <CalculationVerificationTable
                  verificationData={verificationData}
                />
                <ResultCTAButtons
                  allPass={allPass}
                  safetyFactor={safetyFactor}
                  onEditInputs={handleBackToForm}
                  onSaveAsPDF={handlePDFDownload}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto py-6 sm:py-8 border-t border-slate-200 dark:border-slate-800 text-center px-4">
            <p className="text-xs sm:text-sm text-slate-400">
              © {new Date().getFullYear()} Industrial Fastener Engineering
              Suite. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
