import * as React from 'react'
import { AcademicNavbar } from '@/components/ui/academic-navbar'
import { AcademicFooter } from '@/components/ui/academic-footer'
import { PageHeader } from '@/components/ui/page-header'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function Apply() {
  return (
    <main className="min-h-screen bg-background">
      <AcademicNavbar />

      <PageHeader
        title="Apply Now"
        subtitle="Submit your application to join Meridian Academy's O & A-Level programs."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Apply' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <SectionHeader title="Application Form" />
          <p className="text-muted-foreground mb-8">
            Please fill out the form below to apply for our O & A-Level tuition programs. 
            [TEACHER NAME] will review your application and contact you within 24-48 hours.
          </p>

          <form className="space-y-6">
            {/* Personal Information */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <Input id="firstName" required placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <Input id="lastName" required placeholder="Doe" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input id="email" type="email" required placeholder="john.doe@example.com" />
              </div>
              <div className="mt-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <Input id="phone" required placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            {/* Academic Information */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="currentLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Level *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grade-8">Grade 8</SelectItem>
                      <SelectItem value="grade-9">Grade 9</SelectItem>
                      <SelectItem value="grade-10">Grade 10 (O-Level)</SelectItem>
                      <SelectItem value="grade-11">Grade 11 (IGCSE)</SelectItem>
                      <SelectItem value="grade-12">Grade 12 (AS-Level)</SelectItem>
                      <SelectItem value="grade-13">Grade 13 (A2-Level)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="targetExam" className="block text-sm font-medium text-gray-700 mb-1">
                    Target Exam Series *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam series" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="may-june">May/June</SelectItem>
                      <SelectItem value="oct-nov">October/November</SelectItem>
                      <SelectItem value="march">March</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subjects" className="block text-sm font-medium text-gray-700 mb-1">
                  Subjects of Interest *
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="economics">Economics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4">
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                  Current School
                </label>
                <Input id="school" placeholder="School name" />
              </div>
            </div>

            {/* Additional Information */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" rows={4} placeholder="Any additional information or questions..." />
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button type="submit" className="px-8">
                Submit Application
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting this application, you agree to our terms and privacy policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}