import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { tv, VariantProps } from 'tailwind-variants';

const iconVariants = tv({
  base: '',
  variants: {
    size: {
      xs: 'w-2 h-2',
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6',
      '2xl': 'w-7 h-7',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type IconProps = {
  icon: IconName;
  size?: VariantProps<typeof iconVariants>['size'];
};

/**
 * Icon component
 * @param icon - Icon name
 * @param size - Icon size
 * @returns Icon component
 */
const Icon = ({ icon, size = 'md' }: IconProps) => {
  return <DynamicIcon name={icon} className={iconVariants({ size })} />;
};

export { Icon };
