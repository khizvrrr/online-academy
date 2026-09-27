import * as React from 'react'
import { Link } from 'react-router-dom'
import { AcademicNavbar } from '@/components/ui/academic-navbar'
import { AcademicFooter } from '@/components/ui/academic-footer'
import { SectionHeader } from '@/components/ui/section-header'
import { CourseCard } from '@/components/ui/course-card'
import { Button } from '@/components/ui/button'
import { ACADEMY_CONFIG, COURSES, HOW_IT_WORKS_STEPS, FAQS } from '@/data/mockAcademyData'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AcademicNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-slate-50 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {ACADEMY_CONFIG.name} • O & A-Level Programs
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Focused Academic Tuition for Cambridge & Edexcel
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Structured, syllabus-aligned preparation led by experienced academic faculty. Small cohort sizes, concept mastery, and disciplined exam past paper walkthroughs.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full px-7 shadow-sm" asChild>
                  <Link to="/courses">Browse All Courses</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-7" asChild>
                  <Link to="/apply">Submit Application</Link>
                </Button>
                <Button variant="ghost" size="lg" className="rounded-full px-5 text-slate-600 hover:text-primary" asChild>
                  <Link to="/how-it-works">How It Works →</Link>
                </Button>
              </div>

              {/* Verified Features Pills */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200">
                <div>
                  <p className="text-xs uppercase font-medium text-slate-500">Cohort Size</p>
                  <p className="text-sm font-semibold text-slate-900">Max 10–12 Students</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-medium text-slate-500">Curricula</p>
                  <p className="text-sm font-semibold text-slate-900">CAIE & Pearson Edexcel</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-medium text-slate-500">Instruction Format</p>
                  <p className="text-sm font-semibold text-slate-900">Interactive Live Online</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      [T]
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{ACADEMY_CONFIG.teacherName}</p>
                      <p className="text-xs text-slate-500">{ACADEMY_CONFIG.teacherTitle}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                    Lead Faculty
                  </span>
                </div>

                <div className="aspect-[4/3] rounded-xl bg-slate-100 border border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-600">{ACADEMY_CONFIG.teacherPhotoPlaceholder}</span>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    Academic educator photo to be configured
                  </p>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
                  "{ACADEMY_CONFIG.teacherPhilosophy}"
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                    <Link to="/about">Teacher Profile</Link>
                  </Button>
                  <Button size="sm" className="w-full text-xs" asChild>
                    <Link to="/contact">Direct Inquiry</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Introduction & Pillars */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">Academic Philosophy</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">
              Rigorous Academic Guidance, Not Generic Video Lectures
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {ACADEMY_CONFIG.subtext}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Syllabus-Targeted Scope</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct adherence to official CAIE and Edexcel learning outcomes without superficial distractions or outdated curriculum material.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-.165-.004-.33-.011-.493z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Marking Scheme Precision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn exactly how examiners assign method marks, accuracy marks, and explanation marks to ensure full credit on multi-step questions.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4h-1m0 0H9m11 0a4 4 0 00-4-4h-1m0 0a4 4 0 00-4 4v2" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Dedicated Student Feedback</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Weekly homework review and personalized diagnostic critique so students identify error trends well before mock and final exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-primary">Academic Offerings</span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">Available Courses</h2>
              <p className="text-sm text-slate-600 mt-1">Specialized preparation cohorts currently open for enrollment.</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/courses">View All Courses ({COURSES.length}) →</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">Application & Study Flow</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">How It Works</h2>
            <p className="text-sm text-slate-600 mt-2">
              From application review to structured class sessions and exam mastery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.slice(0, 4).map((step) => (
              <div key={step.step} className="rounded-xl border border-slate-200 bg-white p-6 relative">
                <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-primary/10 inline-block mb-3">
                  Step {step.step}
                </span>
                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/how-it-works">Read Full 7-Step Academic Guide →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Teacher Showcase Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full bg-slate-100 border-2 border-primary/20 flex flex-col items-center justify-center text-slate-500 mb-4 p-2">
                <span className="text-xs font-semibold text-primary">{ACADEMY_CONFIG.teacherPhotoPlaceholder}</span>
                <span className="text-[10px] text-slate-400 mt-1">Faculty Photo</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{ACADEMY_CONFIG.teacherName}</h3>
              <p className="text-xs text-primary font-medium">{ACADEMY_CONFIG.teacherTitle}</p>
              <div className="mt-4 text-xs text-slate-500 border-t pt-3 w-full">
                [TEACHER CREDENTIALS & DEGREES PLACEHOLDER]
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary">Educator Bio</span>
              <h4 className="text-2xl font-bold text-slate-900">
                Direct Mentorship Under an Experienced Specialist
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {ACADEMY_CONFIG.teacherBio}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {ACADEMY_CONFIG.teacherPhilosophy}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button size="sm" asChild>
                  <Link to="/about">Full Educator Profile & Methodology</Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/contact">Schedule Academic Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">Common Questions</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-600 mt-1">Clear answers regarding class schedules, syllabus coverage, and admissions.</p>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq) => (
              <div key={faq.id} className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
                <h3 className="font-semibold text-slate-900 text-base">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/faq">View All FAQs →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/80">
            Admissions & Enrollment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Begin Your Examination Preparation?
          </h2>
          <p className="text-base text-primary-foreground/80 max-w-2xl mx-auto">
            Class cohorts are strictly limited in size to ensure meaningful student-teacher interaction. Submit your application early for upcoming exam cycles.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary font-semibold" asChild>
              <Link to="/apply">Submit Application Form</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent text-white border-white/30 hover:bg-white/10" asChild>
              <Link to="/contact">Contact Academic Office</Link>
            </Button>
          </div>
        </div>
      </section>

      <AcademicFooter />
    </main>
  )
}