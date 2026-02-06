import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// const badgeVariants = cva(
//   'inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
//   {
//     // variants: {
//     //   variant: {
//     //     default:
//     //       'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
//     //     secondary:
//     //       'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
//     //     destructive:
//     //       'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
//     //     outline:
//     //       'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
//     //     // custom made
//     //     success: '',
//     //     warning: '',
//     //   },
//     // },

//     defaultVariants: {
//       variant: 'default',
//     },
//   }
// );
const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-2.5 sm:px-3 py-1.5 sm:py-1 text-xs sm:text-sm font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 sm:gap-1.5 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',

        // 1. Success Variant (Green/Shear Stress style)
        success:
          'border-green-200 bg-green-100/50 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',

        // 2. Warning Variant (Orange/Bearing Stress style)
        warning:
          'border-orange-200 bg-orange-100/50 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
