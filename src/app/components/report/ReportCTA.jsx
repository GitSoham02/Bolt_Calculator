export default function ReportCTA({ onBackToHistory }) {
  return (
    <div className="flex items-center justify-start pt-4 border-t border-slate-200 dark:border-slate-800">
      <button
        onClick={onBackToHistory}
        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold hover:text-primary transition-colors py-2 px-4 group"
      >
        <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
          arrow_back
        </span>
        Back to History
      </button>
    </div>
  );
}
