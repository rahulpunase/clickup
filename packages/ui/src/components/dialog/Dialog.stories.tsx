import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button/Button';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The width of the dialog.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => (
    <Dialog>
      <Dialog.Trigger>
        <Button variant="outline">Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content {...args}>
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
        </Dialog.Header>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="username"
              className="text-right text-sm font-medium"
            >
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>
        <Dialog.Footer>
          <Button type="submit">Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
  args: {
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      {['sm', 'md', 'lg'].map((size) => (
        <Dialog key={size}>
          <Dialog.Trigger>
            <Button variant="outline">Open {size} Dialog</Button>
          </Dialog.Trigger>
          <Dialog.Content size={size as 'sm' | 'md' | 'lg'}>
            <Dialog.Header>
              <Dialog.Title>{size.toUpperCase()} Dialog</Dialog.Title>
              <Dialog.Description>
                This is a {size} dialog component.
              </Dialog.Description>
            </Dialog.Header>
            <div className="py-6">
              <p>The content area adapts to the size.</p>
            </div>
            <Dialog.Footer>
              <Dialog.Close>
                <Button variant="ghost" color="secondary">
                  Close
                </Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      ))}
    </div>
  ),
};
