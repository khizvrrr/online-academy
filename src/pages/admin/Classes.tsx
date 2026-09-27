import * as React from 'react'
import { DashboardLayout } from '@/components/ui/dashboard-layout'
import { SectionHeader } from '@/components/ui/section-header'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function AdminClassesPage() {
  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h10a2 2 0 002-2V3a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2zm0 10h10a2 2 0 002-2v-2a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2zm0-6h10a2 2 0 002-2v-2a2 2 0 10-4 0v2H3a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg> },
    { label: 'Applications', href: '/admin/applications', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6.364-1.636l-.707-.707M5 10l7-7 7 7" /></svg> },
    { label: 'Students', href: '/admin/students', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { label: 'Courses', href: '/admin/courses', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2zm0 0V9a2 2 0 012-2h2.586a1 1 0 00.707-2.943L15.057 3.293A1 1 0 0014.414 2H9a2 2 0 00-2 2v2" /></svg> },
    { label: 'Classes', href: '/admin/classes', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { label: 'Assignments', href: '/admin/assignments', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 000 4h5a2 2 0 000-4H9z" /></svg> },
    { label: 'Results', href: '/admin/results', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-.165-.004-.33-.011-.493z" /></svg> },
    { label: 'Resources', href: '/admin/resources', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2zm0 0V9a2 2 0 012-2h2.586a1 1 0 00.707-2.943L15.057 3.293A1 1 0 0014.414 2H9a2 2 0 00-2 2v2" /></svg> },
    { label: 'Testimonials', href: '/admin/testimonials', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { label: 'Settings', href: '/admin/settings', icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
  ]

  const classes = [
    { id: 1, name: 'O-Level Mathematics', topic: 'Algebra & Functions', schedule: 'Mon & Wed • 5:30 PM', students: 12 },
    { id: 2, name: 'O-Level Physics', topic: 'Mechanics', schedule: 'Tue & Thu • 4:00 PM', students: 8 },
    { id: 3, name: 'O-Level Chemistry', topic: 'Organic Chemistry', schedule: 'Fri • 3:00 PM', students: 10 },
  ]

  return (
    <DashboardLayout navItems={navItems} currentPath="/admin/classes" role="admin" userName="[ADMIN NAME]">
      <div className="space-y-8">
        <SectionHeader title="Classes" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search classes..." className="pl-10" />
        </div>
        <div className="space-y-4">
          {classes.map((c) => (
            <Card key={c.id} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center justify-between gap-4 p-4">
                <div>
                  <h3 className="font-medium text-gray-900">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.topic}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{c.schedule}</p>
                  <p className="text-sm text-muted-foreground">{c.students} students</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}