import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Results from "./pages/Results";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Login from "./pages/Login";
import StudentDashboard from "./pages/student/Index";
import StudentCoursePage from "./pages/student/Course";
import StudentClassesPage from "./pages/student/Classes";
import StudentAssignmentsPage from "./pages/student/Assignments";
import StudentResultsPage from "./pages/student/Results";
import StudentResourcesPage from "./pages/student/Resources";
import StudentProgressPage from "./pages/student/Progress";
import StudentProfilePage from "./pages/student/Profile";
import TeacherDashboard from "./pages/teacher/Index";
import TeacherStudentsPage from "./pages/teacher/Students";
import TeacherClassesPage from "./pages/teacher/Classes";
import TeacherAssignmentsPage from "./pages/teacher/Assignments";
import TeacherResultsPage from "./pages/teacher/Results";
import TeacherResourcesPage from "./pages/teacher/Resources";
import TeacherProgressPage from "./pages/teacher/Progress";
import AdminDashboard from "./pages/admin/Index";
import AdminApplicationsPage from "./pages/admin/Applications";
import AdminStudentsPage from "./pages/admin/Students";
import AdminCoursesPage from "./pages/admin/Courses";
import AdminClassesPage from "./pages/admin/Classes";
import AdminAssignmentsPage from "./pages/admin/Assignments";
import AdminResultsPage from "./pages/admin/Results";
import AdminResourcesPage from "./pages/admin/Resources";
import AdminTestimonialsPage from "./pages/admin/Testimonials";
import AdminSettingsPage from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/results" element={<Results />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/login" element={<Login />} />

          {/* Student Routes */}
                    <Route path="/student" element={<StudentDashboard />} />
                    <Route path="/student/course" element={<StudentCoursePage />} />
                    <Route path="/student/classes" element={<StudentClassesPage />} />
                    <Route path="/student/assignments" element={<StudentAssignmentsPage />} />
                    <Route path="/student/results" element={<StudentResultsPage />} />
                    <Route path="/student/resources" element={<StudentResourcesPage />} />
                    <Route path="/student/progress" element={<StudentProgressPage />} />
                    <Route path="/student/profile" element={<StudentProfilePage />} />

          {/* Teacher Routes */}
                    <Route path="/teacher" element={<TeacherDashboard />} />
                    <Route path="/teacher/students" element={<TeacherStudentsPage />} />
                    <Route path="/teacher/classes" element={<TeacherClassesPage />} />
                    <Route path="/teacher/assignments" element={<TeacherAssignmentsPage />} />
                    <Route path="/teacher/results" element={<TeacherResultsPage />} />
                    <Route path="/teacher/resources" element={<TeacherResourcesPage />} />
                    <Route path="/teacher/progress" element={<TeacherProgressPage />} />

          {/* Admin Routes */}
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/applications" element={<AdminApplicationsPage />} />
                    <Route path="/admin/students" element={<AdminStudentsPage />} />
                    <Route path="/admin/courses" element={<AdminCoursesPage />} />
                    <Route path="/admin/classes" element={<AdminClassesPage />} />
                    <Route path="/admin/assignments" element={<AdminAssignmentsPage />} />
                    <Route path="/admin/results" element={<AdminResultsPage />} />
                    <Route path="/admin/resources" element={<AdminResourcesPage />} />
                    <Route path="/admin/testimonials" element={<AdminTestimonialsPage />} />
                    <Route path="/admin/settings" element={<AdminSettingsPage />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;