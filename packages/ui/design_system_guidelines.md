# Antigravity Design System Guidelines

## Table of Contents
1. [Project Structure](#project-structure)
2. [Component Development Guidelines](#component-development-guidelines)
3. [Storybook Guidelines](#storybook-guidelines)
4. [Playwright Testing Guidelines](#playwright-testing-guidelines)
5. [Design Tokens](#design-tokens)
6. [Accessibility Standards](#accessibility-standards)

---

## Project Structure

```
packages/
  ui/
    src/
      components/
        Button/
          Button.tsx
          Button.variants.ts
          Button.stories.tsx
          Button.test.tsx
          index.ts
        Card/
          Card.tsx
          CardHeader.tsx
          CardBody.tsx
          CardFooter.tsx
          Card.variants.ts
          Card.stories.tsx
          Card.test.tsx
          index.ts
        [ComponentName]/
          ...
      tokens/
        colors.ts
        spacing.ts
        typography.ts
      utils/
        cn.ts (classnames utility)
    package.json
```

---

## Component Development Guidelines

### 1. Compound Component Architecture

Components should be built using the **Compound Component Pattern** for maximum flexibility and composability. Use **tailwind-variants** for variant management.

#### Simple Component Example (Button)

```tsx
// Button.variants.ts
import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-600',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-600',
      ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-600',
      destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
```

```tsx
// Button.tsx
import * as BaseButton from '@base-ui/react/Button';
import { type VariantProps } from 'tailwind-variants';
import { buttonVariants } from './Button.variants';

interface ButtonProps 
  extends BaseButton.ButtonProps,
    VariantProps<typeof buttonVariants> {}

/**
 * Button component for user interactions
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = ({
  variant,
  size,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton.Root
      className={buttonVariants({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </BaseButton.Root>
  );
};
```

#### Compound Component Example (Card)

```tsx
// Card.variants.ts
import { tv } from 'tailwind-variants';

export const cardVariants = tv({
  slots: {
    root: [
      'rounded-lg border bg-white shadow-sm',
      'dark:bg-gray-900 dark:border-gray-800',
    ],
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'text-2xl font-semibold leading-none tracking-tight',
    description: 'text-sm text-gray-500 dark:text-gray-400',
    body: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0',
  },
  variants: {
    variant: {
      default: {},
      outline: {
        root: 'border-2',
      },
      ghost: {
        root: 'border-0 shadow-none',
      },
    },
    hover: {
      true: {
        root: 'transition-shadow hover:shadow-md',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
```

```tsx
// Card.tsx
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';
import { cardVariants } from './Card.variants';

// Context for sharing variant props
const CardContext = React.createContext<VariantProps<typeof cardVariants>>({});

interface CardRootProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/**
 * Card root component - wraps all card sub-components
 */
const CardRoot = React.forwardRef<HTMLDivElement, CardRootProps>(
  ({ variant, hover, className, children, ...props }, ref) => {
    const variants = { variant, hover };
    const styles = cardVariants(variants);
    
    return (
      <CardContext.Provider value={variants}>
        <div
          ref={ref}
          className={styles.root({ className })}
          {...props}
        >
          {children}
        </div>
      </CardContext.Provider>
    );
  }
);
CardRoot.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Card header - contains title and description
 */
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    const variants = React.useContext(CardContext);
    const styles = cardVariants(variants);
    
    return (
      <div
        ref={ref}
        className={styles.header({ className })}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * Card title
 */
const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    const variants = React.useContext(CardContext);
    const styles = cardVariants(variants);
    
    return (
      <h3
        ref={ref}
        className={styles.title({ className })}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Card description
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    const variants = React.useContext(CardContext);
    const styles = cardVariants(variants);
    
    return (
      <p
        ref={ref}
        className={styles.description({ className })}
        {...props}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Card body - main content area
 */
const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    const variants = React.useContext(CardContext);
    const styles = cardVariants(variants);
    
    return (
      <div
        ref={ref}
        className={styles.body({ className })}
        {...props}
      />
    );
  }
);
CardBody.displayName = 'CardBody';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Card footer - actions or secondary content
 */
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    const variants = React.useContext(CardContext);
    const styles = cardVariants(variants);
    
    return (
      <div
        ref={ref}
        className={styles.footer({ className })}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

// Export as compound component
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
});
```

```tsx
// index.ts
export { Card } from './Card';
export type { CardRootProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './Card';
```

#### Usage Example

```tsx
// Simple component usage
<Button variant="primary" size="md" onClick={handleClick}>
  Submit
</Button>

// Compound component usage
<Card variant="default" hover>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Card description goes here</Card.Description>
  </Card.Header>
  <Card.Body>
    <p>Main content of the card</p>
  </Card.Body>
  <Card.Footer>
    <Button variant="outline" size="sm">Cancel</Button>
    <Button variant="primary" size="sm">Save</Button>
  </Card.Footer>
</Card>
```

### 2. Tailwind-Variants Best Practices

#### Using `tv()` for Simple Components

```tsx
import { tv } from 'tailwind-variants';

export const inputVariants = tv({
  base: [
    'flex w-full rounded-md border border-gray-300 bg-white px-3 py-2',
    'text-sm ring-offset-white file:border-0 file:bg-transparent',
    'placeholder:text-gray-400',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'dark:border-gray-700 dark:bg-gray-950 dark:ring-offset-gray-950',
  ],
  variants: {
    size: {
      sm: 'h-8 text-xs',
      md: 'h-10 text-sm',
      lg: 'h-12 text-base',
    },
    error: {
      true: 'border-red-500 focus-visible:ring-red-500',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
```

#### Using Slots for Compound Components

```tsx
import { tv } from 'tailwind-variants';

export const selectVariants = tv({
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between rounded-md border',
      'border-gray-300 bg-white px-3 py-2 text-sm',
      'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    content: [
      'relative z-50 min-w-[8rem] overflow-hidden rounded-md border',
      'border-gray-200 bg-white text-gray-950 shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
    ],
    item: [
      'relative flex w-full cursor-pointer select-none items-center',
      'rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    separator: 'mx-1 my-1 h-px bg-gray-200',
  },
  variants: {
    size: {
      sm: {
        trigger: 'h-8 text-xs',
        item: 'text-xs py-1',
      },
      md: {
        trigger: 'h-10 text-sm',
        item: 'text-sm py-1.5',
      },
      lg: {
        trigger: 'h-12 text-base',
        item: 'text-base py-2',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
```

#### Compound Variants

```tsx
export const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-gray-600 text-white',
      outline: 'border border-gray-300',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    },
    loading: {
      true: 'cursor-wait',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      loading: true,
      className: 'bg-blue-400',
    },
    {
      variant: ['primary', 'secondary'],
      size: 'sm',
      className: 'font-semibold',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
```

### 3. Component Development Checklist

Every component must include:

- ✅ **Compound structure** - Break into logical sub-components when appropriate
- ✅ **Tailwind-variants** - Use `tv()` for variant management
- ✅ **TypeScript types** - Proper prop typing with JSDoc comments
- ✅ **Base UI integration** - Use Base UI for behavior and accessibility
- ✅ **Context sharing** - Use React Context for variant props in compound components
- ✅ **Forward refs** - All sub-components should forward refs
- ✅ **Display names** - Set displayName on all components for debugging
- ✅ **Variants** - Support multiple visual variants
- ✅ **Sizes** - At least 3 size options (sm, md, lg)
- ✅ **Accessibility** - ARIA attributes, keyboard navigation
- ✅ **Responsive** - Mobile-first responsive design
- ✅ **Dark mode** - Support using Tailwind's `dark:` prefix
- ✅ **Composability** - Components should work together seamlessly

### 4. Compound Component Patterns

#### Pattern 1: Context-based Variants (Recommended)

Use React Context to share variant props across sub-components:

```tsx
const ComponentContext = React.createContext<VariantProps<typeof variants>>({});

const Root = ({ variant, size, children }) => {
  const variantProps = { variant, size };
  const styles = variants(variantProps);
  
  return (
    <ComponentContext.Provider value={variantProps}>
      <div className={styles.root()}>{children}</div>
    </ComponentContext.Provider>
  );
};

const SubComponent = ({ className }) => {
  const variantProps = React.useContext(ComponentContext);
  const styles = variants(variantProps);
  
  return <div className={styles.subComponent({ className })} />;
};
```

#### Pattern 2: Explicit Props (Alternative)

Pass variant props explicitly to sub-components:

```tsx
<Card variant="outline">
  <Card.Header variant="outline">...</Card.Header>
</Card>
```

Choose Pattern 1 for better DX and consistency.

### 5. Naming Conventions

- **Root component**: PascalCase (e.g., `Card`, `Select`, `Dialog`)
- **Sub-components**: PascalCase with parent prefix (e.g., `CardHeader`, `SelectContent`)
- **Props**: camelCase (e.g., `variant`, `isDisabled`, `onValueChange`)
- **Files**: Match root component name
  - `Card.tsx` - Component implementation
  - `Card.variants.ts` - Tailwind-variants definitions
  - `Card.stories.tsx` - Storybook stories
  - `Card.test.tsx` - Playwright tests
- **Exports**: Use Object.assign for compound components

### 6. Props Pattern for Compound Components

```tsx
// Root component props
interface ComponentRootProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Component-specific props
  children?: React.ReactNode;
}

// Sub-component props
interface ComponentSubProps extends React.HTMLAttributes<HTMLDivElement> {
  // Usually no variant props needed (inherited from context)
  children?: React.ReactNode;
}
```

### 7. Documentation Requirements

Each component file should include:

```tsx
/**
 * Card component for grouping related content
 * 
 * @example
 * ```tsx
 * <Card variant="default" hover>
 *   <Card.Header>
 *     <Card.Title>Title</Card.Title>
 *     <Card.Description>Description</Card.Description>
 *   </Card.Header>
 *   <Card.Body>Content</Card.Body>
 *   <Card.Footer>Actions</Card.Footer>
 * </Card>
 * ```
 */
```

---

## Storybook Guidelines

### 1. Story File Structure for Compound Components

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
      description: 'Visual style variant',
    },
    hover: {
      control: 'boolean',
      description: 'Enable hover effect',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default story
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here</Card.Description>
      </Card.Header>
      <Card.Body>
        <p>This is the main content of the card.</p>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Save</Button>
      </Card.Footer>
    </Card>
  ),
  args: {
    variant: 'default',
    hover: false,
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="default">
        <Card.Header>
          <Card.Title>Default</Card.Title>
          <Card.Description>Default card variant</Card.Description>
        </Card.Header>
        <Card.Body>Content here</Card.Body>
      </Card>
      
      <Card variant="outline">
        <Card.Header>
          <Card.Title>Outline</Card.Title>
          <Card.Description>Outline card variant</Card.Description>
        </Card.Header>
        <Card.Body>Content here</Card.Body>
      </Card>
      
      <Card variant="ghost">
        <Card.Header>
          <Card.Title>Ghost</Card.Title>
          <Card.Description>Ghost card variant</Card.Description>
        </Card.Header>
        <Card.Body>Content here</Card.Body>
      </Card>
    </div>
  ),
};

// Composition patterns
export const WithoutHeader: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <p>A card without a header component</p>
      </Card.Body>
      <Card.Footer>
        <Button size="sm">Action</Button>
      </Card.Footer>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Card.Title>No Footer</Card.Title>
      </Card.Header>
      <Card.Body>
        <p>A card without a footer component</p>
      </Card.Body>
    </Card>
  ),
};

export const OnlyBody: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <p>A minimal card with just body content</p>
      </Card.Body>
    </Card>
  ),
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [count, setCount] = React.useState(0);
    
    return (
      <Card hover>
        <Card.Header>
          <Card.Title>Interactive Card</Card.Title>
          <Card.Description>Click the button to increment</Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-2xl font-bold">Count: {count}</p>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => setCount(0)} variant="outline" size="sm">
            Reset
          </Button>
          <Button onClick={() => setCount(count + 1)} size="sm">
            Increment
          </Button>
        </Card.Footer>
      </Card>
    );
  },
};

// Complex composition
export const ComplexComposition: Story = {
  render: () => (
    <div className="space-y-4">
      <Card variant="outline">
        <Card.Header>
          <div className="flex items-center justify-between">
            <div>
              <Card.Title>User Profile</Card.Title>
              <Card.Description>Manage your account settings</Card.Description>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Name:</span>
              <span className="text-sm">John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Email:</span>
              <span className="text-sm">john@example.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Role:</span>
              <span className="text-sm">Administrator</span>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <Button variant="destructive" size="sm">Delete Account</Button>
        </Card.Footer>
      </Card>
    </div>
  ),
};
```

### 2. Story Best Practices for Compound Components

- **Always show the default composition** with all sub-components
- **Create stories for different compositions** (with/without header, footer, etc.)
- **Demonstrate variant combinations** across sub-components
- **Show real-world usage patterns** with actual content
- **Include interactive examples** that demonstrate stateful behavior
- **Test edge cases** like long text, empty states, overflow
- **Show responsive behavior** across breakpoints
- **Demonstrate composition with other components** (e.g., Card with Button, Form, etc.)

---

## Playwright Testing Guidelines

### 1. Test File Structure for Compound Components

```typescript
import { test, expect } from '@playwright/test';

test.describe('Card', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-card--default');
  });

  test.describe('Rendering', () => {
    test('should render root component', async ({ page }) => {
      const card = page.locator('[class*="rounded-lg"][class*="border"]').first();
      await expect(card).toBeVisible();
    });

    test('should render all sub-components', async ({ page }) => {
      await expect(page.locator('h3').first()).toBeVisible(); // Title
      await expect(page.locator('p').first()).toBeVisible(); // Description
    });

    test('should apply correct variant styles', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?args=variant:outline');
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toHaveClass(/border-2/);
    });
  });

  test.describe('Composition', () => {
    test('should work without header', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?id=components-card--without-header');
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toBeVisible();
      await expect(page.locator('h3')).toHaveCount(0);
    });

    test('should work without footer', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?id=components-card--without-footer');
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toBeVisible();
      // Verify footer is not present
      const buttons = page.getByRole('button');
      await expect(buttons).toHaveCount(0);
    });

    test('should work with only body', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?id=components-card--only-body');
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toBeVisible();
      await expect(page.locator('h3')).toHaveCount(0);
      await expect(page.getByRole('button')).toHaveCount(0);
    });
  });

  test.describe('Variants', () => {
    test('should render default variant', async ({ page }) => {
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toHaveClass(/shadow-sm/);
    });

    test('should render outline variant', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?args=variant:outline');
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toHaveClass(/border-2/);
    });

    test('should render ghost variant', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?args=variant:ghost');
      const card = page.locator('[class*="rounded-lg"]').first();
      const classes = await card.getAttribute('class');
      expect(classes).not.toContain('shadow');
    });
  });

  test.describe('Interactions', () => {
    test('should handle hover effect', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?args=hover:true');
      const card = page.locator('[class*="rounded-lg"]').first();
      
      // Hover over the card
      await card.hover();
      await page.waitForTimeout(100); // Wait for transition
      
      // Check for hover classes (if any visual change occurs)
      await expect(card).toHaveClass(/hover:shadow-md/);
    });

    test('should handle button clicks in footer', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?id=components-card--interactive');
      
      const incrementButton = page.getByRole('button', { name: 'Increment' });
      const resetButton = page.getByRole('button', { name: 'Reset' });
      
      // Initial state
      await expect(page.getByText('Count: 0')).toBeVisible();
      
      // Click increment
      await incrementButton.click();
      await expect(page.getByText('Count: 1')).toBeVisible();
      
      // Click increment again
      await incrementButton.click();
      await expect(page.getByText('Count: 2')).toBeVisible();
      
      // Click reset
      await resetButton.click();
      await expect(page.getByText('Count: 0')).toBeVisible();
    });
  });

  test.describe('Content', () => {
    test('should display title correctly', async ({ page }) => {
      const title = page.locator('h3').first();
      await expect(title).toHaveText('Card Title');
    });

    test('should display description correctly', async ({ page }) => {
      const description = page.locator('p').first();
      await expect(description).toContainText('description');
    });

    test('should handle long content', async ({ page }) => {
      await page.goto('http://localhost:6006/iframe.html?id=components-card--long-content');
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toBeVisible();
      
      // Verify card doesn't overflow
      const boundingBox = await card.boundingBox();
      expect(boundingBox?.width).toBeLessThan(1000);
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
      const title = page.locator('h3').first();
      await expect(title).toBeVisible();
      
      // Verify it's semantic HTML
      const tagName = await title.evaluate(el => el.tagName);
      expect(tagName).toBe('H3');
    });

    test('should be keyboard navigable', async ({ page }) => {
      // Navigate to interactive card
      await page.goto('http://localhost:6006/iframe.html?id=components-card--interactive');
      
      // Tab to first button
      await page.keyboard.press('Tab');
      const resetButton = page.getByRole('button', { name: 'Reset' });
      await expect(resetButton).toBeFocused();
      
      // Tab to second button
      await page.keyboard.press('Tab');
      const incrementButton = page.getByRole('button', { name: 'Increment' });
      await expect(incrementButton).toBeFocused();
      
      // Activate with Enter
      await page.keyboard.press('Enter');
      await expect(page.getByText('Count: 1')).toBeVisible();
    });
  });

  test.describe('Responsive', () => {
    test('should render correctly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toBeVisible();
      
      const boundingBox = await card.boundingBox();
      expect(boundingBox?.width).toBeLessThanOrEqual(375);
    });

    test('should render correctly on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toBeVisible();
    });

    test('should render correctly on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toBeVisible();
    });
  });

  test.describe('Dark Mode', () => {
    test('should apply dark mode styles', async ({ page }) => {
      // Add dark class to document
      await page.evaluate(() => {
        document.documentElement.classList.add('dark');
      });
      
      const card = page.locator('[class*="rounded-lg"]').first();
      await expect(card).toBeVisible();
      
      // Verify dark mode classes are applied
      await expect(card).toHaveClass(/dark:bg-gray-900/);
    });
  });
});
```

### 2. Testing Checklist for Compound Components

- ✅ **Root component rendering** - Verify main container renders
- ✅ **Sub-component rendering** - Test each sub-component individually
- ✅ **Composition flexibility** - Test with/without optional sub-components
- ✅ **Variant inheritance** - Verify variants apply to all sub-components
- ✅ **Props handling** - All props work as expected
- ✅ **User interactions** - Click, hover, focus behaviors
- ✅ **Keyboard navigation** - Tab order, Enter/Space activation
- ✅ **State changes** - Loading, disabled, error states
- ✅ **Content handling** - Long text, empty states, overflow
- ✅ **Accessibility** - ARIA attributes, semantic HTML, screen reader support
- ✅ **Responsive behavior** - Mobile, tablet, desktop viewports
- ✅ **Dark mode** - Verify dark mode variants
- ✅ **Integration** - Test with other components

### 3. Component Integration Tests

```typescript
test.describe('Card + Button Integration', () => {
  test('should work with multiple buttons in footer', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-card--default');
    
    const cancelButton = page.getByRole('button', { name: 'Cancel' });
    const saveButton = page.getByRole('button', { name: 'Save' });
    
    await expect(cancelButton).toBeVisible();
    await expect(saveButton).toBeVisible();
    
    // Verify they're in the footer
    const footer = page.locator('[class*="flex items-center p-6 pt-0"]');
    await expect(footer.locator('button')).toHaveCount(2);
  });
});

test.describe('Complex Compositions', () => {
  test('should handle nested components correctly', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-card--complex-composition');
    
    // Verify all components render
    await expect(page.locator('h3')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Delete Account' })).toBeVisible();
    
    // Verify content structure
    const bodyContent = page.locator('p').first();
    await expect(bodyContent).toBeVisible();
  });
});
```

---

## Design Tokens

### 1. Color Tokens

Define semantic color tokens in `tokens/colors.ts`:

```typescript
export const colors = {
  // Brand colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Semantic colors
  success: {
    light: '#10b981',
    DEFAULT: '#059669',
    dark: '#047857',
  },
  warning: {
    light: '#f59e0b',
    DEFAULT: '#d97706',
    dark: '#b45309',
  },
  error: {
    light: '#ef4444',
    DEFAULT: '#dc2626',
    dark: '#b91c1c',
  },
  info: {
    light: '#3b82f6',
    DEFAULT: '#2563eb',
    dark: '#1d4ed8',
  },
  
  // Neutral colors
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
};
```

### 2. Spacing Tokens

```typescript
export const spacing = {
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem',    // 96px
};
```

### 3. Typography Tokens

```typescript
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['Fira Code', 'Menlo', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
    base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};
```

### 4. Using Tokens in Tailwind-Variants

```tsx
// Instead of hardcoded values
const badVariants = tv({
  base: 'px-4 py-2 text-base bg-blue-600',
});

// Use Tailwind's design tokens
const goodVariants = tv({
  base: 'px-4 py-2 text-base bg-primary-600',
  variants: {
    size: {
      sm: 'px-3 py-1.5 text-sm',   // Uses spacing and typography tokens
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
});
```

---

## Accessibility Standards

### 1. Keyboard Navigation

All interactive components must support:

- **Tab**: Move focus between interactive elements
- **Shift + Tab**: Move focus backward
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals, dropdowns, dialogs
- **Arrow keys**: Navigate lists, menus, tabs

#### Example Implementation

```tsx
const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ onClose, children, ...props }, ref) => {
    // Handle Escape key
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose?.();
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);
    
    return <div ref={ref} {...props}>{children}</div>;
  }
);
```

### 2. ARIA Requirements for Compound Components

```tsx
// Example: Accessible Card with proper ARIA
<Card role="article" aria-labelledby="card-title">
  <Card.Header>
    <Card.Title id="card-title">User Profile</Card.Title>
    <Card.Description id="card-desc">
      Manage your account settings
    </Card.Description>
  </Card.Header>
  <Card.Body aria-describedby="card-desc">
    <p>Content here</p>
  </Card.Body>
</Card>

// Example: Accessible Select
<Select>
  <Select.Trigger aria-haspopup="listbox" aria-expanded={isOpen}>
    {selectedValue}
  </Select.Trigger>
  <Select.Content role="listbox">
    <Select.Item role="option" aria-selected={isSelected}>
      Option 1
    </Select.Item>
  </Select.Content>
</Select>
```

### 3. Focus Management in Compound Components

```tsx
const Dialog = ({ children, isOpen, onClose }) => {
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);
  
  React.useEffect(() => {
    if (isOpen) {
      // Save current focus
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Focus first interactive element
      closeButtonRef.current?.focus();
    } else {
      // Restore previous focus
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <div role="dialog" aria-modal="true">
      <button ref={closeButtonRef} onClick={onClose}>
        Close
      </button>
      {children}
    </div>
  );
};
```

### 4. Color Contrast

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text** (18pt+ or 14pt+ bold): Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio
- Use tools like WebAIM Contrast Checker

---

## Updating Existing Components

When updating an existing component:

1. **Review current usage** - Search codebase for all usages
2. **Maintain backwards compatibility** - If possible, don't break existing APIs
3. **Add deprecation warnings** if changing API:
```tsx
if (oldProp) {
  console.warn('oldProp is deprecated. Use newProp instead.');
}
```
4. **Update all sub-components** in compound components
5. **Update variant definitions** in `.variants.ts` files
6. **Update all stories** to reflect new props/behavior
7. **Update tests** to cover new functionality
8. **Update documentation** and examples
9. **Version bump** according to semantic versioning:
   - **Patch** (1.0.x): Bug fixes
   - **Minor** (1.x.0): New features, backwards compatible
   - **Major** (x.0.0): Breaking changes
10. **Add migration guide** in CHANGELOG if breaking changes

---

## Component Review Checklist

Before merging a new or updated component:

- [ ] Component uses compound pattern (if appropriate)
- [ ] Tailwind-variants properly configured with slots
- [ ] TypeScript types are complete and exported
- [ ] Component uses Base UI for behavior
- [ ] Only core Tailwind classes used
- [ ] All variants and sizes implemented
- [ ] Context properly shares variant props
- [ ] All sub-components forward refs
- [ ] Display names set on all components
- [ ] Responsive design tested
- [ ] Dark mode supported
- [ ] Accessibility verified (keyboard + screen reader)
- [ ] Storybook stories created:
  - [ ] Default composition
  - [ ] All variants
  - [ ] Different compositions (with/without sub-components)
  - [ ] Interactive examples
  - [ ] Edge cases
- [ ] Playwright tests written and passing:
  - [ ] Rendering tests
  - [ ] Composition tests
  - [ ] Variant tests
  - [ ] Interaction tests
  - [ ] Accessibility tests
  - [ ] Responsive tests
- [ ] Documentation complete with examples
- [ ] Peer review completed
- [ ] Design team approval (if new component)

---

## Quick Reference

### Compound Component Template

```tsx
// ComponentName.variants.ts
import { tv } from 'tailwind-variants';

export const componentVariants = tv({
  slots: {
    root: '...',
    subComponent: '...',
  },
  variants: {
    variant: { ... },
    size: { ... },
  },
  defaultVariants: { ... },
});

// ComponentName.tsx
const ComponentContext = React.createContext<VariantProps<typeof componentVariants>>({});

const Root = ({ variant, size, children, ...props }) => {
  const variantProps = { variant, size };
  const styles = componentVariants(variantProps);
  
  return (
    <ComponentContext.Provider value={variantProps}>
      <div className={styles.root()} {...props}>
        {children}
      </div>
    </ComponentContext.Provider>
  );
};

const SubComponent = ({ className, ...props }) => {
  const variantProps = React.useContext(ComponentContext);
  const styles = componentVariants(variantProps);
  
  return <div className={styles.subComponent({ className })} {...props} />;
};

export const Component = Object.assign(Root, {
  SubComponent,
});
```

---

## Additional Resources

- [Base UI Documentation](https://base-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Tailwind-Variants Documentation](https://www.tailwind-variants.org/)
- [Compound Component Pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [Storybook Best Practices](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Playwright Documentation](https://playwright.dev/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)