import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Standard Tailwind Color Palette
const colors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const ColorSwatch = ({ color, shade }: { color: string; shade: number }) => (
  <div className="flex flex-col gap-1">
    <div
      className={`h-12 w-full rounded-md bg-${color}-${shade} border border-gray-200 dark:border-gray-800 shadow-sm`}
    />
    <div className="flex flex-col">
      <span className="text-xs font-medium text-gray-900 dark:text-gray-100 capitalize">
        {color}-{shade}
      </span>
    </div>
  </div>
);

const ColorRow = ({ color }: { color: string }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-sm font-semibold capitalize text-gray-900 dark:text-gray-100">
      {color}
    </h3>
    <div className="grid grid-cols-11 gap-2">
      {shades.map((shade) => (
        <ColorSwatch key={`${color}-${shade}`} color={color} shade={shade} />
      ))}
    </div>
  </div>
);

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Color Palette
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Standard Tailwind CSS color palette used throughout the application.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {colors.map((color) => (
          <ColorRow key={color} color={color} />
        ))}
      </div>
    </div>
  ),
};

const borderStyles = [
  { name: 'Default', class: 'border-gray-200' },
  { name: 'Muted', class: 'border-gray-300' },
  { name: 'Focus', class: 'border-blue-600' },
  { name: 'Error', class: 'border-red-500' },
  { name: 'Success', class: 'border-green-500' },
  { name: 'Warning', class: 'border-amber-500' },
];

export const BorderColors: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Border Colors
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Common border colors used for structure and feedback states.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {borderStyles.map((style) => (
          <div key={style.name} className="flex flex-col gap-2">
            <div
              className={`h-24 w-full rounded-lg border-2 bg-white dark:bg-gray-900 ${style.class}`}
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {style.name}
              </span>
              <code className="text-xs text-gray-500">{style.class}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

const interactiveColors = [
  {
    name: 'Primary Action',
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
    text: 'text-white',
  },
  {
    name: 'Secondary Action',
    bg: 'bg-gray-100',
    hover: 'hover:bg-gray-200',
    text: 'text-gray-900',
  },
  {
    name: 'Destructive',
    bg: 'bg-red-600',
    hover: 'hover:bg-red-700',
    text: 'text-white',
  },
  {
    name: 'Ghost',
    bg: 'bg-transparent',
    hover: 'hover:bg-gray-100',
    text: 'text-gray-900 border border-gray-200',
  },
];

export const BackgroundsAndHover: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Interactive States
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Background colors with their corresponding hover states. Hover over
          the blocks to see the transition.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {interactiveColors.map((color) => (
          <div key={color.name} className="flex flex-col gap-2">
            <div
              className={`flex h-24 w-full cursor-pointer items-center justify-center rounded-md transition-colors duration-200 ${color.bg} ${color.hover} ${color.text}`}
            >
              <span className="text-sm font-medium">Hover Me</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {color.name}
              </span>
              <code className="text-xs text-gray-500">{color.bg}</code>
              <code className="text-xs text-gray-500">{color.hover}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

const radiuses = [
  { name: 'None', class: 'rounded-none' },
  { name: 'Small', class: 'rounded-sm' },
  { name: 'Default', class: 'rounded-md' },
  { name: 'Large', class: 'rounded-lg' },
  { name: 'XL', class: 'rounded-xl' },
  { name: '2XL', class: 'rounded-2xl' },
  { name: '3XL', class: 'rounded-3xl' },
  { name: 'Full', class: 'rounded-full' },
];

export const BorderRadius: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Border Radius
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Available border radius tokens for shaping components.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {radiuses.map((radius) => (
          <div key={radius.name} className="flex flex-col gap-2">
            <div
              className={`flex h-24 w-24 items-center justify-center border-2 border-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500 ${radius.class}`}
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {radius.name}
              </span>
              <code className="text-xs text-gray-500">{radius.class}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
