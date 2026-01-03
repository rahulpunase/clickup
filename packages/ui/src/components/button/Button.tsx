import { Button as Root } from '@base-ui/react/button';
import { type IconName } from 'lucide-react/dynamic';
import { forwardRef } from 'react';
import { cn, VariantProps } from 'tailwind-variants';

import { Icon } from '../icon/Icon';
import { buttonVariant } from './variants';

type ButtonVariants = VariantProps<typeof buttonVariant>;

type ButtonProps = {
  size?: ButtonVariants['size'];
  variant?: ButtonVariants['variant'];
  color?: ButtonVariants['color'];
  icon?: IconName;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      size = 'md',
      variant = 'solid',
      color = 'primary',
      icon,
      className,
      children,
      href,
      ...props
    },
    ref,
  ) {
    const finalChildren = (
      <div className="flex justify-between items-center gap-2">
        {icon && <Icon icon={icon} size={size} />}
        {children}
      </div>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cn(buttonVariant({ size, variant, color }), className)}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {finalChildren}
        </a>
      );
    }
    return (
      <Root
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(buttonVariant({ size, variant, color }), className)}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {finalChildren}
      </Root>
    );
  },
);

Button.displayName = 'Button';

export { Button };
