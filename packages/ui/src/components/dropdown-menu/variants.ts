import { tv } from "tailwind-variants";

export const itemVariants = tv({
    base: "py-1 px-2 rounded-md cursor-pointer flex items-center gap-2",
    variants: {
        variant: {
            default: "hover:bg-gray-100",
            danger: "text-rose-500 hover:bg-rose-100 hover:text-rose-600",
        }
    }
})