import { Menu } from '@base-ui/react/menu';
import { type IconName } from 'lucide-react/dynamic';
import React, { ComponentPropsWithoutRef } from 'react';
import { VariantProps } from 'tailwind-variants';

import { Icon } from '../icon/Icon';
import { dropdownMenuVariants } from './DropdownMenu.variants';

type ItemVariantProps = VariantProps<typeof dropdownMenuVariants>;

export type ItemProps = Omit<
  ComponentPropsWithoutRef<typeof Menu.Item>,
  'className'
> & {
  children: React.ReactNode;
  icon?: IconName;
  variant?: ItemVariantProps['variant'];
  className?: string;
};

const Label = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const { label } = dropdownMenuVariants();
  return (
    <span className={label({ className })} {...props}>
      {children}
    </span>
  );
};

const SubLabel = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const { subLabel } = dropdownMenuVariants();
  return (
    <span className={subLabel({ className })} {...props}>
      {children}
    </span>
  );
};

const RootItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ children, icon, variant, className, disabled, ...props }, ref) => {
    const { item, icon: iconClass } = dropdownMenuVariants({ variant });
    return (
      <Menu.Item
        ref={ref}
        className={item({ className })}
        disabled={disabled}
        {...props}
      >
        {icon && <Icon icon={icon} className={iconClass()} />}
        {children}
      </Menu.Item>
    );
  },
);
RootItem.displayName = 'DropdownMenu.Item';

export type SubmenuItemProps = Omit<
  ComponentPropsWithoutRef<typeof Menu.SubmenuTrigger>,
  'className'
> & {
  children: React.ReactNode;
  icon?: IconName;
  variant?: ItemVariantProps['variant'];
  className?: string;
};

const SubmenuTrigger = React.forwardRef<HTMLDivElement, SubmenuItemProps>(
  ({ children, icon, variant, className = '', disabled, ...props }, ref) => {
    const {
      item,
      icon: iconClass,
      submenuTrigger,
    } = dropdownMenuVariants({
      variant,
    });
    return (
      <Menu.SubmenuTrigger
        ref={ref}
        className={item({ className, class: submenuTrigger() }) as any}
        disabled={disabled}
        {...props}
      >
        <div className="flex items-center gap-2 flex-1">
          {icon && <Icon icon={icon} className={iconClass()} />}
          {children}
        </div>
        <Icon icon="chevron-right" className={iconClass()} />
      </Menu.SubmenuTrigger>
    );
  },
);
SubmenuTrigger.displayName = 'DropdownMenu.SubmenuItem';

export const Item = Object.assign(RootItem, {
  Label,
  SubLabel,
});

export const SubmenuItem = Object.assign(SubmenuTrigger, {
  Label,
  SubLabel,
});
