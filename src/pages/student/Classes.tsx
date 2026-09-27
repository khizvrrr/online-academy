import * as React from 'react'
import { DashboardLayout } from '@/components/ui/dashboard-layout'
import { SectionHeader } from '@/components/ui/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function StudentClassesPage() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2zm0 0V9a2 2 0 012-2h2.586a1 1 0 00.707-2.943L15.057 3.293A1 1 0 0114.414 2H9a2 2 0 00-2 2v2" />
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

  const classes = [
    { id: 1, topic: 'Algebra & Functions', date: 'Today', time: '5:30 PM - 7:00 PM', status: 'Upcoming' },
    { id: 2, topic: 'Quadratic Equations', date: 'Tomorrow', time: '5:30 PM - 7:00 PM', status: 'Upcoming' },
    { id: 3, topic: 'Coordinate Geometry', date: 'Thursday', time: '5:30 PM - 7:00 PM', status: 'Upcoming' },
    { id: 4, topic: 'Trigonometry Basics', date: 'Last Monday', time: '5:30 PM - 7:00 PM', status: 'Completed' },
    { id: 5, topic: 'Number Systems', date: 'Last Thursday', time: '5:30 PM - 7:00 PM', status: 'Completed' },
  ]

  return (
    <DashboardLayout
      navItems={navItems}
      currentPath="/student/classes"
      role="student"
      userName="[STUDENT NAME]"
    >
      <div className="space-y-8">
        <SectionHeader title="My Classes" />
        <div className="space-y-4">
          {classes.map((cls) => (
            <Card key={cls.id} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center justify-between gap-4 p-4">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{cls.topic}</h3>
                  <p className="text-sm text-muted-foreground">{cls.date} • {cls.time}</p>
                </div>
                <Badge variant={cls.status === 'Upcoming' ? 'default' : 'secondary'}>
                  {cls.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}