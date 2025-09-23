import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Investors from "@/pages/Investors";
import Press from "@/pages/Press";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import PersonalPlans from "@/pages/PersonalPlans";
import StudentPlans from "@/pages/StudentPlans";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";
import Support from "@/pages/Support";
import AI from "@/pages/AI";
import Help from "@/pages/Help";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import Refund from "@/pages/Refund";
import Accessibility from "@/pages/Accessibility";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/press" element={<Press />} />
            <Route path="/personal-plans" element={<PersonalPlans />} />
            <Route path="/student-plans" element={<StudentPlans />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;