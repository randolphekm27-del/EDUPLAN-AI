import * as React from "react"
import { cn } from "../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-brand-offwhite rounded-[4px] border border-brand-lightgray/30 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out",
          hoverable && "hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
