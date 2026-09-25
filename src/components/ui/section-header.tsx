import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  className?: string
}

export const SectionHeader = React.forwardRef<React.ElementRef<'div'>, SectionHeaderProps>(
  ({ title, className, ...props }, ref) => {
    return (
      <div className={cn('mb-8', className)} ref={ref} {...props}>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'