import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { ACADEMY_CONFIG } from '@/data/mockAcademyData'

export interface AcademicNavbarProps {
  className?: string
}

export const AcademicNavbar = React.forwardRef<React.ElementRef<'header'>, AcademicNavbarProps>(({ className, ...props }, ref) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About' },
    { href: '/results', label: 'Results' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className={cn('sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs', className)} ref={ref} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-primary/90 transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                {ACADEMY_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 uppercase font-medium">
                O & A-Level Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="rounded-full text-slate-700" asChild>
              <Link to="/login">Portal Login</Link>
            </Button>
            <Button size="sm" className="rounded-full px-4 shadow-xs" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Button size="sm" className="rounded-full text-xs px-3" asChild>
              <Link to="/apply">Apply</Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-center" asChild>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Portal Login
              </Link>
            </Button>
            <Button className="w-full justify-center" asChild>
              <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                Apply for Admission
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
})

AcademicNavbar.displayName = 'AcademicNavbar'