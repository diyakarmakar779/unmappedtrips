import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 transition-colors",
        outline:
          "border border-input bg-transparent text-foreground shadow-sm hover:bg-muted transition-colors",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        /* ── Unmapped Brand Variants ── */
        earthy:
          "bg-forest text-primary-foreground font-sans font-medium rounded-lg shadow-olive hover:shadow-hover transition-shadow transition-colors",
        gold:
          "bg-[hsl(var(--cta-green))] text-primary-foreground font-sans font-semibold rounded-lg hover:bg-[hsl(var(--cta-hover))] transition-colors shadow-olive",
        "ghost-light":
          "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/25 font-sans font-medium rounded-lg backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors",
        sand:
          "bg-secondary text-secondary-foreground border border-border font-sans font-medium rounded-lg hover:bg-secondary/70 transition-colors",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
