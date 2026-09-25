import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import type { Course } from '@/types/academy'

export interface CourseCardProps extends React.HTMLAttributes<article> {
  course: Course
}

export const CourseCard = React.forwardRef<HTMLArticleElement, CourseCardProps>(
  ({ course, className, ...props }, ref) => {
    return (
      <article className={cn('rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow', className)} ref={ref} {...props}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {course.subject}
            </span>
            <h3 className="mt-1 text-lg font-semibold text-gray-900">{course.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{course.tagline}</p>
          </div>
          <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
            {course.level}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span>{course.examBoard}</span>
          <span className="text-gray-300">•</span>
          <span>{course.code}</span>
          <span className="text-gray-300">•</span>
          <span>{course.duration}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">{course.pricePlaceholder}</span>
          <Button variant="outline" size="sm">
            View Course
          </Button>
        </div>
      </article>
    )
  }
)

CourseCard.displayName = 'CourseCard'