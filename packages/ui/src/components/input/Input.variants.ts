import { tv } from 'tailwind-variants';

export const inputVariants = tv({
  slots: {
    root: 'group flex flex-col gap-1.5',
    wrapper: 'relative flex items-center w-full',
    input: [
      'flex w-full rounded-md bg-white px-3 py-2 text-sm',
      'placeholder:text-gray-400',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    icon: 'absolute text-gray-400 pointer-events-none',
    label:
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300',
  },
  variants: {
    variant: {
      bordered: {
        input: 'border border-gray-200 focus-visible:ring-blue-600',
      },
      nonBordered: {
        input:
          'border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600',
      },
    },
    labelPosition: {
      stacked: {
        root: 'flex-col',
      },
      inline: {
        root: 'flex-row items-center gap-3',
        label: 'w-fit whitespace-nowrap',
      },
    },
    hasLeftIcon: {
      true: {
        input: 'pl-9',
      },
    },
    hasRightIcon: {
      true: {
        input: 'pr-9',
      },
    },
    error: {
      true: {
        input: 'border-red-500 focus-visible:ring-red-500',
        label: 'text-red-500',
        icon: 'text-red-500',
      },
    },
  },
  defaultVariants: {
    variant: 'bordered',
    labelPosition: 'stacked',
  },
});
