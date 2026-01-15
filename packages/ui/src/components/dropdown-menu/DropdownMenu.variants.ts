import { tv } from 'tailwind-variants';

export const dropdownMenuVariants = tv({
  slots: {
    menu: [
      'z-50 min-w-[12rem] overflow-hidden rounded-md border border-stroke-main',
      'bg-background p-1 text-slate-950 shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    item: [
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
      'focus:bg-background-hover focus:text-gray-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    label: 'flex-1 text-sm font-medium',
    subLabel: 'text-xs text-gray-500',
    separator: '-mx-1 my-1 h-px bg-stroke-main',
    header: 'px-2 py-1.5 text-sm font-semibold',
    footer: 'px-2 py-1.5 text-sm pt-2',
    icon: 'h-4 w-4',
    submenuTrigger: 'flex w-full items-center justify-between',
  },
  variants: {
    variant: {
      default: {},
      danger: {
        item: ['text-rose-600', 'focus:bg-rose-50 focus:text-rose-700'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
