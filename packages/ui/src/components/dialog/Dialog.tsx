import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { XIcon } from 'lucide-react';
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { dialogVariants } from './Dialog.variants';

const DialogRoot = BaseDialog.Root;

const DialogTrigger = BaseDialog.Trigger;

const DialogPortal = BaseDialog.Portal;

const DialogClose = BaseDialog.Close;

const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => {
  const { overlay } = dialogVariants();
  return (
    <BaseDialog.Backdrop
      ref={ref}
      className={(state) =>
        overlay({
          className:
            typeof className === 'function' ? className(state) : className,
        })
      }
      {...props}
    />
  );
});
DialogOverlay.displayName = 'DialogOverlay';

interface DialogContentProps
  extends
    React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>,
    VariantProps<typeof dialogVariants> {}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, size, children, ...props }, ref) => {
    const { content, close } = dialogVariants({ size });

    return (
      <DialogPortal>
        <DialogOverlay />
        <BaseDialog.Popup
          ref={ref}
          className={(state) =>
            content({
              className:
                typeof className === 'function' ? className(state) : className,
            })
          }
          {...props}
        >
          {children}
          <BaseDialog.Close className={close()}>
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </BaseDialog.Close>
        </BaseDialog.Popup>
      </DialogPortal>
    );
  },
);
DialogContent.displayName = 'DialogContent';

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { header } = dialogVariants();
  return <div className={header({ className })} {...props} />;
};
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { footer } = dialogVariants();
  return <div className={footer({ className })} {...props} />;
};
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => {
  const { title } = dialogVariants();
  return (
    <BaseDialog.Title
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
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => {
  const { description } = dialogVariants();
  return (
    <BaseDialog.Description
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
DialogDescription.displayName = 'DialogDescription';

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Close: DialogClose,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
});
