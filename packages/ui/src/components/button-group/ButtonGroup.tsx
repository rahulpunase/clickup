import React from 'react';
import { cn } from 'tailwind-variants';

type ButtonGroupProps = {
  size: 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLDivElement>;

const ButtonGroup = ({ size = 'md', children, ...props }: ButtonGroupProps) => {
  if (!children) {
    throw new Error('ButtonGroup requires at least 2 buttons');
  }

  return (
    <div
      {...props}
      className={cn(
        'flex flex-row',
        '[&>button:first-of-type]:rounded-r-none [&>button:last-of-type]:rounded-l-none',
        '[&>button:not(:first-of-type):not(:last-of-type)]:rounded-none',
        '[&>button:not(:first-of-type):not(:last-of-type)]:border-r-0',
        '[&>button:first-of-type]:border-r-0',
      )}
      role="group"
    >
      {children}
    </div>
  );
};

export { ButtonGroup };
