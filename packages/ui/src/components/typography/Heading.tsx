import React from 'react';
import { cx, tv } from 'tailwind-variants';

type HeadingType = {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'bold' | 'medium' | 'normal';
} & React.HTMLAttributes<HTMLHeadingElement>;

const headingVariants = tv({
  variants: {
    size: {
      h1: 'text-3xl',
      h2: 'text-2xl',
      h3: 'text-xl',
      h4: 'text-lg',
      h5: 'text-base',
      h6: 'text-sm',
    },
    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
  },
});

const Heading = ({ size = 'h1', weight = 'bold', ...props }: HeadingType) => {
  return React.createElement(size, {
    className: cx(headingVariants({ size, weight }), props.className),
    ...props,
  });
};

export default Heading;
