import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentProps } from 'react';

import { Button } from '../button';
import { ButtonGroup } from '../button-group/ButtonGroup';
import { DropdownMenu } from './DropdownMenu';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {},
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { children: null },
  render: () => (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Button>Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item icon="plus">
            <DropdownMenu.Item.Label>Add</DropdownMenu.Item.Label>
          </DropdownMenu.Item>
          <DropdownMenu.Item icon="circle-arrow-out-down-right">
            <div className="flex flex-col">
              <DropdownMenu.Item.Label>Move</DropdownMenu.Item.Label>
              <DropdownMenu.Item.SubLabel>
                Move to another list
              </DropdownMenu.Item.SubLabel>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item variant="danger" icon="trash">
            <DropdownMenu.Item.Label>Remove</DropdownMenu.Item.Label>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item disabled icon="circle-arrow-out-down-right">
            <div className="flex flex-col">
              <DropdownMenu.Item.Label>Move</DropdownMenu.Item.Label>
              <DropdownMenu.Item.SubLabel>
                Move to another list
              </DropdownMenu.Item.SubLabel>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Footer>
            <Button size="sm">Create</Button>
          </DropdownMenu.Footer>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  ),
};

export const WithButtonGroup: Story = {
  args: { children: null },
  render: () => (
    <div className="flex items-center justify-center">
      <ButtonGroup size="md">
        <Button>Create</Button>
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <Button icon="ellipsis-vertical" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Header heading="Dropdown Menu" />
            <DropdownMenu.Separator />
            <DropdownMenu.Item icon="plus">
              <DropdownMenu.Item.Label>Add</DropdownMenu.Item.Label>
            </DropdownMenu.Item>
            <DropdownMenu.Item icon="circle-arrow-out-down-right">
              <div className="flex flex-col">
                <DropdownMenu.Item.Label>Move</DropdownMenu.Item.Label>
                <DropdownMenu.Item.SubLabel>
                  Move to another list
                </DropdownMenu.Item.SubLabel>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item variant="danger" icon="trash">
              <DropdownMenu.Item.Label>Remove</DropdownMenu.Item.Label>
            </DropdownMenu.Item>
            <DropdownMenu.Item disabled icon="circle-arrow-out-down-right">
              <div className="flex flex-col">
                <DropdownMenu.Item.Label>Disabled</DropdownMenu.Item.Label>
                <DropdownMenu.Item.SubLabel>
                  This item is completely disabled
                </DropdownMenu.Item.SubLabel>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Footer>
              <div className="flex gap-2">
                <Button size="sm">Create</Button>
                <Button size="sm" color="secondary">
                  Cancel
                </Button>
              </div>
            </DropdownMenu.Footer>
          </DropdownMenu.Content>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  ),
};

const AlignedDropdown = ({
  align,
}: {
  align: ComponentProps<typeof DropdownMenu.Content>['align'];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <Button>{align}</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align={align}>
        <DropdownMenu.Item icon="plus">
          <DropdownMenu.Item.Label>Add</DropdownMenu.Item.Label>
        </DropdownMenu.Item>
        <DropdownMenu.Item icon="circle-arrow-out-down-right">
          <div className="flex flex-col">
            <DropdownMenu.Item.Label>Move</DropdownMenu.Item.Label>
            <DropdownMenu.Item.SubLabel>
              Move to another list
            </DropdownMenu.Item.SubLabel>
          </div>
        </DropdownMenu.Item>
        <DropdownMenu.Item variant="danger" icon="trash">
          <DropdownMenu.Item.Label>Remove</DropdownMenu.Item.Label>
        </DropdownMenu.Item>
        <DropdownMenu.Footer>
          <Button size="sm">Create</Button>
        </DropdownMenu.Footer>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

export const Alignment: Story = {
  args: { children: null },
  render: () => (
    <div className="flex items-center justify-center gap-4">
      <AlignedDropdown align="start" />
      <AlignedDropdown align="end" />
    </div>
  ),
};

export const WithSubmenu: Story = {
  args: { children: null },
  render: () => (
    <div>
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Button>Open</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item icon="plus">
            <DropdownMenu.Item.Label>Add</DropdownMenu.Item.Label>
          </DropdownMenu.Item>
          <DropdownMenu.Item icon="circle-arrow-out-down-right">
            <div className="flex flex-col">
              <DropdownMenu.Item.Label>Move</DropdownMenu.Item.Label>
              <DropdownMenu.Item.SubLabel>
                Move to another list
              </DropdownMenu.Item.SubLabel>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Submenu>
            <DropdownMenu.SubmenuItem icon="user">
              <DropdownMenu.Item.Label>Submenu</DropdownMenu.Item.Label>
            </DropdownMenu.SubmenuItem>
            <DropdownMenu.Content>
              <DropdownMenu.Item icon="plus">
                <DropdownMenu.Item.Label>Add</DropdownMenu.Item.Label>
              </DropdownMenu.Item>
              <DropdownMenu.Item icon="circle-arrow-out-down-right">
                <div className="flex flex-col">
                  <DropdownMenu.Item.Label>Move</DropdownMenu.Item.Label>
                  <DropdownMenu.Item.SubLabel>
                    Move to another list
                  </DropdownMenu.Item.SubLabel>
                </div>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Submenu>
          <DropdownMenu.Separator />
          <DropdownMenu.Footer>
            <Button size="sm">Create</Button>
          </DropdownMenu.Footer>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  ),
};
