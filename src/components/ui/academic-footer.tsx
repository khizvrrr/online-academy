import * as React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { ACADEMY_CONFIG } from '@/data/mockAcademyData'

export interface AcademicFooterProps {
  className?: string
}

export const AcademicFooter = React.forwardRef<React.ElementRef<'footer'>, AcademicFooterProps>(({ className, ...props }, ref) => {
  return (
    <footer className={cn('bg-slate-900 text-slate-300 text-sm border-t border-slate-800', className)} ref={ref} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand / Academy Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">{ACADEMY_CONFIG.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {ACADEMY_CONFIG.subtext}
            </p>
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Lead Educator: </span>
              {ACADEMY_CONFIG.teacherName} ({ACADEMY_CONFIG.teacherTitle})
            </div>
          </div>

          {/* Academic Pages */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Academy</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About & Faculty</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">Course Offerings</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/results" className="text-slate-400 hover:text-white transition-colors">Results & Feedback</Link>
              </li>
            </ul>
          </div>

          {/* Support & Admissions */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Admissions</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/apply" className="text-slate-400 hover:text-white transition-colors">Apply for Admission</Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Office</Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-400 hover:text-white transition-colors">Portal Sign In</Link>
              </li>
            </ul>
          </div>

          {/* Portals & Direct Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">Portals (Preview)</p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/student" className="text-slate-400 hover:text-white transition-colors">Student Portal</Link>
              </li>
              <li>
                <Link to="/teacher" className="text-slate-400 hover:text-white transition-colors">Teacher Dashboard</Link>
              </li>
              <li>
                <Link to="/admin" className="text-slate-400 hover:text-white transition-colors">Admin Dashboard</Link>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Contact: {ACADEMY_CONFIG.contactEmail}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {ACADEMY_CONFIG.name}. All institutional information is placeholder and subject to educator configuration.</p>
          <div className="flex gap-4">
            <span className="text-slate-500">O & A-Level Tutoring Academy</span>
          </div>
        </div>
      </div>
    </footer>
  )
})

AcademicFooter.displayName = 'AcademicFooter'