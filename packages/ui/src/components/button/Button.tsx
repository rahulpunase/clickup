import { Button as Root } from '@base-ui/react/button';
import { DynamicIcon } from 'lucide-react/dynamic';
import { ComponentProps } from 'react';
import { cn, VariantProps } from 'tailwind-variants';

import { Icon } from '../icon/Icon';
import { buttonVariant } from './variants';

type ButtonVariants = VariantProps<typeof buttonVariant>;

type ButtonProps = {
  size?: ButtonVariants['size'];
  variant?: ButtonVariants['variant'];
  color?: ButtonVariants['color'];
  icon?: ComponentProps<typeof DynamicIcon>['name'];
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({
  size = 'md',
  variant = 'solid',
  color = 'primary',
  icon,
  className,
  children,
  href,
  ...props
}: ButtonProps) => {
  const finalChildren = (
    <div className="flex justify-between items-center gap-2">
      {icon && <Icon icon={icon} size={size} />}
      {children}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(buttonVariant({ size, variant, color }), className)}
        {...props}
      >
        {finalChildren}
      </a>
    );
  }
  return (
    <Root
      className={cn(buttonVariant({ size, variant, color }), className)}
      {...props}
    >
      {finalChildren}
    </Root>
  );
};

export { Button };
