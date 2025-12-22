import { tv } from "tailwind-variants";

const buttonVariant = tv({
    base: "rounded-md px-4 py-2 shadow-sm text-sm flex items-center justify-center cursor-pointer box-border transition-all duration-100 ease-in-out",
    variants: {
        size: {
            sm: "text-xs h-6",
            md: "text-sm h-7",
            lg: "text-base h-8"
        },
        color: {
            primary: "",
            secondary: "",
            danger: "",
            success: "",
            warning: "",
        },
        variant: {
            solid: "bg-none",
            outline: "shadow-none border",
            ghost: "shadow-none",
            link: "shadow-none hover:underline"
        }
    },
    compoundVariants: [
        // solid
        {
            variant: "solid",
            color: "primary",
            className: "bg-blue-500 text-white hover:bg-blue-600 border-blue-500 hover:border-blue-600"
        },
        {
            variant: "solid",
            color: "secondary",
            className: "bg-gray-200 text-gray-800 hover:bg-gray-300 border-gray-400 hover:border-gray-400"
        },
        {
            variant: "solid",
            color: "danger",
            className: "bg-rose-500 text-white hover:bg-rose-600 border-rose-500 hover:border-rose-600"
        },
        {
            variant: "solid",
            color: "success",
            className: "bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-500 hover:border-emerald-600"
        },
        {
            variant: "solid",
            color: "warning",
            className: "bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600"
        },
        // outline
        {
            variant: "outline",
            color: "primary",
            className: "text-blue-500 border-blue-500 hover:border-blue-600 hover:text-blue-600"
        },
        {
            variant: "outline",
            color: "secondary",
            className: "text-gray-700 border-gray-400 hover:border-gray-500 hover:text-gray-800"
        },
        {
            variant: "outline",
            color: "danger",
            className: "text-rose-500 border-rose-500 hover:border-rose-600 hover:text-rose-600"
        },
        {
            variant: "outline",
            color: "success",
            className: "text-emerald-500 border-emerald-500 hover:border-emerald-600 hover:text-emerald-600"
        },
        {
            variant: "outline",
            color: "warning",
            className: "text-yellow-500 border-yellow-500 hover:border-yellow-600 hover:text-yellow-600"
        },
        // ghost
        {
            variant: "ghost",
            color: "primary",
            className: "text-blue-500 border-blue-500 hover:border-blue-600 hover:bg-blue-50"
        },
        {
            variant: "ghost",
            color: "secondary",
            className: "text-gray-800 border-gray-400 hover:border-gray-400 hover:bg-gray-50"
        },
        {
            variant: "ghost",
            color: "danger",
            className: "text-rose-500 border-rose-500 hover:border-rose-500 hover:bg-rose-50"
        },
        {
            variant: "ghost",
            color: "success",
            className: "text-emerald-500 border-emerald-500 hover:border-emerald-500 hover:bg-emerald-50"
        },
        {
            variant: "ghost",
            color: "warning",
            className: "text-yellow-500 border-yellow-500 hover:border-yellow-500 hover:bg-yellow-50"
        },
        // link
        {
            variant: "link",
            color: "primary",
            className: "text-blue-500 hover:text-blue-600"
        },
        {
            variant: "link",
            color: "secondary",
            className: "text-gray-700 hover:text-gray-800"
        },
        {
            variant: "link",
            color: "danger",
            className: "text-rose-500 hover:text-rose-600"
        },
        {
            variant: "link",
            color: "success",
            className: "text-emerald-500 hover:text-emerald-600"
        },
        {
            variant: "link",
            color: "warning",
            className: "text-yellow-500 hover:text-yellow-600"
        },
    ],
    defaultVariants: {
        variant: "solid",
        color: "primary",
        size: "md"
    }
});

export { buttonVariant };