import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * CompatibilityIcon Component
 * @param {('success'|'warning')} variant - The status type
 * @param {string} className - Optional additional styling
 */
export const CompatibilityIcon = ({ variant = 'success', className }) => {
  const isSuccess = variant === 'success';

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-colors',
        // Success styling: Soft green circle
        isSuccess
          ? 'bg-green-100/80 text-green-700 dark:bg-green-900/30 dark:text-green-400'
          : 'bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        // Standard sizing
        'size-6 p-1',
        className
      )}
    >
      {isSuccess ? (
        <Check className="size-full stroke-[3px]" aria-label="Compatible" />
      ) : (
        <AlertTriangle
          className="size-full stroke-[2.5px]"
          aria-label="Warning"
        />
      )}
    </div>
  );
};
