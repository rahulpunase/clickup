import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentProps } from 'react';

import { Button } from '../button';
import { ButtonGroup } from '../button-group/ButtonGroup';
import { Dropdown } from '../dropdown-menu/DropdownMenu';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Dropdown Menu',
  component: Dropdown,
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args) => (
    <div className="flex items-center justify-center">
      <Dropdown>
        <Dropdown.Trigger>
          <Button>Open</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item icon="plus">
            <Dropdown.Item.Label>Add</Dropdown.Item.Label>
          </Dropdown.Item>
          <Dropdown.Item icon="circle-arrow-out-down-right">
            <Dropdown.Item.Label>Move</Dropdown.Item.Label>
            <Dropdown.Item.SubLabel>
              Move to another list
            </Dropdown.Item.SubLabel>
          </Dropdown.Item>
          <Dropdown.Item variant="danger" icon="trash">
            <Dropdown.Item.Label>Remove</Dropdown.Item.Label>
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item disabled icon="circle-arrow-out-down-right">
            <Dropdown.Item.Label>Move</Dropdown.Item.Label>
            <Dropdown.Item.SubLabel>
              Move to another list
            </Dropdown.Item.SubLabel>
          </Dropdown.Item>
          <Dropdown.Footer>
            <Button size="sm">Create</Button>
          </Dropdown.Footer>
        </Dropdown.Content>
      </Dropdown>
    </div>
  ),
};

export const WithButtonGroup: Story = {
  render: (args) => (
    <div className="flex items-center justify-center">
      <ButtonGroup size="md">
        <Button>Create</Button>
        <Dropdown>
          <Dropdown.Trigger>
            <Button icon="ellipsis-vertical" />
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Header heading="Dropdown Menu" />
            <Dropdown.Item icon="plus">
              <Dropdown.Item.Label>Add</Dropdown.Item.Label>
            </Dropdown.Item>
            <Dropdown.Item icon="circle-arrow-out-down-right">
              <Dropdown.Item.Label>Move</Dropdown.Item.Label>
              <Dropdown.Item.SubLabel>
                Move to another list
              </Dropdown.Item.SubLabel>
            </Dropdown.Item>
            <Dropdown.Item variant="danger" icon="trash">
              <Dropdown.Item.Label>Remove</Dropdown.Item.Label>
            </Dropdown.Item>
            <Dropdown.Item disabled icon="circle-arrow-out-down-right">
              <Dropdown.Item.Label>Disabled</Dropdown.Item.Label>
              <Dropdown.Item.SubLabel>
                This item is completely disabled
              </Dropdown.Item.SubLabel>
            </Dropdown.Item>
            <Dropdown.Footer>
              <ButtonGroup size="sm">
                <Button size="sm">Create</Button>
                <Button size="sm" color="danger">
                  Cancel
                </Button>
              </ButtonGroup>
            </Dropdown.Footer>
          </Dropdown.Content>
        </Dropdown>
      </ButtonGroup>
    </div>
  ),
};

const AlignedDropdown = ({
  align,
}: {
  align: ComponentProps<typeof Dropdown.Content>['align'];
}) => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>{align}</Button>
      </Dropdown.Trigger>
      <Dropdown.Content align={align}>
        <Dropdown.Item icon="plus">
          <Dropdown.Item.Label>Add</Dropdown.Item.Label>
        </Dropdown.Item>
        <Dropdown.Item icon="circle-arrow-out-down-right">
          <Dropdown.Item.Label>Move</Dropdown.Item.Label>
          <Dropdown.Item.SubLabel>Move to another list</Dropdown.Item.SubLabel>
        </Dropdown.Item>
        <Dropdown.Item variant="danger" icon="trash">
          <Dropdown.Item.Label>Remove</Dropdown.Item.Label>
        </Dropdown.Item>
        <Dropdown.Item disabled icon="circle-arrow-out-down-right">
          <Dropdown.Item.Label>Move</Dropdown.Item.Label>
          <Dropdown.Item.SubLabel>Move to another list</Dropdown.Item.SubLabel>
        </Dropdown.Item>
        <Dropdown.Footer>
          <Button size="sm">Create</Button>
        </Dropdown.Footer>
      </Dropdown.Content>
    </Dropdown>
  );
};

export const Alignment: Story = {
  render: (args) => (
    <div className="flex items-center justify-center gap-4">
      <AlignedDropdown align="start" />
      <AlignedDropdown align="end" />
    </div>
  ),
};

export const WithSubmenu: Story = {
  render: (args) => (
    <div>
      <Dropdown>
        <Dropdown.Trigger>
          <Button>Open</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item icon="plus">
            <Dropdown.Item.Label>Add</Dropdown.Item.Label>
          </Dropdown.Item>
          <Dropdown.Item icon="circle-arrow-out-down-right">
            <Dropdown.Item.Label>Move</Dropdown.Item.Label>
            <Dropdown.Item.SubLabel>
              Move to another list
            </Dropdown.Item.SubLabel>
          </Dropdown.Item>
          <Dropdown.Item variant="danger" icon="trash">
            <Dropdown.Item.Label>Remove</Dropdown.Item.Label>
          </Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Submenu>
            <Dropdown.SubmenuItem>
              <Dropdown.Item.Label>Submenu</Dropdown.Item.Label>
            </Dropdown.SubmenuItem>
            <Dropdown.Content>
              <Dropdown.Item icon="plus">
                <Dropdown.Item.Label>Add</Dropdown.Item.Label>
              </Dropdown.Item>
              <Dropdown.Item icon="circle-arrow-out-down-right">
                <Dropdown.Item.Label>Move</Dropdown.Item.Label>
                <Dropdown.Item.SubLabel>
                  Move to another list
                </Dropdown.Item.SubLabel>
              </Dropdown.Item>
              <Dropdown.Item variant="danger" icon="trash">
                <Dropdown.Item.Label>Remove</Dropdown.Item.Label>
              </Dropdown.Item>
              <Dropdown.Item disabled icon="circle-arrow-out-down-right">
                <Dropdown.Item.Label>Move</Dropdown.Item.Label>
                <Dropdown.Item.SubLabel>
                  Move to another list
                </Dropdown.Item.SubLabel>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Submenu>
          <Dropdown.Footer>
            <Button size="sm">Create</Button>
          </Dropdown.Footer>
        </Dropdown.Content>
      </Dropdown>
    </div>
  ),
};
