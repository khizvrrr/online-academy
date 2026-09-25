import * as React from 'react'
import { DashboardLayout } from '@/components/ui/dashboard-layout'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function StudentDashboard() {
  const navItems = [
    {
      label: 'Dashboard',
      href: '/student',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h10a2 2 0 002-2V3a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2zm0 10h10a2 2 0 002-2v-2a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2zm0-6h10a2 2 0 002-2v-2a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'My Course',
      href: '/student/course',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2zm0 0V9a2 2 0 012-2h2.586a1 1 0 00.707-2.943L15.057 3.293A1 1 0 0014.414 2H9a2 2 0 00-2 2v2" />
        </svg>
      ),
    },
    {
      label: 'Classes',
      href: '/student/classes',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Assignments',
      href: '/student/assignments',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 000 4h5a2 2 0 000-4H9z" />
        </svg>
      ),
    },
    {
      label: 'Results',
      href: '/student/results',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-.165-.004-.33-.011-.493z" />
        </svg>
      ),
    },
    {
      label: 'Resources',
      href: '/student/resources',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2zm0 0V9a2 2 0 012-2h2.586a1 1 0 00.707-2.943L15.057 3.293A1 1 0 0014.414 2H9a2 2 0 00-2 2v2" />
        </svg>
      ),
    },
    {
      label: 'Progress',
      href: '/student/progress',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h10a2 2 0 002-2V3a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2zm0 10h10a2 2 0 002-2v-2a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2zm0-6h10a2 2 0 002-2v-2a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Profile',
      href: '/student/profile',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ]

  return (
    <DashboardLayout
      navItems={navItems}
      currentPath="/student"
      role="student"
      userName="[STUDENT NAME]"
    >
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, [STUDENT NAME]!
            </h1>
            <p className="mt-2 text-muted-foreground">
              Here's your academic overview for this week
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
                Current Course
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                O-Level Mathematics
              </p>
              <Badge variant="secondary" className="text-xs">
                Active
              </Badge>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Next Class
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Today • 5:30 PM
              </p>
              <p className="text-sm text-muted-foreground">
                Algebra & Functions
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Attendance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                95%
              </p>
              <p className="text-sm text-muted-foreground">
                This Month
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Assignments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                2
              </p>
              <p className="text-sm text-muted-foreground">
                Due this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Classes */}
        <SectionHeader title="Upcoming Classes" />
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
                      Algebra & Functions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Today • 5:30 PM - 7:00 PM
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Topic: Quadratic equations and graphing
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Assignments */}
        <SectionHeader title="Recent Assignments" />
        <div className="space-y-4">
          {[1, 2].map((i) => (
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
                      Assignment {i}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Due: Tomorrow
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete exercises on quadratic functions and their applications
                  </p>
                </div>
                <CardFooter className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    Submit
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