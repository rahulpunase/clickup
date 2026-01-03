import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'plain'],
    },
    icon: {
      control: 'radio',
      options: ['activity', 'user', 'app-window'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
  render: (args) => <Input {...args} placeholder="Enter your name" />,
};

export const WithIcon: Story = {
  args: {
    size: 'md',
    variant: 'default',
    icon: 'activity',
  },
  render: (args) => (
    <Input {...args} placeholder="Enter your name">
      <Input.Actions>
        <Input.Actions.Cross />
      </Input.Actions>
    </Input>
  ),
};

export const WithActions: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
  render: (args) => (
    <Input {...args} placeholder="Enter your name">
      <Input.Actions>
        <Input.Actions.Cross />
      </Input.Actions>
    </Input>
  ),
};
