import * as React from 'react'
import { cn } from '@/lib/utils'

export interface AcademicFooterProps {
  className?: string
  links?: { label: string; href: string }[]
}

export const AcademicFooter = React.forwardRef<React.ElementRef<'footer'>, AcademicFooterProps>(({ className, links = [], ...props }, ref) => {
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'About', href: '/about' },
    { label: 'Results', href: '/results' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className={cn('bg-gray-50 text-sm text-gray-600', className)} ref={ref} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand / Academy Info */}
          <div>
            <span className="text-lg font-semibold tracking-tight text-primary">Meridian Academy</span>
            <p className="mt-2 text-muted-foreground">
              {ACADEMY_CONFIG.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}

          {/* Contact Info */}
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Contact</p>
            <a href={`mailto:${ACADEMY_CONFIG.contactEmail}`} className="hover:text-primary transition-colors block">
              {ACADEMY_CONFIG.contactEmail}
            </a>
            <a href={`tel:${ACADEMY_CONFIG.phoneNumber}`} className="hover:text-primary transition-colors block mt-1">
              {ACADEMY_CONFIG.phoneNumber}
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Meridian Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
})

AcademicFooter.displayName = 'AcademicFooter'

// Export config reference for footer usage
export const ACADEMY_CONFIG = {
  name: '[ACADEMY NAME]',
  tagline: 'Dedicated O & A-Level Academic Tutoring',
}