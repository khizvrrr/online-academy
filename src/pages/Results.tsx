import * as React from 'react'
import { AcademicNavbar } from '@/components/ui/academic-navbar'
import { AcademicFooter } from '@/components/ui/academic-footer'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeader } from '@/components/ui/section-header'
import { ACADEMY_CONFIG } from '@/data/mockAcademyData'

export default function Results() {
  return (
    <main className="min-h-screen bg-background">
      <AcademicNavbar />

      <PageHeader
        title="Results & Testimonials"
        subtitle="Academic achievements and student feedback from our O & A-Level programs."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Results' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader title="Academic Achievements" />
        <p className="mb-8 text-muted-foreground max-w-3xl">
          Our students consistently achieve outstanding results in Cambridge and Edexcel examinations.
          The following statistics reflect our commitment to academic excellence.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="rounded-lg border bg-primary/5 p-6 text-center">
            <p className="text-4xl font-bold text-primary">85%</p>
            <p className="mt-2 text-sm text-muted-foreground">A*-A Grades</p>
            <p className="text-xs text-muted-foreground mt-1">[Mock data - placeholder]</p>
          </div>
          <div className="rounded-lg border bg-primary/5 p-6 text-center">
            <p className="text-4xl font-bold text-primary">92%</p>
            <p className="mt-2 text-sm text-muted-foreground">Pass Rate</p>
            <p className="text-xs text-muted-foreground mt-1">[Mock data - placeholder]</p>
          </div>
          <div className="rounded-lg border bg-primary/5 p-6 text-center">
            <p className="text-4xl font-bold text-primary">100%</p>
            <p className="mt-2 text-sm text-muted-foreground">Student Satisfaction</p>
            <p className="text-xs text-muted-foreground mt-1">[Mock data - placeholder]</p>
          </div>
          <div className="rounded-lg border bg-primary/5 p-6 text-center">
            <p className="text-4xl font-bold text-primary">15+</p>
            <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
            <p className="text-xs text-muted-foreground mt-1">[Mock data - placeholder]</p>
          </div>
        </div>

        {/* Testimonials */}
        <SectionHeader title="Student Testimonials" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <span className="text-sm font-bold text-primary">S{i}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">[Student Name {i}]</p>
                  <p className="text-xs text-muted-foreground">[School Name {i}]</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                [Testimonial {i} - Student feedback about their experience at {ACADEMY_CONFIG.name} and their academic progress.]
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}