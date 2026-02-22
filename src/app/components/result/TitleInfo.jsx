import Link from 'next/link';

export default function TitleInfo({ specification, refId }) {
  return (
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
        Analysis Report: {specification}
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
  );
}
