import { Button, Input as Root } from '@base-ui/react';
import { DynamicIcon } from 'lucide-react/dynamic';
import React, {
  ComponentProps,
  PropsWithChildren,
  useLayoutEffect,
  useState,
} from 'react';
import { cn, VariantProps } from 'tailwind-variants';

import { extractChildrenOfType } from '../../utils/utils';
import { Icon } from '../icon/Icon';
import styles from './Input.module.css';
import { inputVariants } from './Input.variants';

type InputProps = {
  icon?: ComponentProps<typeof DynamicIcon>['name'];
  variant?: VariantProps<typeof inputVariants>['variant'];
  size?: VariantProps<typeof inputVariants>['size'];
} & Omit<ComponentProps<typeof Root>, 'size'>;

const Cross = React.forwardRef(function Cross() {
  return (
    <Button className="cursor-pointer outline:outline-1 outline-blue-300 outline-offset-2">
      <Icon size="md" icon="x" />
    </Button>
  );
});

const RootActions = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
  }
>(function Actions(
  {
    children,
    ...props
  }: {
    children: React.ReactNode;
  },
  ref,
) {
  return (
    <div ref={ref} {...props} className={styles.actions}>
      {children}
    </div>
  );
});

const Actions = Object.assign(RootActions, {
  Cross: Cross,
});

const RootInput = ({
  icon,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: PropsWithChildren<InputProps>) => {
  const { actions } = extractChildrenOfType(children, {
    actions: RootActions,
  });
  const actionsRef = React.useRef<HTMLDivElement>(null);
  const _actions = actions
    ? React.cloneElement(
        actions as unknown as React.ReactElement<HTMLDivElement>,
        {
          ref: actionsRef,
          ...(actions?.props ?? {}),
        },
      )
    : null;
  const [actionsWith, setActionsWidth] = useState(0);

  useLayoutEffect(() => {
    setActionsWidth(actionsRef.current?.clientWidth ?? 0);
  }, [actionsRef]);

  console.log({ actionsWith });

  return (
    <div className={styles.root}>
      <Root
        className={cn(inputVariants({ variant, size }), {
          'pl-8': icon,
        })}
        {...props}
      />
      {icon && (
        <div className={styles.icon}>
          {icon && <Icon icon={icon} size="md" />}
        </div>
      )}
      {_actions}
    </div>
  );
};

const Input = Object.assign(RootInput, {
  Actions,
});

export { Input };
