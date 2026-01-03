import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { Button } from '../button/Button';
import { alertDialogVariants } from './AlertDialog.variants';

const AlertDialogRoot = BaseAlertDialog.Root;

const AlertDialogTrigger = BaseAlertDialog.Trigger;

const AlertDialogPortal = BaseAlertDialog.Portal;

const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Popup> &
    VariantProps<typeof alertDialogVariants>
>(({ className, ...props }, ref) => {
  const { popup, backdrop } = alertDialogVariants();

  return (
    <AlertDialogPortal>
      <BaseAlertDialog.Backdrop className={backdrop()} />
      <BaseAlertDialog.Popup
        ref={ref}
        className={(state) =>
          popup({
            className:
              typeof className === 'function' ? className(state) : className,
          })
        }
        {...props}
      />
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = 'AlertDialogContent';

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { header } = alertDialogVariants();
  return <div className={header({ className })} {...props} />;
};
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>
>(({ className, ...props }, ref) => {
  const { title } = alertDialogVariants();
  return (
    <BaseAlertDialog.Title
      ref={ref}
      className={(state) =>
        title({
          className:
            typeof className === 'function' ? className(state) : className,
        })
      }
      {...props}
    />
  );
});
AlertDialogTitle.displayName = 'AlertDialogTitle';

const AlertDialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Description>
>(({ className, ...props }, ref) => {
  const { description } = alertDialogVariants();
  return (
    <BaseAlertDialog.Description
      ref={ref}
      className={(state) =>
        description({
          className:
            typeof className === 'function' ? className(state) : className,
        })
      }
      {...props}
    />
  );
});
AlertDialogDescription.displayName = 'AlertDialogDescription';

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { footer } = alertDialogVariants();
  return <div className={footer({ className })} {...props} />;
};
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Close
    render={<Button ref={ref} className={className} {...props} />}
  />
));
AlertDialogAction.displayName = 'AlertDialogAction';

const AlertDialogCancel = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Close
    render={
      <Button variant="outline" ref={ref} className={className} {...props} />
    }
  />
));
AlertDialogCancel.displayName = 'AlertDialogCancel';

export const AlertDialog = Object.assign(AlertDialogRoot, {
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});
