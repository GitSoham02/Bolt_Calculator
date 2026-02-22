export default function UserInputData({ userInputs }) {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">tune</span>
          User Input Parameters
        </h3>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {userInputs.map((input, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-slate-100 dark:border-slate-800"
          >
            <span className="text-sm text-slate-500">{input.label}</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {input.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
