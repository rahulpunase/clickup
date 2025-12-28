import { Menu } from '@base-ui/react/menu';
import { DynamicIcon } from 'lucide-react/dynamic';
import React, { ComponentProps } from 'react';
import { cn } from 'tailwind-variants';

import { extractChildrenOfType } from '../../utils/utils';
import { Icon } from '../icon/Icon';
import { itemVariants } from './variants';

export type ItemProps<T extends ComponentProps<typeof Menu.Item>> = {
  children: React.ReactNode;
  icon?: ComponentProps<typeof DynamicIcon>['name'];
  variant?: 'default' | 'danger';
  disabled?: boolean;
} & T;

const Label = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-sm">{children}</span>;
};

const SubLabel = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-xs text-gray-500">{children}</span>;
};

const RootItem = <T extends ComponentProps<typeof Menu.Item>>({
  children,
  icon,
  variant,
  disabled,
  ...props
}: ItemProps<T>) => {
  const { label, subLabel } = extractChildrenOfType(children, {
    label: Label,
    subLabel: SubLabel,
  });
  return (
    <Menu.Item
      className={cn(
        itemVariants({ variant }),
        {
          'cursor-not-allowed opacity-50': disabled,
        },
        'outline:outline-1 outline-blue-300 outline-offset-2',
      )}
      {...props}
    >
      {icon && <Icon icon={icon} size="md" />}
      <div className="flex flex-col">
        {label}
        {subLabel}
      </div>
    </Menu.Item>
  );
};

export type SubmenuItemProps = {
  children: React.ReactNode;
  icon?: ComponentProps<typeof DynamicIcon>['name'];
  variant?: 'default' | 'danger';
  disabled?: boolean;
} & ComponentProps<typeof Menu.SubmenuTrigger>;

const SubmenuTrigger = ({
  children,
  icon,
  variant,
  disabled,
  ...props
}: SubmenuItemProps) => {
  const { label, subLabel } = extractChildrenOfType(children, {
    label: Label,
    subLabel: SubLabel,
  });
  return (
    <Menu.SubmenuTrigger
      className={cn(
        itemVariants({ variant }),
        {
          'cursor-not-allowed opacity-50': disabled,
        },
        'outline:outline-1 outline-blue-300 outline-offset-2',
      )}
      {...props}
    >
      {icon && <Icon icon={icon} size="md" />}
      <div className="flex flex-col">
        {label}
        {subLabel}
      </div>
      <div className="ml-auto">
        <Icon icon="chevron-right" size="md" />
      </div>
    </Menu.SubmenuTrigger>
  );
};

const Item = Object.assign(RootItem, {
  displayName: 'Dropdown.Item',
  Label,
  SubLabel,
});

const SubmenuItem = Object.assign(SubmenuTrigger, {
  displayName: 'Dropdown.Submenu',
  Label,
  SubLabel,
});

export { Item, SubmenuItem };
