import * as React from 'react'
import { cn } from '@/lib/utils'

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href?: string }[]
}

export const PageHeader = React.forwardRef<React.ElementRef<'div'>, PageHeaderProps>(
  ({ title, subtitle, breadcrumb, className, ...props }, ref) => {
    return (
      <div className={cn('border-b bg-white', className)} ref={ref} {...props}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {breadcrumb && (
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              {breadcrumb.map((item, i) => (
                <React.Fragment key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-gray-900">{item.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span className="text-gray-300">/</span>}
                </React.Fragment>
              ))}
            </nav>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          {subtitle && <p className="mt-2 text-muted-foreground max-w-3xl">{subtitle}</p>}
        </div>
      </div>
    )
  }
)

PageHeader.displayName = 'PageHeader'