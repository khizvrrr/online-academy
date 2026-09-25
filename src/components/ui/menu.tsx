import * as React from 'react'
import { cn } from '@/lib/utils'

export interface MenuProps extends React.HTMLAttributes<'div'> {
  isOpen?: boolean
  onToggle?: () => void
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ isOpen, onToggle, className, ...props }, ref) => {
    return (
      <div className={cn('md:hidden', className)} ref={ref} {...props}>
        <button
          type="button"
          onClick={onToggle}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {isOpen ? 'Close Menu' : 'Menu'}
        </button>
      </div>
    )
  }
)

Menu.displayName = 'Menu'