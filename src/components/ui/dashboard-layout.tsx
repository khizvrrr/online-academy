import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'

export interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

export interface DashboardLayoutProps extends React.HTMLAttributes<'div'> {
  navItems: NavItem[]
  currentPath: string
  role: 'student' | 'teacher' | 'admin'
  userName?: string
  userRole?: string
  children: React.ReactNode
}

export const DashboardLayout = React.forwardRef<HTMLDivElement, DashboardLayoutProps>(
  ({ navItems, currentPath, role, userName, userRole, children, className, ...props }, ref) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false)

    return (
      <div className={cn('min-h-screen bg-gray-50', className)} ref={ref} {...props}>
        {/* Top Bar */}
        <div className="border-b bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
              <span className="text-lg font-semibold tracking-tight text-primary">
                {role === 'student' && 'Student Portal'}
                {role === 'teacher' && 'Teacher Dashboard'}
                {role === 'admin' && 'Admin Dashboard'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:block text-sm text-muted-foreground">
                {userName || '[USER NAME]'}
              </span>
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-white">
                  {(userName || 'U').charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-16">
            <div className="flex-1 flex flex-col min-h-0 border-r bg-white">
              <nav className="flex-1 px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = currentPath === item.href
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-100'
                      )}
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Sidebar - Mobile */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <Button variant="ghost" size="icon" className="text-white" onClick={() => setSidebarOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
                <div className="flex-1 flex flex-col min-h-0 border-r">
                  <nav className="flex-1 px-4 py-4 space-y-1">
                    {navItems.map((item) => {
                      const isActive = currentPath === item.href
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className={cn(
                            'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                            isActive
                              ? 'bg-primary/10 text-primary'
                              : 'text-gray-700 hover:bg-gray-100'
                          )}
                          onClick={() => setSidebarOpen(false)}
                        >
                          {item.icon}
                          {item.label}
                        </a>
                      )
                    })}
                  </nav>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="md:pl-64 flex-1">
            <div className="py-6 px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    )
  }
)

DashboardLayout.displayName = 'DashboardLayout'