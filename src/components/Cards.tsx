import * as React from "react"
import { cn } from "../lib/utils"
import { Card } from "./Card"
import { LucideIcon } from "lucide-react"

export interface LibraryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  metadata: string
  icon: LucideIcon
  iconColor?: string
  actions?: React.ReactNode
  progress?: number
}

export function LibraryCard({
  title,
  metadata,
  icon: Icon,
  iconColor = "text-brand-burgundy",
  actions,
  progress,
  className,
  ...props
}: LibraryCardProps) {
  return (
    <Card hoverable className={cn("group flex flex-col relative", className)} {...props}>
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2 rounded-md bg-white/50", iconColor)}>
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        {actions && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
            {actions}
          </div>
        )}
      </div>
      <div className="mt-auto">
        <h3 className="font-serif text-[18px] font-medium text-brand-black mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="font-sans text-[12px] text-brand-darkgray mb-3">
          {metadata}
        </p>
        {progress !== undefined && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] text-brand-darkgray/60 font-medium uppercase tracking-wider">
              <span>Progression</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-brand-lightgray/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-burgundy rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export interface TimelineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  sessionNumber: number
  title: string
  duration: string
  description?: string
  actions?: React.ReactNode
}

export function TimelineCard({
  sessionNumber,
  title,
  duration,
  description,
  actions,
  className,
  ...props
}: TimelineCardProps) {
  return (
    <Card 
      className={cn("flex flex-row items-stretch p-0 overflow-hidden hover:bg-[#F5F5F5] transition-colors", className)} 
      {...props}
    >
      <div className="w-1.5 bg-brand-burgundy shrink-0" />
      <div className="p-4 flex-1 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="bg-brand-burgundy/10 text-brand-burgundy font-medium text-xs px-2 py-1 rounded-sm shrink-0">
            Séance {sessionNumber}
          </div>
          <div>
            <h4 className="font-serif text-base font-medium text-brand-black">{title}</h4>
            <div className="flex items-center gap-2 text-xs text-brand-darkgray mt-1">
              <span>{duration}</span>
              {description && (
                <>
                  <span>•</span>
                  <span className="line-clamp-1">{description}</span>
                </>
              )}
            </div>
          </div>
        </div>
        {actions && (
          <div className="flex items-center gap-2 shrink-0">
            {actions}
          </div>
        )}
      </div>
    </Card>
  )
}
