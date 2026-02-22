export default function DesignSafetyCheck({
  verificationData,
  allPass,
  boltData,
}) {
  return (
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
          <span className="material-symbols-outlined text-sm">info</span>
          {allPass
            ? `All criteria meet or exceed industrial safety factors for class ${boltData.propertyClass} fasteners.`
            : 'Some criteria do not meet the required safety factors. Review the verification table below.'}
        </div>
      </div>
    </div>
  );
}
