

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { ButtonGroup } from './ButtonGroup';
import { Button } from '../button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Design System/Button Group',
    component: ButtonGroup,
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
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onClick: fn() },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        size: "md",
    },
    render: (args) => <ButtonGroup {...args}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
    </ButtonGroup>

};

export const All: Story = {
    args: {
        size: "md",
    },
    render: (args) => <div className='flex gap-4 flex-col'>
        <div>
            <ButtonGroup {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
                <Button>Button 4</Button>
            </ButtonGroup></div>
        <div>
            <ButtonGroup {...args}>
                <Button variant='outline'>Button 1</Button>
                <Button icon='circle-arrow-out-down-right' variant='outline'>Button 2</Button>
                <Button icon='air-vent' variant='outline'>Button 3</Button>
                <Button icon='airplay' variant='outline'>Button 4</Button>
            </ButtonGroup>
        </div>
        <div>
            <ButtonGroup {...args}>
                <Button variant='ghost'>Button 1</Button>
                <Button variant='ghost'>Button 2</Button>
                <Button variant='ghost'>Button 3</Button>
                <Button variant='ghost'>Button 4</Button>
            </ButtonGroup>
        </div>
    </div>
};

export const Sizes: Story = {
    args: {
        size: "md",
    },
    render: (args) => <div className='flex gap-4 flex-col'>
        <div>
            <ButtonGroup size='sm'>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
                <Button>Button 4</Button>
            </ButtonGroup>
        </div>
        <div>
            <ButtonGroup size='md'>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
                <Button>Button 4</Button>
            </ButtonGroup></div>

        <div>
            <ButtonGroup size='lg'>
                <Button icon='airplay'>Button 1</Button>
                <Button icon='tractor'>Button 2</Button>
                <Button>Button 3</Button>
                <Button>Button 4</Button>
            </ButtonGroup>
        </div>
    </div>
};



