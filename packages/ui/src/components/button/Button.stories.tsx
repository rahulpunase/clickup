import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Design System/Button',
  component: Button,
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
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'radio',
      options: ['solid', 'outline', 'ghost', 'link'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
    },
    icon: {
      control: 'radio',
      options: ['activity', 'user', 'app-window'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Primary button',
    size: 'md',
    variant: 'outline',
    color: 'primary',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Button',
    size: 'md',
    variant: 'solid',
    color: 'primary',
  },
  render: (args) => (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-2 items-center justify-center">
        <Button {...args} size="sm" />
        <Button {...args} />
        <Button {...args} size="lg" />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Button {...args} size="sm" variant="outline" />
        <Button {...args} variant="outline" />
        <Button {...args} size="lg" variant="outline" />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Button {...args} size="sm" variant="ghost" />
        <Button {...args} variant="ghost" />
        <Button {...args} size="lg" variant="ghost" />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Button {...args} size="sm" variant="link" />
        <Button {...args} variant="link" />
        <Button {...args} size="lg" variant="link" />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  args: {
    size: 'lg',
    variant: 'solid',
    color: 'primary',
  },
  render: (args) => (
    <div className="flex gap-2 items-center justify-center">
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="danger">
        Danger
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  args: {
    children: 'Button',
    size: 'lg',
    variant: 'outline',
    color: 'primary',
  },
  render: (args) => (
    <div className="flex gap-2 items-center justify-center">
      <Button {...args} variant="solid">
        Solid
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    size: 'lg',
    variant: 'solid',
    color: 'primary',
    icon: 'activity',
  },
  render: (args) => (
    <div className="flex gap-2 flex-col">
      <div className="flex flex-row gap-2 items-center justify-center">
        <Button {...args} icon="activity" size="sm">
          Activity
        </Button>
        <Button {...args} icon="user" size="sm">
          User
        </Button>
        <Button {...args} icon="app-window" size="sm">
          App Window
        </Button>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <Button {...args} icon="activity" size="md">
          Activity
        </Button>
        <Button {...args} icon="user" size="md">
          User
        </Button>
        <Button {...args} icon="app-window" size="md">
          App Window
        </Button>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <Button {...args} icon="activity" size="lg">
          Activity
        </Button>
        <Button {...args} icon="user" size="lg">
          User
        </Button>
        <Button {...args} icon="app-window" size="lg">
          App Window
        </Button>
      </div>
    </div>
  ),
};

export const All: Story = {
  args: {
    size: 'lg',
    variant: 'solid',
    color: 'primary',
  },
  render: (args) => (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-row gap-4">
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
        <Button {...args} color="danger">
          Danger
        </Button>
        <Button {...args} color="success">
          Success
        </Button>
        <Button {...args} color="warning">
          Warning
        </Button>
      </div>

      <div className="flex flex-row gap-4">
        <Button {...args} color="primary" variant="outline">
          Primary
        </Button>
        <Button {...args} color="secondary" variant="outline">
          Secondary
        </Button>
        <Button {...args} color="danger" variant="outline">
          Danger
        </Button>
        <Button {...args} color="success" variant="outline">
          Success
        </Button>
        <Button {...args} color="warning" variant="outline">
          Warning
        </Button>
      </div>

      <div className="flex flex-row gap-4">
        <Button {...args} color="primary" variant="ghost">
          Primary
        </Button>
        <Button {...args} color="secondary" variant="ghost">
          Secondary
        </Button>
        <Button {...args} color="danger" variant="ghost">
          Danger
        </Button>
        <Button {...args} color="success" variant="ghost">
          Success
        </Button>
        <Button {...args} color="warning" variant="ghost">
          Warning
        </Button>
      </div>

      <div className="flex flex-row gap-4">
        <Button
          {...args}
          color="primary"
          variant="link"
          href="https://google.com"
        >
          Primary
        </Button>
        <Button
          {...args}
          color="secondary"
          variant="link"
          href="https://google.com"
        >
          Secondary
        </Button>
        <Button
          {...args}
          color="danger"
          variant="link"
          href="https://google.com"
        >
          Danger
        </Button>
        <Button
          {...args}
          color="success"
          variant="link"
          href="https://google.com"
        >
          Success
        </Button>
        <Button
          {...args}
          color="warning"
          variant="link"
          href="https://google.com"
        >
          Warning
        </Button>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    size: 'lg',
    variant: 'solid',
    color: 'primary',
    disabled: true,
  },
};
