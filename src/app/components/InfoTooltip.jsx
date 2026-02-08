'use client';

import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

function InfoTooltip({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label="More information"
            className="inline-flex items-center justify-center p-2 sm:p-1 rounded-md hover:bg-accent/50 active:bg-accent transition-colors"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Info className="size-5 sm:size-4 text-muted-foreground" />
          </button>
        </TooltipTrigger>

        <TooltipContent
          className="max-w-[280px] sm:max-w-sm text-sm"
          onPointerDownOutside={() => setOpen(false)}
          onEscapeKeyDown={() => setOpen(false)}
        >
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default InfoTooltip;

// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';

// import { Info } from 'lucide-react';

// function InfoTooltip({ children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef(null);

//   const handleTriggerClick = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (containerRef.current && !containerRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('click', handleClickOutside);
//       return () => document.removeEventListener('click', handleClickOutside);
//     }
//   }, [isOpen]);

//   return (
//     <div ref={containerRef}>
//       {/* Tooltip implementation */}
//       <TooltipProvider delayDuration={0}>
//         <Tooltip open={isOpen} onOpenChange={setIsOpen}>
//           <TooltipTrigger asChild>
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 sm:p-1 rounded-md hover:bg-accent/50 active:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
//               aria-label="More information"
//               onClick={handleTriggerClick}
//             >
//               <Info className="size-5 sm:size-4 text-muted-foreground cursor-help" />
//             </button>
//           </TooltipTrigger>
//           <TooltipContent className="max-w-[280px] sm:max-w-sm text-sm">
//             <p>{children}</p>
//           </TooltipContent>
//         </Tooltip>
//       </TooltipProvider>
//     </div>
//   );
// }

// export default InfoTooltip;
