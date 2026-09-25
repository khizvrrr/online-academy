import * as React from 'react'
import { AcademicNavbar } from '@/components/ui/academic-navbar'
import { AcademicFooter } from '@/components/ui/academic-footer'
import { PageHeader } from '@/components/ui/page-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function Login() {
  return (
    <main className="min-h-screen bg-background">
      <AcademicNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-muted-foreground">
              Sign in to access your portal
            </p>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <form className="space-y-4">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <Label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="my-4" />
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" asChild>
                  <a href="/student">Student Portal</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/teacher">Teacher Dashboard</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/admin">Admin Dashboard</a>
                </Button>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <a href="/apply" className="text-primary hover:underline font-medium">
                  Apply Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}