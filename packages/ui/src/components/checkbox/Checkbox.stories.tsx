import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the checkbox.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state of the checkbox.',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  args: {
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="sm" size="sm" defaultChecked />
        <label htmlFor="sm" className="text-xs">
          Small
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="md" size="md" defaultChecked />
        <label htmlFor="md" className="text-sm">
          Medium
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="lg" size="lg" defaultChecked />
        <label htmlFor="lg" className="text-base">
          Large
        </label>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <label htmlFor="disabled" className="text-sm text-gray-400">
          Disabled Unchecked
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <label htmlFor="disabled-checked" className="text-sm text-gray-400">
          Disabled Checked
        </label>
      </div>
    </div>
  ),
};
