export default function ResultCTAButtons({
  allPass,
  safetyFactor,
  onEditInputs,
  onSaveAsPDF,
}) {
  return (
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
          onClick={onEditInputs}
          className="w-full sm:w-auto sm:flex-1 md:flex-none px-4 sm:px-6 py-2 sm:py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap shadow-sm"
        >
          Edit Inputs
        </button>
        <button
          className="w-full sm:w-auto sm:flex-1 md:flex-none px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 whitespace-nowrap"
          onClick={onSaveAsPDF}
        >
          Save as PDF{' '}
          <span className="material-symbols-outlined">download</span>
        </button>
      </div>
    </div>
  );
}
