export default function CalculationVerificationTable({ verificationData }) {
  return (
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
                  {row.calculated} {row.name.includes('Load') ? 'N' : 'MPa'}
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-right font-mono text-slate-500 text-xs sm:text-sm">
                  {row.permissible} {row.name.includes('Load') ? 'N' : 'MPa'}
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
                      row.status ? 'text-emerald-500' : 'text-rose-500'
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
          All values are evaluated as per VDI 2230 guidelines. Dynamic loads
          considered at 10^6 cycles.
        </p>
      </div>
    </div>
  );
}
