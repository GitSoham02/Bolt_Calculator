export default function LoadVerificationTable({ verification }) {
  return (
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
            {verification.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <td className="p-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {row.name}
                  </p>
                  <p className="text-xs text-slate-500">{row.description}</p>
                </td>
                <td className="p-4 text-right font-mono text-sm text-slate-900 dark:text-white">
                  {row.calculated}
                </td>
                <td className="p-4 text-right font-mono text-sm text-slate-500">
                  {row.limit}
                </td>
                <td className="p-4 min-w-35">
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
  );
}
