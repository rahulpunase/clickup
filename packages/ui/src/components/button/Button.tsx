import { Button as Root } from '@base-ui/react/button';
import { buttonVariant } from "./variants";
import { VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof buttonVariant>;


type ButtonProps = {
  size: ButtonVariants['size'];
  variant: ButtonVariants['variant'];
  color: ButtonVariants['color'];
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({ size = 'md', variant = 'solid', color = 'primary', children, href, ...props }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} className={buttonVariant({ size, variant, color })} {...props}>
        {children}
      </a>
    )
  }
  return (
    <Root className={buttonVariant({ size, variant, color })} {...props}>
      {children}
    </Root>
  )
}

export { Button }