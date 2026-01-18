# Design System Guidelines for Cursor Editor

## Overview
These guidelines ensure consistency across all components in the design system using React 19 and Tailwind CSS.

---

## Color Palette

### Primary Colors
- **Primary**: `bg-blue-600` / `text-blue-600` / `border-blue-600`
- **Primary Hover**: `hover:bg-blue-700`
- **Primary Active**: `active:bg-blue-800`
- **Primary Light**: `bg-blue-50` / `text-blue-50`
- **Primary Dark**: `bg-blue-900` / `text-blue-900`

### Secondary Colors
- **Secondary**: `bg-gray-600` / `text-gray-600` / `border-gray-600`
- **Secondary Hover**: `hover:bg-gray-700`
- **Secondary Active**: `active:bg-gray-800`

### Semantic Colors
- **Success**: `bg-green-600` / `text-green-600` / `border-green-600`
- **Success Light**: `bg-green-50`
- **Warning**: `bg-yellow-600` / `text-yellow-600` / `border-yellow-600`
- **Warning Light**: `bg-yellow-50`
- **Error**: `bg-red-600` / `text-red-600` / `border-red-600`
- **Error Light**: `bg-red-50`
- **Info**: `bg-blue-500` / `text-blue-500` / `border-blue-500`
- **Info Light**: `bg-blue-50`

### Neutral Colors
- **Background**: `bg-white`
- **Background Secondary**: `bg-gray-50`
- **Background Tertiary**: `bg-gray-100`
- **Surface**: `bg-white`
- **Border**: `border-gray-200`
- **Border Light**: `border-gray-100`
- **Border Dark**: `border-gray-300`
- **Text Primary**: `text-gray-900`
- **Text Secondary**: `text-gray-600`
- **Text Tertiary**: `text-gray-500`
- **Text Disabled**: `text-gray-400`

---

## Spacing Scale

### Padding
- **XS**: `p-1` (4px)
- **SM**: `p-2` (8px)
- **MD**: `p-4` (16px)
- **LG**: `p-6` (24px)
- **XL**: `p-8` (32px)
- **2XL**: `p-12` (48px)

### Margin
- **XS**: `m-1` (4px)
- **SM**: `m-2` (8px)
- **MD**: `m-4` (16px)
- **LG**: `m-6` (24px)
- **XL**: `m-8` (32px)
- **2XL**: `m-12` (48px)

### Gap (for Flexbox/Grid)
- **XS**: `gap-1` (4px)
- **SM**: `gap-2` (8px)
- **MD**: `gap-4` (16px)
- **LG**: `gap-6` (24px)
- **XL**: `gap-8` (32px)

### Component-Specific Spacing
- **Button Padding**: `px-4 py-2` (default), `px-6 py-3` (large), `px-3 py-1.5` (small)
- **Input Padding**: `px-3 py-2`
- **Card Padding**: `p-6`
- **Section Spacing**: `space-y-6` or `space-y-8`

---

## Border Radius

- **None**: `rounded-none` (0px)
- **SM**: `rounded-sm` (2px)
- **Default**: `rounded` (4px)
- **MD**: `rounded-md` (6px)
- **LG**: `rounded-lg` (8px)
- **XL**: `rounded-xl` (12px)
- **2XL**: `rounded-2xl` (16px)
- **Full**: `rounded-full` (9999px)

### Component Defaults
- **Buttons**: `rounded-md`
- **Inputs**: `rounded-md`
- **Cards**: `rounded-lg`
- **Modals**: `rounded-xl`
- **Badges**: `rounded-full`
- **Avatars**: `rounded-full`

---

## Border Width

- **Default**: `border` (1px)
- **Thick**: `border-2` (2px)
- **Extra Thick**: `border-4` (4px)
- **None**: `border-0`

### Component Defaults
- **Inputs**: `border` (1px)
- **Buttons**: `border-0` (filled) or `border-2` (outlined)
- **Cards**: `border` (1px)
- **Dividers**: `border-t` (1px)

---

## Typography

### Font Sizes
- **XS**: `text-xs` (12px)
- **SM**: `text-sm` (14px)
- **Base**: `text-base` (16px)
- **LG**: `text-lg` (18px)
- **XL**: `text-xl` (20px)
- **2XL**: `text-2xl` (24px)
- **3XL**: `text-3xl` (30px)
- **4XL**: `text-4xl` (36px)

### Font Weights
- **Normal**: `font-normal` (400)
- **Medium**: `font-medium` (500)
- **Semibold**: `font-semibold` (600)
- **Bold**: `font-bold` (700)

### Line Heights
- **Tight**: `leading-tight` (1.25)
- **Normal**: `leading-normal` (1.5)
- **Relaxed**: `leading-relaxed` (1.625)
- **Loose**: `leading-loose` (2)

### Component Text Styles
- **Headings**: `font-semibold` or `font-bold`
- **Body**: `font-normal` with `leading-normal`
- **Labels**: `text-sm font-medium`
- **Captions**: `text-xs text-gray-500`
- **Buttons**: `font-medium`

---

## Shadows

- **SM**: `shadow-sm`
- **Default**: `shadow`
- **MD**: `shadow-md`
- **LG**: `shadow-lg`
- **XL**: `shadow-xl`
- **2XL**: `shadow-2xl`
- **None**: `shadow-none`

### Component Defaults
- **Cards**: `shadow-md`
- **Buttons**: `shadow-sm` (optional)
- **Dropdowns**: `shadow-lg`
- **Modals**: `shadow-2xl`
- **Hover States**: Add `hover:shadow-lg` for elevation

---

## Opacity

- **Disabled**: `opacity-50`
- **Muted**: `opacity-75`
- **Overlay**: `bg-black/50` or `bg-white/80`

---

## Transitions

### Duration
- **Fast**: `duration-150`
- **Normal**: `duration-200`
- **Slow**: `duration-300`

### Easing
- **Default**: `ease-in-out`
- **Smooth**: `ease-out`

### Standard Transition
```jsx
className="transition-all duration-200 ease-in-out"
```

### Component-Specific
- **Buttons**: `transition-colors duration-200`
- **Hover Effects**: `transition-all duration-200`
- **Modals/Drawers**: `transition-transform duration-300`

---

## Z-Index Layers

- **Dropdown**: `z-10`
- **Sticky**: `z-20`
- **Fixed**: `z-30`
- **Modal Backdrop**: `z-40`
- **Modal**: `z-50`
- **Popover**: `z-50`
- **Tooltip**: `z-60`

---

## Accessibility Requirements

### Focus States
- All interactive elements must have: `focus:outline-none focus:ring-2 focus:ring-blue-600`
- Offset for better visibility: `focus:ring-offset-2`

### Disabled States
- Visual: `disabled:opacity-50 disabled:cursor-not-allowed`
- Ensure `disabled` attribute is set on HTML element

### Color Contrast
- Maintain WCAG AA minimum contrast ratio of 4.5:1 for normal text
- Maintain WCAG AA minimum contrast ratio of 3:1 for large text

---

## Responsive Design

### Breakpoints
- **SM**: `sm:` (640px)
- **MD**: `md:` (768px)
- **LG**: `lg:` (1024px)
- **XL**: `xl:` (1280px)
- **2XL**: `2xl:` (1536px)

### Mobile-First Approach
Always design for mobile first, then add breakpoints for larger screens.

```jsx
className="p-4 md:p-6 lg:p-8"
```

---

## Icon Sizing

- **XS**: `w-3 h-3` (12px)
- **SM**: `w-4 h-4` (16px)
- **Base**: `w-5 h-5` (20px)
- **MD**: `w-6 h-6` (24px)
- **LG**: `w-8 h-8` (32px)
- **XL**: `w-10 h-10` (40px)

---

## Coding Standards

### Component Structure
1. Always use functional components with hooks
2. Use TypeScript interfaces for props (when applicable)
3. Extract reusable logic into custom hooks
4. Keep components small and focused

### Naming Conventions
- **Components**: PascalCase (e.g., `ButtonPrimary`, `CardHeader`)
- **Props**: camelCase (e.g., `isDisabled`, `onClick`)
- **CSS Classes**: Use Tailwind utilities only

### Props Pattern
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

---

## Notes for AI Generation

When generating components, always:
1. Follow the exact spacing, colors, and sizing defined above
2. Include proper accessibility attributes (aria-labels, roles)
3. Add focus states to all interactive elements
4. Use semantic HTML elements
5. Ensure responsive design with mobile-first approach
6. Include transition effects for interactive states
7. Add proper TypeScript types when applicable
8. Keep className strings organized and readable
9. Use consistent naming patterns across similar components
10. Include hover, active, and disabled states where appropriate