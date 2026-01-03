import { Menu } from '@base-ui/react/menu';
import React, { ComponentProps } from 'react';

import { extractChildren } from '../../utils/utils';
import Heading from '../typography/Heading';
import { Item, SubmenuItem } from './Item';

const DropdownRoot = ({ children }: { children: React.ReactNode }) => {
  return <Menu.Root>{children}</Menu.Root>;
};

const Separator = () => {
  return <Menu.Separator className="my-1 border-t border-gray-200" />;
};

const Submenu = Menu.SubmenuRoot;

type TriggerType = {
  children: React.ReactElement;
} & ComponentProps<typeof Menu.Trigger>;

const Trigger = ({ children, ...props }: TriggerType) => {
  return (
    <Menu.Trigger
      {...props}
      render={(props) => React.cloneElement(children, props)}
    />
  );
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-2 pt-2 pb-0">{children}</div>;
};

const Header = ({
  children,
  heading,
}: {
  children?: React.ReactNode;
  heading?: string;
}) => {
  if (heading) {
    return (
      <div className="pt-0 pb-2">
        <Heading size="h6" weight="medium">
          {heading}
        </Heading>
      </div>
    );
  }
  return <div className="p-2 pt-2 pb-0">{children}</div>;
};

type ContentProps = {
  children: React.ReactNode;
} & ComponentProps<typeof Menu.Positioner>;

const Content = ({ children, sideOffset = 8, ...props }: ContentProps) => {
  const { footer, header, remaining } = extractChildren(children, {
    footer: Footer,
    header: Header,
  });
  return (
    <Menu.Portal>
      <Menu.Positioner
        {...props}
        sideOffset={sideOffset}
        className="bg-background rounded-md shadow-lg py-2 px-1 border border-gray-200 max-w-72 "
      >
        <Menu.Popup>
          {header && <div className="pr-2 pl-2">{header}</div>}
          <div className="pr-1 pl-1">{remaining}</div>
          {footer && (
            <div className="mt-2 border-t border-gray-200">{footer}</div>
          )}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  );
};

const Dropdown = Object.assign(DropdownRoot, {
  Trigger,
  Content,
  Footer,
  Separator,
  Header,
  Item: Item,
  Submenu,
  SubmenuItem: SubmenuItem,
});

export { Dropdown };
