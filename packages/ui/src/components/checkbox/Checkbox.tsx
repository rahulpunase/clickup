import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { checkboxVariants } from './variants';

export interface CheckboxProps
  extends
    React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, size, ...props }, ref) => {
    const { root, indicator } = checkboxVariants({ size });

    return (
      <BaseCheckbox.Root ref={ref} className={root({ className })} {...props}>
        <BaseCheckbox.Indicator className={indicator()}>
          <Check strokeWidth={3} className="h-full w-full" />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
    );
  },
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
