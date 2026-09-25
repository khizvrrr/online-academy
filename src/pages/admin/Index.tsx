import * as React from 'react'
import { DashboardLayout } from '@/components/ui/dashboard-layout'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AdminDashboard() {
  const navItems = [
    {
      label: 'Dashboard',
      href: '/admin',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h10a2 2 0 002-2V3a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2zm0 10h10a2 2 0 002-2v-2a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2zm0-6h10a2 2 0 002-2v-2a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Applications',
      href: '/admin/applications',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      label: 'Students',
      href: '/admin/students',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4h-1m0 0H9m11 0a4 4 0 00-4-4h-1m0 0a4 4 0 00-4 4v2" />
        </svg>
      ),
    },
    {
      label: 'Courses',
      href: '/admin/courses',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      label: 'Classes',
      href: '/admin/classes',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Assignments',
      href: '/admin/assignments',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 000 4h5a2 2 0 000-4H9z" />
        </svg>
      ),
    },
    {
      label: 'Results',
      href: '/admin/results',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-.165-.004-.33-.011-.493z" />
        </svg>
      ),
    },
    {
      label: 'Resources',
      href: '/admin/resources',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2zm0 0V9a2 2 0 012-2h2.586a1 1 0 00.707-2.943L15.057 3.293A1 1 0 0014.414 2H9a2 2 0 00-2 2v2" />
        </svg>
      ),
    },
    {
      label: 'Testimonials',
      href: '/admin/testimonials',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      label: 'Settings',
      href: '/admin/settings',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.897a2.25 2.25 0 013.35 0l.04.04a2.25 2.25 0 01.675 1.543v2.187a2.25 2.25 0 01-.675 1.543l-.04.04a2.25 2.25 0 01-3.35 0l-.04-.04a2.25 2.25 0 01-.675-1.543V6.484a2.25 2.25 0 01.675-1.543l.04-.04z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  return (
    <DashboardLayout
      navItems={navItems}
      currentPath="/admin"
      role="admin"
      userName="[ADMIN NAME]"
    >
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, [ADMIN NAME]!
            </h1>
            <p className="mt-2 text-muted-foreground">
              Here's your academy overview
            </p>
          </div>
          <Button variant="outline" size="sm">
            View Calendar
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                48
              </p>
              <Badge variant="secondary" className="text-xs">
                Active
              </Badge>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                5
              </p>
              <Badge variant="destructive" className="text-xs">
                Needs Review
              </Badge>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                5
              </p>
              <p className="text-sm text-muted-foreground">
                This Term
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Upcoming Classes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                12
              </p>
              <p className="text-sm text-muted-foreground">
                This Week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <SectionHeader title="Quick Actions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex-shrink-0 rounded-full bg-primary p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Review Applications</h3>
                <p className="text-sm text-muted-foreground">5 pending applications</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex-shrink-0 rounded-full bg-primary p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Manage Courses</h3>
                <p className="text-sm text-muted-foreground">5 active courses</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex-shrink-0 rounded-full bg-primary p-2">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Schedule Classes</h3>
                <p className="text-sm text-muted-foreground">12 upcoming classes</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Applications */}
        <SectionHeader title="Recent Applications" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-medium">{i}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">
                      [Student Name {i}]
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {i === 1 ? 'Today' : i === 2 ? 'Yesterday' : '2 days ago'}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Applied for O-Level Mathematics • {i === 1 ? 'Pending Review' : i === 2 ? 'Under Review' : 'Approved'}
                  </p>
                </div>
                <CardFooter className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}