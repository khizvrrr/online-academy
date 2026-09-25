import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'

export interface AcademicNavbarProps {
  className?: string
}

export const AcademicNavbar = React.forwardRef<React.ElementRef<'nav'>, AcademicNavbarProps>(({ className, ...props }, ref) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { href: '#courses', label: 'Courses' },
    { href: '#about', label: 'About' },
    { href: '#results', label: 'Results' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav className={cn('border-b bg-white/95 backdrop-blur-sm shadow-sm', className)} ref={ref} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="p-0">
              <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="15" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </Button>
            <span className="text-lg font-semibold tracking-tight text-primary">Meridian Academy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side: Login / Apply */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="px-4 py-1.5 text-sm">
              Login
            </Button>
            <Button size="sm" className="px-4 py-1.5">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pb-3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {isMobileMenuOpen ? 'Close Menu' : 'Menu'}
          </button>
          {isMobileMenuOpen && (
            <div className="mt-3 flex flex-col gap-3 pb-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
})

AcademicNavbar.displayName = 'AcademicNavbar'