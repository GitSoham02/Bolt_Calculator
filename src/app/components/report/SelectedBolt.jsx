export default function SelectedBolt({ boltDetails }) {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">nat</span>
          Selected Bolt Details
        </h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          {boltDetails.map((detail, index) => (
            <div key={index}>
              <p className="text-[11px] font-bold text-slate-400 uppercase">
                {detail.label}
              </p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
