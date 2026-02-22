export default function ContactSection({
  contactEmail,
  copiedTarget,
  onCopyEmail,
}) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 engineering-grid -z-10"></div>
      <div className="max-w-4xl mx-auto px-6 text-center reveal active">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Have questions or custom requirements?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Our team of engineers and developers is ready to help you integrate
          Bolt Calculator into your enterprise workflow.
        </p>
        <button
          onClick={() => onCopyEmail(contactEmail, 'contact')}
          className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-3 mx-auto group hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] relative"
        >
          Get In Touch
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            mail
          </span>
          {copiedTarget === 'contact' && (
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded whitespace-nowrap shadow-lg">
              Email copied!
            </span>
          )}
        </button>
      </div>
    </section>
  );
}
