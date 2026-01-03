import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from './Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
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
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    icon: {
      control: 'radio',
      options: ['activity', 'alarm-smoke', 'user', 'app-window'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    icon: 'construction',
    size: 'md',
  },
};

export const Sizes: Story = {
  args: {
    size: 'md',
    icon: 'construction',
  },
  render: (args) => (
    <div className="flex gap-2 flex-col items-center">
      <div className="flex flex-row gap-2 items-center">
        <Icon {...args} size="xs" />
        <Icon {...args} size="sm" />
        <Icon {...args} size="md" />
        <Icon {...args} size="lg" />
        <Icon {...args} size="xl" />
        <Icon {...args} size="2xl" />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Icon icon="activity" size="xs" />
        <Icon icon="activity" size="sm" />
        <Icon icon="activity" size="md" />
        <Icon icon="activity" size="lg" />
        <Icon icon="activity" size="xl" />
        <Icon icon="activity" size="2xl" />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Icon icon="alarm-smoke" size="xs" />
        <Icon icon="alarm-smoke" size="sm" />
        <Icon icon="alarm-smoke" size="md" />
        <Icon icon="alarm-smoke" size="lg" />
        <Icon icon="alarm-smoke" size="xl" />
        <Icon icon="alarm-smoke" size="2xl" />
      </div>
    </div>
  ),
};
