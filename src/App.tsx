import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import PersonalPlans from "@/pages/PersonalPlans";
import StudentPlans from "@/pages/StudentPlans";
import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Features from "./pages/Features";
import AI from "./pages/AI";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Team from "./pages/Team";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Breadcrumbs />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/personal-plans" element={<PersonalPlans />} />
              <Route path="/student-plans" element={<StudentPlans />} />
              <Route path="/features" element={<Features />} />
              <Route path="/ai" element={<AI />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;