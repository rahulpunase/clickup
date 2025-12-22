import { Menu } from '@base-ui/react/menu';
import React, { ComponentProps } from 'react';
import { itemVariants } from './variants';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Icon } from '../icon/Icon';

/**
 * <Dropdown>
 *  <Dropdown.Trigger asChild>
 *      <Button>Open</Button>
 *  </Dropdown.Trigger>
 *  <Dropdown.Content>
 *      <Dropdown.Item></Dropdown.Item>
 *  </Dropdown.Content>
 * </Dropdown>
*/
const DropdownRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <Menu.Root>
            {children}
        </Menu.Root>
    )
}

type TriggerType = {
    children: React.ReactElement
} & ComponentProps<typeof Menu.Trigger>

const Trigger = ({ children, ...props }: TriggerType) => {
    return (
        <Menu.Trigger {...props} render={(props) => React.cloneElement(children, props)} />
    )
}

const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <Menu.Portal>
            <Menu.Positioner sideOffset={8} className='bg-white rounded-md shadow-lg p-1'>
                <Menu.Popup>
                    {children}
                </Menu.Popup>
            </Menu.Positioner>
        </Menu.Portal>
    )
}

type ItemType = {
    children: React.ReactNode,
    icon?: ComponentProps<typeof DynamicIcon>['name'];
    variant?: "default" | "danger"
}

const Item = ({ children, icon, variant = "default" }: ItemType) => {
    return (
        <Menu.Item className={itemVariants({ variant })}>
            {icon && <Icon icon={icon} size='md' />}
            {children}
        </Menu.Item>
    )
}

const Dropdown = Object.assign(DropdownRoot, {
    Trigger,
    Content,
    Item,
})

export { Dropdown, }
