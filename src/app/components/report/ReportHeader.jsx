import Link from 'next/link';

export default function ReportHeader({
  boltName,
  refId,
  date,
  onExportPDF,
  isExporting,
}) {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="w-auto">
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
            Analysis Report: {boltName}
          </span>
        </nav>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Analysis Report: {boltName}
        </h2>
        <div className="flex items-center gap-4 mt-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            <span className="material-symbols-outlined text-[16px]">tag</span>
            Ref: #{refId}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            <span className="material-symbols-outlined text-[16px]">
              calendar_today
            </span>
            Date: {date}
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onExportPDF}
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
  );
}
