'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Input } from '@/components/ui/input';
import { Info } from 'lucide-react';

function InfoTooltip({ children }) {
  return (
    <div>
      {/* Tooltip implementation */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="size-5 sm:size-4 text-muted-foreground cursor-help" />
          </TooltipTrigger>
          <TooltipContent className="max-w-[280px] sm:max-w-sm text-sm">
            <p>{children}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default InfoTooltip;
