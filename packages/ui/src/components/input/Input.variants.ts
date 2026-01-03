import { cx, tv } from 'tailwind-variants';

const inputVariants = tv({
  base: cx(
    'flex items-center gap-2 rounded-md text-sm w-full',
    'outline:outline-1 outline-blue-300 outline-offset-2',
  ),
  variants: {
    variant: {
      default: `border border-gray-200`,
      plain: '',
    },
    size: {
      md: 'p-2',
      sm: 'p-1',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export { inputVariants };
