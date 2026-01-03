import { Menu } from '@base-ui/react/menu';
import React, { ComponentProps, ComponentPropsWithoutRef } from 'react';
import { VariantProps } from 'tailwind-variants';

import { dropdownMenuVariants } from './DropdownMenu.variants';
import { Item, SubmenuItem } from './Item';

const DropdownMenuRoot = ({ children }: { children: React.ReactNode }) => {
  return <Menu.Root>{children}</Menu.Root>;
};

const Separator = ({
  className,
  ...props
}: ComponentProps<typeof Menu.Separator> & { className?: string }) => {
  const { separator } = dropdownMenuVariants();
  return <Menu.Separator className={separator({ className })} {...props} />;
};

const Submenu = Menu.SubmenuRoot;

type TriggerProps = ComponentPropsWithoutRef<typeof Menu.Trigger> & {
  children: React.ReactElement;
  className?: string; // Explicitly override className
};

const Trigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Menu.Trigger
        ref={ref}
        className={className}
        {...props}
        render={(props) => React.cloneElement(children, props)}
      />
    );
  },
);
Trigger.displayName = 'DropdownMenu.Trigger';

type FooterProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dropdownMenuVariants>;

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, ...props }, ref) => {
    const { footer } = dropdownMenuVariants();
    return (
      <div ref={ref} className={footer({ className })} {...props}>
        {children}
      </div>
    );
  },
);
Footer.displayName = 'DropdownMenu.Footer';

type HeaderProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dropdownMenuVariants> & {
    heading?: string;
  };

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, heading, className, ...props }, ref) => {
    const { header } = dropdownMenuVariants();
    return (
      <div ref={ref} className={header({ className })} {...props}>
        {heading || children}
      </div>
    );
  },
);
Header.displayName = 'DropdownMenu.Header';

type ContentProps = Omit<
  ComponentPropsWithoutRef<typeof Menu.Positioner>,
  'className'
> &
  VariantProps<typeof dropdownMenuVariants> & { className?: string };

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, sideOffset = 8, className, ...props }, ref) => {
    const { menu } = dropdownMenuVariants();
    return (
      <Menu.Portal>
        <Menu.Positioner
          ref={ref}
          sideOffset={sideOffset}
          className={menu({ className })}
          {...props}
        >
          <Menu.Popup>{children}</Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    );
  },
);
Content.displayName = 'DropdownMenu.Content';

const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger,
  Content,
  Footer,
  Separator,
  Header,
  Item,
  Submenu,
  SubmenuItem,
});

export { DropdownMenu };
