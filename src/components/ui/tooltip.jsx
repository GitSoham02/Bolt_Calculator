'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

function TooltipProvider({ delayDuration = 0, ...props }) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({ ...props }) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({ ...props }) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({ className, sideOffset = 0, children, ...props }) {
  return (
    // <TooltipPrimitive.Portal>
    //   <TooltipPrimitive.Content
    //     data-slot="tooltip-content"
    //     sideOffset={sideOffset}
    //     className={cn(
    //       'bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
    //       className
    //     )}
    //     {...props}
    //   >
    //     {children}
    //     <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
    //   </TooltipPrimitive.Content>
    // </TooltipPrimitive.Portal>

    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          // 1. Intense Background: Deep Slate with a subtle Gradient
          'bg-slate-900/95 dark:bg-black/90 backdrop-blur-xl',
          'bg-linear-to-br from-slate-800/95 via-slate-900/98 to-black',

          // 2. High-Contrast Border & Glow
          'border border-slate-700/50 shadow-[0_0_20px_rgba(0,0,0,0.3)]',

          // 3. Typography: Bright white/blue for a "technical readout" feel
          'text-slate-100 tracking-tight leading-relaxed',

          // 4. Existing layout & animations
          'z-50 w-72 rounded-xl p-4 text-sm animate-in fade-in-0 zoom-in-95',
          className
        )}
        {...props}
      >
        <div className="pl-1">{children}</div>

        <TooltipPrimitive.Arrow className="fill-slate-900/95 drop-shadow-lg size-3" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
