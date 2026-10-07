import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button clay-hover inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-0 font-sans text-sm font-semibold whitespace-nowrap outline-none select-none focus-visible:ring-[3px] focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-destructive/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "clay-accent",
        outline: "clay-sm text-foreground aria-expanded:clay-pressed",
        secondary: "clay-sm text-foreground aria-expanded:clay-pressed",
        ghost:
          "bg-transparent text-foreground shadow-none hover:bg-surface-container-low hover:shadow-none aria-expanded:clay-pressed",
        destructive: "clay-sm text-destructive",
        link: "text-primary underline underline-offset-4 shadow-none hover:underline hover:shadow-none",
      },
      size: {
        default: "h-11 gap-2 px-6",
        xs: "h-8 gap-1 px-3.5 text-xs",
        sm: "h-10 gap-1.5 px-5",
        lg: "h-12 gap-2 px-8 text-[15px]",
        icon: "size-11",
        "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
