import * as React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../util/";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "text-3xl font-medium",
      h2: "text-2xl font-medium",
      h3: "text-xl font-semibold",
      body: "",
      label: "",
    },
    size: {
      lg: "text-lg",
      md: "text-md",
      sm: "text-sm",
    },
    weight: {
      regular: "font-normal",
      medium: "",
      emphasised: "",
    },
  },
  compoundVariants: [
    {
      variant: "body",
      size: ["lg", "md"],
      weight: "emphasised",
      class: "font-medium",
    },
    {
      variant: "body",
      size: "sm",
      weight: "emphasised",
      class: "font-semibold",
    },
    {
      variant: "body",
      size: undefined,
      class: "text-base font-normal",
    },
    {
      variant: "label",
      class: "font-normal text-sm",
    },
  ],
});

/*
  I think the properties of a 'p' cover all use-cases here. 
  Will update if that turns out to not be the case
*/
interface TextProps
  extends React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof textVariants> {
  variant?: "h1" | "h2" | "h3" | "body" | "label";
  as?: "h1" | "h2" | "h3" | "label" | "span" | "p" | "div";
  size?: "lg" | "md" | "sm";
  weight?: "regular" | "medium" | "emphasised";
  asChild?: boolean;
}

const componentsForVariants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "span",
  label: "label",
};

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    { className, variant = "body", as, size, weight, asChild, ...props },
    ref
  ) => {
    const resolvedAs = as ? as : componentsForVariants[variant];
    const Comp = asChild ? Slot : resolvedAs;

    return (
      <Comp
        ref={ref}
        className={cn(textVariants({ variant, size, weight, className }))}
        {...props}
      />
    );
  }
);

export { Text };
