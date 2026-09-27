import * as React from 'react'
import { useParams } from 'react-router-dom'
import { AcademicNavbar } from '@/components/ui/academic-navbar'
import { AcademicFooter } from '@/components/ui/academic-footer'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { COURSES } from '@/data/mockAcademyData'
import type { Course } from '@/types/academy'

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>()
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0]

  return (
    <main className="min-h-screen bg-background">
      <AcademicNavbar />

      <PageHeader
        title={course.title}
        subtitle={course.tagline}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: course.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Info */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                  {course.level}
                </span>
                <span className="text-sm text-muted-foreground">{course.examBoard}</span>
                <span className="text-sm text-muted-foreground">{course.code}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{course.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{course.description}</p>
            </div>

            {/* Syllabus Highlights */}
            <div>
              <SectionHeader title="Syllabus Coverage" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.syllabusHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Topics */}
            <div>
              <SectionHeader title="Course Topics" />
              <div className="space-y-4">
                {course.topics.map((topic) => (
                  <div key={topic.unit} className="rounded-lg border bg-white p-4 shadow-sm">
                    <h4 className="font-medium text-gray-900">{topic.unit}: {topic.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Details Card */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Course Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Duration</dt>
                  <dd className="text-sm font-medium text-gray-900">{course.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Batch Size</dt>
                  <dd className="text-sm font-medium text-gray-900">{course.batchSize}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Class Format</dt>
                  <dd className="text-sm font-medium text-gray-900">{course.classFormat}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Schedule</dt>
                  <dd className="text-sm font-medium text-gray-900">{course.schedule}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Prerequisites</dt>
                  <dd className="text-sm font-medium text-gray-900">{course.prerequisites}</dd>
                </div>
              </dl>
            </div>

            {/* Price & CTA */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{course.pricePlaceholder}</span>
              </div>
              <Button className="w-full">Apply for This Course</Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                [Payment details and enrollment terms will be provided during formal enrollment.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}