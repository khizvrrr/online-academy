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
import TeacherDashboard from "./pages/teacher/Index";
import AdminDashboard from "./pages/admin/Index";

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
          <Route path="/student/course" element={<div>Student Course View</div>} />
          <Route path="/student/classes" element={<div>Student Classes View</div>} />
          <Route path="/student/assignments" element={<div>Student Assignments View</div>} />
          <Route path="/student/results" element={<div>Student Results View</div>} />
          <Route path="/student/resources" element={<div>Student Resources View</div>} />
          <Route path="/student/progress" element={<div>Student Progress View</div>} />
          <Route path="/student/profile" element={<div>Student Profile View</div>} />

          {/* Teacher Routes */}
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/students" element={<div>Teacher Students View</div>} />
          <Route path="/teacher/classes" element={<div>Teacher Classes View</div>} />
          <Route path="/teacher/assignments" element={<div>Teacher Assignments View</div>} />
          <Route path="/teacher/results" element={<div>Teacher Results View</div>} />
          <Route path="/teacher/resources" element={<div>Teacher Resources View</div>} />
          <Route path="/teacher/progress" element={<div>Teacher Progress View</div>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/applications" element={<div>Admin Applications View</div>} />
          <Route path="/admin/students" element={<div>Admin Students View</div>} />
          <Route path="/admin/courses" element={<div>Admin Courses View</div>} />
          <Route path="/admin/classes" element={<div>Admin Classes View</div>} />
          <Route path="/admin/assignments" element={<div>Admin Assignments View</div>} />
          <Route path="/admin/results" element={<div>Admin Results View</div>} />
          <Route path="/admin/resources" element={<div>Admin Resources View</div>} />
          <Route path="/admin/testimonials" element={<div>Admin Testimonials View</div>} />
          <Route path="/admin/settings" element={<div>Admin Settings View</div>} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;