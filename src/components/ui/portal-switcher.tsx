import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'

export interface PortalOption {
  label: string
  href: string
  description: string
  icon: React.ReactNode
}

export interface PortalSwitcherProps extends React.HTMLAttributes<'div'> {
  options?: PortalOption[]
}

export const PortalSwitcher = React.forwardRef<HTMLDivElement, PortalSwitcherProps>(
  ({ options, className, ...props }, ref) => {
    const defaultOptions: PortalOption[] = [
      {
        label: 'Student Portal',
        href: '/student',
        description: 'Access your courses, assignments, and progress.',
        icon: (
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v10" />
          </svg>
        ),
      },
      {
        label: 'Teacher Dashboard',
        href: '/teacher',
        description: 'Manage classes, assignments, and student progress.',
        icon: (
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4h-1m0 0H9m11 0a4 4 0 00-4-4h-1m0 0a4 4 0 00-4 4v2" />
          </svg>
        ),
      },
      {
        label: 'Admin Dashboard',
        href: '/admin',
        description: 'Oversee applications, students, and academy settings.',
        icon: (
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.897a2.25 2.25 0 013.35 0l.04.04a2.25 2.25 0 01.675 1.543v2.187a2.25 2.25 0 01-.675 1.543l-.04.04a2.25 2.25 0 01-3.35 0l-.04-.04a2.25 2.25 0 01-.675-1.543V6.484a2.25 2.25 0 01.675-1.543l.04-.04z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12h.01M12 16h.01M12 8h.01" />
          </svg>
        ),
      },
    ]

    const portalOptions = options || defaultOptions

    return (
      <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)} ref={ref} {...props}>
        {portalOptions.map((option) => (
          <a
            key={option.href}
            href={option.href}
            className="group flex flex-col items-center gap-3 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">{option.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{option.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
            </div>
          </a>
        ))}
      </div>
    )
  }
)

PortalSwitcher.displayName = 'PortalSwitcher'