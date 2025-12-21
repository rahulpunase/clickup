import { tv } from "tailwind-variants";

const buttonVariant = tv({
    base: "rounded-full",
    variants: {
        color: {
            primary: "",
            secondary: "",
            success: "",
            danger: "",
            warning: "",
            info: "",
            light: "",
            dark: ""
        },
        size: {
            sm: "",
            md: "",
            lg: ""
        },
        variant: {
            outline: "",
            ghost: "",
            link: ""
        }
    }
});

export { buttonVariant };