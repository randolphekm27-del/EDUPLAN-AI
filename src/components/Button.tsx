import * as React from "react"
import { cn } from "../lib/utils"
import { Loader2 } from "lucide-react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", isLoading, children, disabled, ...props }, ref) => {
    // Map old variants to new ones
    const mappedVariant = variant === "default" ? "primary" : 
                          variant === "outline" ? "secondary" : 
                          variant === "ghost" ? "tertiary" : 
                          variant;

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-[4px] font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary
            "bg-brand-burgundy text-white shadow-sm hover:bg-[#5A0808] hover:shadow-md": mappedVariant === "primary",
            // Secondary
            "bg-transparent border border-brand-darkgray text-brand-darkgray hover:border-brand-burgundy hover:text-brand-burgundy": mappedVariant === "secondary",
            // Tertiary
            "bg-transparent border-none text-brand-darkgray hover:text-brand-burgundy hover:underline underline-offset-4": mappedVariant === "tertiary",
            
            // Sizes
            "px-[24px] py-[12px] text-sm": size === "default",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      >
        {isLoading && <div className={cn("spinner mr-2", mappedVariant === "primary" && "spinner-white")} />}
        {isLoading ? "Chargement..." : children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
