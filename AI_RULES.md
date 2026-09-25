# AI RULES — O/A LEVEL TUTORING ACADEMY

## 1. PROJECT PURPOSE

This project is a polished web platform for a small, professional O/A-Level online tutoring academy centered around an experienced teacher.

The final product will contain:

- Public academy website
- Student application/registration system
- Student portal
- Teacher dashboard
- Admin dashboard
- Courses
- Classes and schedules
- Attendance
- Assignments
- Resources
- Results
- Student progress
- Basic manual payment tracking
- Editable academy content

The product should feel like a real tutoring academy platform, NOT a generic SaaS template, LMS, CRM, marketplace, or AI startup.

Keep the product simple, practical, polished, and genuinely usable.

---

## 2. SOURCE OF TRUTH

The existing codebase is the source of truth for what has already been implemented.

Before making changes:

1. Inspect the existing implementation.
2. Understand the current architecture.
3. Reuse existing components and patterns.
4. Preserve working functionality.
5. Modify only what is necessary for the requested task.
6. Never rebuild the entire project unnecessarily.

Do NOT assume that something is missing just because it is not obvious from a previous conversation.

---

## 3. DEVELOPMENT PHILOSOPHY

Prefer:

- Simple architecture
- Clear TypeScript
- Reusable components
- Maintainable code
- Minimal dependencies
- Consistent design
- Responsive layouts
- Accessible UI
- Small focused changes

Avoid:

- Over-engineering
- Unnecessary abstractions
- Huge components
- Duplicated UI
- Unnecessary dependencies
- Rewriting working code
- Building future features before they are requested

When a feature can be implemented simply, choose the simpler implementation.

---

## 4. IMPORTANT: DO NOT INVENT REAL ACADEMY INFORMATION

The academy's actual information has not yet been provided.

Never invent or present fictional information as real academy information.

Do NOT invent:

- Academy name
- Teacher name
- Teacher qualifications
- Teacher experience
- Exam results
- Student results
- Testimonials
- Student counts
- Success rates
- Accreditations
- University affiliations
- Partnerships
- Prices
- Contact information
- Phone numbers
- Email addresses
- WhatsApp numbers
- Social media accounts
- Addresses

Use placeholders such as:

[ACADEMY NAME]
[TEACHER NAME]
[TEACHER PHOTO]
[TEACHER BIO]
[CONTACT EMAIL]
[PHONE NUMBER]
[WHATSAPP NUMBER]
[COURSE PRICE]
[COURSE DESCRIPTION]

Mock data may be used internally for UI development, but it must be clearly treated as placeholder/mock data and must not be presented as verified real information.

---

## 5. DESIGN SYSTEM

The design should be:

- Minimal
- Modern
- Elegant
- Academic
- Professional
- Trustworthy
- Human
- Premium without being flashy

Use:

- Light/white or very light neutral backgrounds
- Dark readable text
- One restrained accent color
- Strong typography
- Good spacing
- Clear hierarchy
- Subtle borders
- Subtle shadows
- Clean cards
- Minimal animation

Avoid:

- Neon colors
- Excessive gradients
- Excessive glassmorphism
- Excessive animations
- Overly colorful dashboards
- Huge decorative elements
- Generic AI/SaaS visual language
- Clutter

The primary visual direction is deep academic navy with restrained supporting neutrals.

The design must be responsive on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile usability is particularly important for students.

---

## 6. TECHNOLOGY

Current project technology:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- shadcn/ui-style components
- Radix UI components where already present

Use the existing stack.

Do NOT replace the framework or styling system unless explicitly requested.

Do NOT install unnecessary packages.

---

## 7. ARCHITECTURE

Maintain clear separation between:

### Public website

Public marketing/information pages for visitors.

### Student portal

Authenticated student experience.

### Teacher dashboard

Teacher management experience.

### Admin dashboard

Administrative management experience.

Keep these areas visually and structurally coherent while allowing appropriate differences in navigation and functionality.

---

## 8. ROUTES

The intended public routes are:

/
 /about
 /courses
 /courses/:courseId
 /results
 /how-it-works
 /faq
 /contact
 /apply
 /login

Student routes:

/student
/student/course
/student/classes
/student/assignments
/student/results
/student/resources
/student/progress
/student/profile

Teacher routes:

/teacher
/teacher/students
/teacher/classes
/teacher/assignments
/teacher/results
/teacher/resources
/teacher/progress

Admin routes:

/admin
/admin/applications
/admin/students
/admin/courses
/admin/classes
/admin/assignments
/admin/results
/admin/resources
/admin/testimonials
/admin/settings

Do not implement real authentication or authorization unless explicitly requested in the current task.

---

## 9. REUSABLE UI

Prefer reusable components for repeated patterns.

Examples:

- Button
- Card
- Badge
- Input
- Select
- Textarea
- Dialog
- Accordion
- Table
- Tabs
- Page header
- Section header
- Navbar
- Footer
- Sidebar
- Course card
- Testimonial card
- Dashboard card
- Status badge
- Empty state
- Loading state
- Error state

Do not create abstractions merely for the sake of abstraction.

---

## 10. PUBLIC WEBSITE

The intended public website includes:

### Home

- Hero
- Academy introduction
- Featured courses
- Why choose the academy
- How it works
- Teacher introduction
- Results/testimonials
- FAQ preview
- CTA
- Footer

### About

- Teacher introduction
- Teaching philosophy
- Academy information
- Placeholder areas for qualifications and experience

### Courses

- Course listing
- Subject
- Level
- Exam board
- Description
- CTA

### Course detail

- Course title
- Subject
- Level
- Exam board
- Syllabus
- Description
- Topics
- Class format
- Schedule
- Price
- Apply CTA

### Results

- Results/testimonial layout

### How It Works

1. Browse courses
2. Apply
3. Application review/contact
4. Enrollment
5. Attend classes
6. Access resources and assignments
7. Track progress

### FAQ

Use reusable accordion UI.

### Contact

Use placeholder contact information until real information is provided.

### Apply

Create the application UI when requested.

### Login

Create the login UI when requested.

---

## 11. DASHBOARDS

There are three separate roles:

### Student

Student portal should eventually include:

- Dashboard
- My Course
- Classes
- Assignments
- Results
- Resources
- Progress
- Profile

### Teacher

Teacher dashboard should eventually include:

- Dashboard
- Students
- Classes
- Assignments
- Results
- Resources
- Progress

### Admin

Admin dashboard should eventually include:

- Dashboard
- Applications
- Students
- Courses
- Classes
- Assignments
- Results
- Resources
- Testimonials
- Settings

Do not implement backend functionality until specifically requested.

---

## 12. BACKEND

The intended backend is Supabase.

Eventually it will handle:

- Authentication
- Database
- Storage
- Authorization
- Row Level Security

Do NOT add Supabase functionality unless the current task explicitly asks for it.

Do not create fake authentication systems.

Do not create fake database persistence.

---

## 13. SECURITY

When backend functionality is eventually implemented:

- Students must only access their own data.
- Teachers must only access authorized students/classes/data.
- Admins can manage the full academy.
- Authorization must be enforced server-side/database-side, not only through UI.
- Supabase Row Level Security must be used where appropriate.

Never treat hiding a UI element as sufficient authorization.

---

## 14. FUTURE FEATURES — DO NOT BUILD UNLESS REQUESTED

Do not proactively implement:

- AI tutor
- AI grading
- AI chatbot
- Automated workflows
- CRM
- Marketing automation
- WhatsApp automation
- Email automation
- Payment gateway
- Subscription billing
- Parent portal
- Multi-teacher marketplace
- Teacher commissions
- Mobile application
- Internal chat
- Forum
- Gamification
- Certificates
- Affiliate system
- Advanced analytics
- Advanced reporting
- Built-in video conferencing
- Complex curriculum management

---

## 15. CURRENT DEVELOPMENT PHASE

The project is being built incrementally.

Do NOT assume that later phases should be implemented automatically.

When given a task, implement ONLY the requested phase/task.

Before beginning a new phase:

- Inspect what already exists.
- Determine what is complete.
- Determine what is incomplete.
- Preserve existing work.
- Do not duplicate existing components.
- Do not rewrite unrelated pages.

---

## 16. RESPONSIVE DESIGN

Every new UI feature must work on:

- Mobile
- Tablet
- Laptop
- Desktop

Do not design desktop first and ignore mobile.

Pay particular attention to:

- Navigation
- Tables
- Sidebars
- Forms
- Cards
- Dashboard layouts
- Course pages

Avoid horizontal scrolling unless genuinely necessary.

---

## 17. ACCESSIBILITY

Use basic accessibility best practices:

- Semantic HTML
- Proper labels
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Meaningful button labels
- Appropriate heading hierarchy
- Alt text for meaningful images

Do not sacrifice usability for decorative design.

---

## 18. SEO

For public pages, maintain basic:

- Page titles
- Meta descriptions
- Semantic HTML
- Proper heading hierarchy
- Descriptive links

Do not spend time on advanced SEO unless specifically requested.

---

## 19. CONTENT RULES

Use concise, professional, natural language.

Avoid:

- Generic AI marketing language
- Fake claims
- Exaggerated promises
- "Revolutionary"
- "World-class" unless verified
- Fake statistics
- Fake testimonials
- Fake achievements

The academy should feel human and trustworthy.

---

## 20. WHEN MODIFYING EXISTING CODE

Before modifying a file:

- Read the relevant existing code.
- Understand its purpose.
- Preserve existing behavior unless the task requires changing it.

When adding a feature:

1. Reuse existing components.
2. Follow existing naming conventions.
3. Follow existing styling patterns.
4. Keep changes localized.
5. Test the affected area.
6. Do not modify unrelated code.

---

## 21. DO NOT REPEAT COMPLETED WORK

If a feature already exists:

- Do not rebuild it.
- Do not replace it with another implementation.
- Improve it only if the current task requires improvement.

Always inspect the current code before assuming something needs to be created.

---

## 22. TESTING

After making changes:

- Check for TypeScript errors.
- Check for build errors.
- Check affected routes.
- Check responsive behavior.
- Check that existing functionality still works.

Do not claim a feature is complete if the application does not build.

---

## 23. COMMUNICATION

Before implementing a large change:

- Briefly identify what you found in the existing codebase.
- State what you will modify.
- Keep the implementation focused.

After implementation:

- Summarize what changed.
- Mention important files/components changed.
- Mention anything intentionally left incomplete.
- Mention any errors that remain.

Do not provide unnecessary explanations.

---

## 24. MOST IMPORTANT RULE

PRESERVE THE EXISTING PROJECT.

This is an existing application being developed incrementally.

Never:

- Delete working features
- Rewrite the entire application
- Replace the architecture unnecessarily
- Reset the project
- Recreate existing components
- Start over

unless explicitly instructed to do so.

Always inspect first, then make the smallest clean change required.