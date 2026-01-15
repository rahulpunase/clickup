import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bordered', 'nonBordered'],
    },
    labelPosition: {
      control: 'select',
      options: ['stacked', 'inline'],
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    leftIcon: {
      control: 'select',
      options: ['Search', 'User', 'Mail', 'Lock'],
    },
    rightIcon: {
      control: 'select',
      options: ['Search', 'User', 'Mail', 'Lock', 'X'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    variant: 'bordered',
    labelPosition: 'stacked',
  },
};

export const NonBordered: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    variant: 'nonBordered',
  },
};

export const InlineLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    labelPosition: 'inline',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: 'Search',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    rightIcon: 'Eye',
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Email',
    placeholder: 'Checking...',
    leftIcon: 'Mail',
    rightIcon: 'Check',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    error: true,
    placeholder: 'Enter email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here',
    disabled: true,
  },
};
