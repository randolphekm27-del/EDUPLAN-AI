import * as React from "react"
import { cn } from "../lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-10 w-full appearance-none rounded-[4px] border border-brand-lightgray/50 bg-white/50 px-3 py-2 pr-8 text-sm text-brand-black ring-offset-brand-offwhite focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-burgundy focus-visible:border-brand-burgundy disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
