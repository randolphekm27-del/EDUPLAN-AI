import * as React from "react"
import { cn } from "../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-[4px] border border-brand-lightgray/50 bg-white/50 px-3 py-2 text-sm text-brand-black ring-offset-brand-offwhite file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-darkgray/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-burgundy focus-visible:border-brand-burgundy disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
