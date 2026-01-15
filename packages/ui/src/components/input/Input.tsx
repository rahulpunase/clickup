import * as Root from '@base-ui/react/input';
import { type IconName } from 'lucide-react/dynamic';
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { Icon } from '../icon/Icon';
import { inputVariants } from './Input.variants';

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string | React.ReactNode;
  leftIcon?: IconName;
  rightIcon?: IconName;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      labelPosition,
      leftIcon,
      rightIcon,
      label,
      error,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = React.useId();
    const finalId = id || inputId;

    const {
      root,
      wrapper,
      input,
      icon,
      label: labelStyles,
    } = inputVariants({
      variant,
      labelPosition,
      hasLeftIcon: !!leftIcon,
      hasRightIcon: !!rightIcon,
      error: !!error,
    });

    return (
      <div className={root({ className })}>
        {label && (
          <label htmlFor={finalId} className={labelStyles()}>
            {label}
          </label>
        )}
        <div className={wrapper()}>
          {leftIcon && (
            <Icon icon={leftIcon} className={icon({ className: 'left-3' })} />
          )}
          <Root.Input ref={ref} id={finalId} className={input()} {...props} />
          {rightIcon && (
            <Icon icon={rightIcon} className={icon({ className: 'right-3' })} />
          )}
        </div>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
