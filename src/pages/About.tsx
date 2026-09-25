import * as React from 'react'
import { AcademicNavbar } from '@/components/ui/academic-navbar'
import { AcademicFooter } from '@/components/ui/academic-footer'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeader } from '@/components/ui/section-header'
import { ACADEMY_CONFIG } from '@/data/mockAcademyData'

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <AcademicNavbar />

      <PageHeader
        title="About Meridian Academy"
        subtitle="Learn about our teaching philosophy, academic approach, and the educator behind the academy."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Teacher Introduction */}
          <div>
            <SectionHeader title="Teacher Introduction" />
            <div className="flex items-start gap-6">
              <div className="relative flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-gray-100"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">[TEACHER PHOTO]</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900">{ACADEMY_CONFIG.teacherName}</h3>
                <p className="mt-1 text-primary">{ACADEMY_CONFIG.teacherTitle}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {ACADEMY_CONFIG.teacherBio}
                </p>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div>
            <SectionHeader title="Teaching Philosophy" />
            <p className="text-muted-foreground leading-relaxed">
              {ACADEMY_CONFIG.teacherPhilosophy}
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Conceptual Depth Over Rote Learning</h4>
                  <p className="text-sm text-muted-foreground">Students understand the 'why' behind every formula and theorem.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Structured Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">Step-by-step methodology for tackling complex examination questions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Rigorous Past Paper Analysis</h4>
                  <p className="text-sm text-muted-foreground">Marking scheme scrutiny and examiner report insights.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Individualized Academic Mentoring</h4>
                  <p className="text-sm text-muted-foreground">Personalized feedback and targeted improvement strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academy Information */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Academy Information" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-sm text-muted-foreground">{ACADEMY_CONFIG.officeLocation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Office Hours</h4>
                  <p className="text-sm text-muted-foreground">{ACADEMY_CONFIG.officeHours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary p-2">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Contact</h4>
                  <p className="text-sm text-muted-foreground">{ACADEMY_CONFIG.contactEmail}</p>
                  <p className="text-sm text-muted-foreground">{ACADEMY_CONFIG.phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications & Experience Placeholder */}
          <div>
            <SectionHeader title="Qualifications & Experience" />
            <div className="rounded-lg border bg-gray-50 p-6">
              <p className="text-muted-foreground">
                [QUALIFICATIONS & EXPERIENCE - Academic credentials, certifications, years of teaching experience, 
                subject specializations, and notable achievements to be configured by the educator.]
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                  [Degree / Certification 1]
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                  [Degree / Certification 2]
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                  [Years of Teaching Experience]
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
                  </svg>
                  [Subject Specializations]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}