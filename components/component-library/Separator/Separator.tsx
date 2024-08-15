import * as React from "react"
import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import { cn } from "../util/"

const separatorVariants = cva(
  "flex w-full bg-border my-3",
  {
    variants: {
      size: {
        regular: "h-[1px]",
        lg: "h-[2px]"
      }
    }
  }
)

interface SeparatorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">, VariantProps<typeof separatorVariants> {
  size?: "regular" | "lg"
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(({ size = "regular", className, ...props }, ref) => (
  <div ref={ref} className={cn(separatorVariants({ size, className }))} {...props} />
))

export { Separator }