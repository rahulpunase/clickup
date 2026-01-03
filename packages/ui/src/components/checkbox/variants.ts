import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  slots: {
    root: [
      'peer inline-flex shrink-0 items-center justify-center rounded-sm border border-neutral-300 ring-offset-white',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-neutral-900 data-[state=checked]:text-neutral-50 data-[state=checked]:border-neutral-900',
    ],
    indicator: 'flex items-center justify-center text-current',
  },
  variants: {
    size: {
      sm: {
        root: 'h-4 w-4',
        indicator: 'h-3 w-3',
      },
      md: {
        root: 'h-5 w-5',
        indicator: 'h-4 w-4',
      },
      lg: {
        root: 'h-6 w-6',
        indicator: 'h-5 w-5',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
