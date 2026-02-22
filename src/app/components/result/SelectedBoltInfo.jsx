import Image from 'next/image';

export default function SelectedBoltInfo({ boltData }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="p-3 sm:p-4 md:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="text-sm sm:text-base font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            engineering
          </span>
          Selected Bolt Details
        </h3>
      </div>
      <div className="p-3 sm:p-4 md:p-5">
        <div className="flex justify-center py-4 sm:py-6 bg-slate-50 dark:bg-slate-950 rounded-lg mb-4 sm:mb-6 border border-dashed border-slate-200 dark:border-slate-800">
          <Image
            src="/bolt_logo1.svg"
            width={500}
            height={500}
            alt="bolt logo"
            className="text-slate-400 dark:text-slate-600 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
          ></Image>
        </div>
        <dl className="space-y-3 sm:space-y-4">
          <div className="flex justify-between gap-2 border-b border-slate-50 dark:border-slate-800 pb-2">
            <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Specification
            </dt>
            <dd className="font-medium text-sm sm:text-base text-right">
              {boltData.specification}
            </dd>
          </div>
          <div className="flex justify-between gap-2 border-b border-slate-50 dark:border-slate-800 pb-2">
            <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Property Class
            </dt>
            <dd className="font-medium text-sm sm:text-base">
              {boltData.propertyClass}
            </dd>
          </div>
          <div className="flex justify-between gap-2 border-b border-slate-50 dark:border-slate-800 pb-2">
            <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Nominal Diameter
            </dt>
            <dd className="font-medium text-sm sm:text-base">
              {boltData.nominalDiameter} mm
            </dd>
          </div>
          <div className="flex justify-between gap-2 border-b border-slate-50 dark:border-slate-800 pb-2">
            <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Thread Mean Dia.
            </dt>
            <dd className="font-medium text-sm sm:text-base">
              {boltData.threadMeanDiameter} mm
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Tensile Stress Area
            </dt>
            <dd className="font-medium text-sm sm:text-base">
              {boltData.tensileStressArea} mm²
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
