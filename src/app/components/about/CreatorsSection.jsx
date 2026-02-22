import Image from 'next/image';

const CopyEmailButton = ({ email, copiedTarget, onCopyEmail, targetId }) => (
  <button
    onClick={() => onCopyEmail(email, targetId)}
    className="text-slate-400 hover:text-primary transition-colors cursor-pointer bg-none border-none p-0 relative group"
    title="Click to copy email"
  >
    <span className="material-symbols-outlined">mail</span>
    {copiedTarget === targetId && (
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded whitespace-nowrap shadow-lg">
        Email copied!
      </span>
    )}
  </button>
);

export default function CreatorsSection({
  devenInfo,
  sohamInfo,
  copiedTarget,
  onCopyEmail,
}) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30" id="creators">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal active">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Meet the Creators
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            The engineering and development minds behind the industry&apos;s
            most trusted bolt analysis tool.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="reveal active group">
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                    <Image
                      src={devenInfo.image}
                      alt="image"
                      width={150}
                      height={150}
                    ></Image>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg shadow-lg">
                    <span className="material-symbols-outlined text-sm">
                      engineering
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {devenInfo.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mt-1">
                    {devenInfo.designation}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {devenInfo.description}
                </p>
                <div className="flex gap-4 pt-2">
                  <a
                    className="text-slate-400 hover:text-primary transition-colors"
                    href={devenInfo.linkedin}
                    title="Linkedin"
                  >
                    <span className="material-symbols-outlined">person</span>
                  </a>
                  <CopyEmailButton
                    email={devenInfo.mail}
                    copiedTarget={copiedTarget}
                    onCopyEmail={onCopyEmail}
                    targetId="deven"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="reveal active group stagger-delay-1">
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                    <Image
                      src={sohamInfo.image}
                      alt="image"
                      width={150}
                      height={150}
                    ></Image>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg shadow-lg">
                    <span className="material-symbols-outlined text-sm">
                      code
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {sohamInfo.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mt-1">
                    {sohamInfo.designation}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {sohamInfo.description}
                </p>
                <div className="flex gap-4 pt-2">
                  <a
                    className="text-slate-400 hover:text-primary transition-colors"
                    href={sohamInfo.linkedin}
                    title="Linkedin"
                  >
                    <span className="material-symbols-outlined">person</span>
                  </a>
                  <a
                    className="text-slate-400 hover:text-primary transition-colors"
                    href={sohamInfo.github}
                    title="Github"
                  >
                    <span className="material-symbols-outlined">code</span>
                  </a>
                  <CopyEmailButton
                    email={sohamInfo.mail}
                    copiedTarget={copiedTarget}
                    onCopyEmail={onCopyEmail}
                    targetId="soham"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
