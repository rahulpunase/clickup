import { cx, tv } from 'tailwind-variants';

const buttonVariant = tv({
  base: cx(
    // base
    'rounded-2xl px-4 text-sm flex items-center justify-center cursor-pointer box-border',
    'transition-colors duration-100 ease-in-out',
    // disabled
    'disabled:opacity-50 disabled:cursor-not-allowed',
    // outline
    'outline:outline-1 outline-blue-300 outline-offset-2',
  ),
  variants: {
    size: {
      sm: 'text-xs h-6',
      md: 'text-sm h-7',
      lg: 'text-sm h-8',
    },
    color: {
      primary: '',
      secondary: '',
      danger: '',
      success: '',
      warning: '',
    },
    variant: {
      solid: 'bg-none',
      outline:
        'shadow-none border-t-[1px] border-s-[1px] border-e-[1px] border-b-[1px]',
      ghost: 'shadow-none',
      link: 'shadow-none hover:underline',
    },
  },
  compoundVariants: [
    // solid
    {
      variant: 'solid',
      color: 'primary',
      className:
        'bg-primary text-white hover:bg-primary-dark border-primary hover:border-primary-dark',
    },
    {
      variant: 'solid',
      color: 'secondary',
      className:
        'bg-secondary hover:bg-secondary-dark border-secondary hover:border-secondary-hover',
    },
    {
      variant: 'solid',
      color: 'danger',
      className:
        'bg-rose-500 text-white hover:bg-rose-600 border-rose-500 hover:border-rose-600',
    },
    {
      variant: 'solid',
      color: 'success',
      className:
        'bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-500 hover:border-emerald-600',
    },
    {
      variant: 'solid',
      color: 'warning',
      className:
        'bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600',
    },
    // outline
    {
      variant: 'outline',
      color: 'primary',
      className:
        'text-primary border-primary hover:border-primary-dark hover:text-primary-hover hover:bg-primary-lightest',
    },
    {
      variant: 'outline',
      color: 'secondary',
      className:
        'text-gray-700 border-secondary hover:border-secondary-dark hover:text-gray-800 hover:bg-secondary-lightest',
    },
    {
      variant: 'outline',
      color: 'danger',
      className:
        'text-rose-500 border-rose-500 hover:border-rose-600 hover:text-rose-600',
    },
    {
      variant: 'outline',
      color: 'success',
      className:
        'text-emerald-500 border-emerald-500 hover:border-emerald-600 hover:text-emerald-600',
    },
    {
      variant: 'outline',
      color: 'warning',
      className:
        'text-yellow-500 border-yellow-500 hover:border-yellow-600 hover:text-yellow-600',
    },
    // ghost
    {
      variant: 'ghost',
      color: 'primary',
      className: 'text-primary border-primary hover:bg-primary-lightest',
    },
    {
      variant: 'ghost',
      color: 'secondary',
      className:
        'text-gray-800 border-gray-400 hover:border-gray-400 hover:bg-gray-50',
    },
    {
      variant: 'ghost',
      color: 'danger',
      className:
        'text-rose-500 border-rose-500 hover:border-rose-500 hover:bg-rose-50',
    },
    {
      variant: 'ghost',
      color: 'success',
      className:
        'text-emerald-500 border-emerald-500 hover:border-emerald-500 hover:bg-emerald-50',
    },
    {
      variant: 'ghost',
      color: 'warning',
      className:
        'text-yellow-500 border-yellow-500 hover:border-yellow-500 hover:bg-yellow-50',
    },
    // link
    {
      variant: 'link',
      color: 'primary',
      className: 'text-primary hover:text-primary-hover',
    },
    {
      variant: 'link',
      color: 'secondary',
      className: '',
    },
    {
      variant: 'link',
      color: 'danger',
      className: 'text-rose-500 hover:text-rose-600',
    },
    {
      variant: 'link',
      color: 'success',
      className: 'text-emerald-500 hover:text-emerald-600',
    },
    {
      variant: 'link',
      color: 'warning',
      className: 'text-yellow-500 hover:text-yellow-600',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
});

export { buttonVariant };
