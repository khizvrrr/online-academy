import * as React from 'react'
import { AcademicNavbar } from '@/components/ui/academic-navbar'
import { AcademicFooter } from '@/components/ui/academic-footer'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeader } from '@/components/ui/section-header'
import { CourseCard } from '@/components/ui/course-card'
import { ACADEMY_CONFIG, COURSES, HOW_IT_WORKS_STEPS, FAQS } from '@/data/mockAcademyData'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AcademicNavbar />

      {/* Hero Section */}
      <section className="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-background via-[--background] to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-primary mb-3">Welcome to Meridian Academy</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-none">
                Master O & A-Level Excellence
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Comprehensive O & A-Level tuition with experienced academic faculty, structured syllabus guidance, and personalized mentoring for Cambridge and Edexcel examinations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="px-6 py-3">
                  Browse Courses
                </Button>
                <Button variant="outline" size="lg" className="px-6 py-3">
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              {/* Hero banner placeholder */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-gray-100"></div>
                <div className="absolute -top-6 -right-6 text-4xl font-bold text-primary">01</div>
                <div className="absolute -bottom-6 -left-6 text-4xl font-bold text-primary">02</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="About Meridian Academy" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ACADEMY_CONFIG.tagline}
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {ACADEMY_CONFIG.teacherPhilosophy}
              </p>
            </div>
            <div className="relative">
              {/* Teacher profile placeholder */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-gray-100"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">[TEACHER PHOTO]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Featured Courses" />
          <p className="mb-8 text-muted-foreground max-w-2xl">
            {ACADEMY_CONFIG.teacherPhilosophy.split('.')[0]}. {ACADEMY_CONFIG.teacherPhilosophy.split('.')[1]}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Students Choose Meridian Academy" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 rounded-full bg-primary p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l13-13m0 0l-13 13M7 10h4m0 4H3m13 0a9 9 0 11-18 0 9 9 0 0118 0" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Small Batch Sizes</h3>
                <p className="text-sm text-muted-foreground">Max 12 students per class for personalized attention</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 rounded-full bg-primary p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Structured Syllabus</h3>
                <p className="text-sm text-muted-foreground">Topic-by-topic coverage with graded problem sets</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 rounded-full bg-primary p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 8V7m5 3v4m-5 3l-3-3m3 3v4m-6-8h.01M8 16h.01M12 16h.01M16 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Past Paper Mastery</h3>
                <p className="text-sm text-muted-foreground">Timed workshops with marking scheme scrutiny</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="How It Works" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-3 rounded-lg border bg-white p-5 shadow-sm"
              >
                <div className="flex-shrink-0 rounded-full bg-primary p-2">
                  <span className="text-lg font-bold text-white">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Results & Testimonials" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Result cards placeholder */}
            <div className="rounded-lg border bg-primary/5 p-6 text-center">
              <p className="text-3xl font-bold text-primary">85%</p>
              <p className="mt-2 text-sm text-muted-foreground">A*-A Grades</p>
            </div>
            <div className="rounded-lg border bg-primary/5 p-6 text-center">
              <p className="text-3xl font-bold text-primary">92%</p>
              <p className="mt-2 text-sm text-muted-foreground">Pass Rate</p>
            </div>
            <div className="rounded-lg border bg-primary/5 p-6 text-center">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="mt-2 text-sm text-muted-foreground">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="FAQ" />
          <div className="space-y-3">
            {FAQS.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className="rounded-lg border bg-white p-4 hover:bg-accent/5 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">{faq.question}</h3>
                  <svg className="h-4 w-4 text-primary transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Ready to Excel?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our small batch O & A-Level tuition programs. Limited spots available per batch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="px-8 py-3">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}