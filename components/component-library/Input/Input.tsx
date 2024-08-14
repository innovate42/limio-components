import * as React from "react"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

import { Icon } from "../Icon/Icon"

import { cn } from "../util/"

const inputVariants = cva(
  cn(
    "flex h-10 w-full rounded-md border border-input bg-background text-sm",
    "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-[invalid=true]:border-destructive invalid:border-destructive",
    "peer/input"
  ),
  {
    variants: {
      size: {
        default: "text-sm h-10 px-3 py-2",
        small: "text-xs h-7 px-2 py-1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

interface InputProps
  extends VariantProps<typeof inputVariants>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, size = "default", ...props}: InputProps, ref) => {
    const isSearch = type === "search"

    return (
      <div className="relative">
        <input
          ref={ref}
          type={type}
          className={cn(
            inputVariants({ size: size }),
            {
              "pl-8": isSearch && size === "default",
              "pl-7": isSearch && size === "small",
            },
            className
          )}
          {...props}
        />
        {isSearch && (
          <div
            className={cn(
              "text-muted-foreground pointer-events-none absolute bottom-0 left-0 flex items-center justify-center",
              "peer-disabled/input:opacity-50",
              {
                "h-10 w-10": size === "default",
                "h-7 w-7": size === "small",
              }
            )}
            role="img"
          >
            <Icon icon={faMagnifyingGlass} width={14} />
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }