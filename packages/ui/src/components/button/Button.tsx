import { Button as Root } from '@base-ui/react/button';
import { buttonVariant } from "./variants";

type ButtonProps = {
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    size?: "sm" | "md" | "lg";
    variant?: "outline" | "ghost" | "link";
}

const Button = ({color, size, variant}: ButtonProps) => {
  return (
    <Root className={buttonVariant({color, size, variant})}>
        content
    </Root>
  )
}

export {Button}