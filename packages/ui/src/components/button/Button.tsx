import { Button as Root } from '@base-ui/react/button';
import { buttonVariant } from "./variants";
import { VariantProps } from 'tailwind-variants';
import { ComponentProps } from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Icon } from '../icon/Icon';

type ButtonVariants = VariantProps<typeof buttonVariant>;


type ButtonProps = {
  size?: ButtonVariants['size'];
  variant?: ButtonVariants['variant'];
  color?: ButtonVariants['color'];
  icon?: ComponentProps<typeof DynamicIcon>['name'];
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({ size = 'md', variant = 'solid', color = 'primary', icon, className, children, href, ...props }: ButtonProps) => {

  const finalChildren = (
    <div className="flex justify-between items-center gap-2">
      {icon && <Icon icon={icon} size={size} />}
      {children}
    </div>
  )

  if (href) {
    return (
      <a href={href} className={buttonVariant({ size, variant, color }) + ' ' + className} {...props}>
        {finalChildren}
      </a>
    )
  }
  return (
    <Root className={buttonVariant({ size, variant, color }) + ' ' + className} {...props}>
      {finalChildren}
    </Root>
  )
}

export { Button }