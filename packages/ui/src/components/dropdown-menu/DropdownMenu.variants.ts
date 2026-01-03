import { tv } from 'tailwind-variants';

export const dropdownMenuVariants = tv({
  slots: {
    menu: [
      'z-50 min-w-[12rem] overflow-hidden rounded-md border border-gray-200',
      'bg-white p-1 text-slate-950 shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
    ],
    item: [
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
      'focus:bg-gray-100 focus:text-gray-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'dark:focus:bg-slate-800 dark:focus:text-slate-50',
    ],
    label: 'flex-1 text-sm font-medium',
    subLabel: 'text-xs text-gray-500 dark:text-gray-400',
    separator: '-mx-1 my-1 h-px bg-gray-200 dark:bg-slate-800',
    header: 'px-2 py-1.5 text-sm font-semibold',
    footer: 'px-2 py-1.5 text-sm pt-2',
    icon: 'h-4 w-4',
    submenuTrigger: 'flex w-full items-center justify-between',
  },
  variants: {
    variant: {
      default: {},
      danger: {
        item: [
          'text-rose-600',
          'focus:bg-rose-50 focus:text-rose-700',
          'dark:text-rose-500 dark:focus:bg-rose-950/50 dark:focus:text-rose-400',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
