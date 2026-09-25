import * as React from 'react'
import { AcademicNavbar } from '@/components/ui/academic-navbar'
import { AcademicFooter } from '@/components/ui/academic-footer'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeader } from '@/components/ui/section-header'
import { CourseCard } from '@/components/ui/course-card'
import { COURSES } from '@/data/mockAcademyData'

export default function Courses() {
  return (
    <main className="min-h-screen bg-background">
      <AcademicNavbar />

      <PageHeader
        title="Our Courses"
        subtitle="Comprehensive O & A-Level tuition programs designed for Cambridge and Edexcel examination success."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Courses' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <SectionHeader title="Available Programs" />
          <p className="text-muted-foreground max-w-3xl">
            Our specialized O & A-Level courses provide structured syllabus coverage, expert guidance, and rigorous practice 
            to ensure examination readiness. Each program is tailored to specific subject requirements and examination boards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </main>
  )
}