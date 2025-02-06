import * as React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../util/";

const imageVariants = cva("", {
  variants: {
    variant: {
      default: "",
      rounded: "rounded",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, variant, ...props }, ref) => {
    return <img ref={ref} className={cn("", variant, className)} {...props} />;
  }
);

Image.displayName = "Image";

export { Image, imageVariants };
