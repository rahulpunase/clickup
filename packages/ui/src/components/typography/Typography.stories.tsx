import { Meta, StoryObj } from '@storybook/react-vite';

import Heading from './Heading';
import Text from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Heading> = {
  title: 'Typography/Typography',
  component: Heading,
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
};

export default meta;
export type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Heading size="h1">Heading 1</Heading>
      <Heading size="h2">Heading 2</Heading>
      <Heading size="h3">Heading 3</Heading>
      <Heading size="h4">Heading 4</Heading>
      <Heading size="h5">Heading 5</Heading>
      <Heading size="h6">Heading 6</Heading>
    </div>
  ),
};

export const Texts: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
          est debitis praesentium ullam laborum officiis, quasi ratione unde
          nemo reiciendis, laudantium incidunt mollitia dolorum iure cum! Fugit,
          libero. Ab.
        </Text>
        <Text size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
          est debitis praesentium ullam laborum officiis, quasi ratione unde
          nemo reiciendis,{' '}
          <Text italic>
            laudantium incidunt mollitia dolorum iure cum! Fugit, libero. Ab.
          </Text>
        </Text>
        <Text size="md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
          est debitis praesentium ullam laborum officiis, quasi ratione unde
          nemo reiciendis, laudantium incidunt mollitia dolorum iure cum! Fugit,
          libero. Ab.
        </Text>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
          est debitis praesentium ullam laborum officiis, quasi ratione unde
          nemo reiciendis, laudantium incidunt mollitia dolorum iure cum! Fugit,
          libero. Ab.
        </Text>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Text color="default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        est debitis praesentium ullam laborum officiis, quasi ratione unde nemo
        reiciendis, laudantium incidunt mollitia dolorum iure cum! Fugit,
        libero. Ab.
      </Text>
      <Text color="disabled">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        est debitis praesentium ullam laborum officiis, quasi ratione unde nemo
        reiciendis,{' '}
        <Text italic>
          laudantium incidunt mollitia dolorum iure cum! Fugit, libero. Ab.
        </Text>
      </Text>
      <Text color="danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        est debitis praesentium ullam laborum officiis, quasi ratione unde nemo
        reiciendis, laudantium incidunt mollitia dolorum iure cum! Fugit,
        libero. Ab.
      </Text>
      <Text color="warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        est debitis praesentium ullam laborum officiis, quasi ratione unde nemo
        reiciendis, laudantium incidunt mollitia dolorum iure cum! Fugit,
        libero. Ab.
      </Text>
      <Text color="success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla
        est debitis praesentium ullam laborum officiis, quasi ratione unde nemo
        reiciendis, laudantium incidunt mollitia dolorum iure cum! Fugit,
        libero. Ab.
      </Text>
    </div>
  ),
};
