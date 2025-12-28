import React from 'react';
import { cx, tv, VariantProps } from 'tailwind-variants';

const textVariants = tv({
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    color: {
      default: 'text-gray-800',
      disabled: 'text-gray-400',
      danger: 'text-rose-500',
      success: 'text-emarald-500',
      warning: 'text-orange-500',
    },
    weight: {
      normal: 'font-normal',
      thin: 'font-thin',
      light: 'font-light',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
    weight: 'normal',
  },
});

type TextType = {
  as?: React.ElementType;
  size?: VariantProps<typeof textVariants>['size'];
  color?: VariantProps<typeof textVariants>['color'];
  italic?: boolean;
  weight?: VariantProps<typeof textVariants>['weight'];
} & React.HTMLAttributes<HTMLElement>;

const Text = ({
  as: Component = 'span',
  size,
  color,
  italic,
  weight,
  ...props
}: TextType) => {
  return React.createElement(Component, {
    className: cx(textVariants({ size, color, weight }), italic && 'italic'),
    ...props,
  });
};

export default Text;
