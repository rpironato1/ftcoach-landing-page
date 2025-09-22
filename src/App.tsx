import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Index from '@/pages/Index';
import About from '@/pages/About';
import Team from '@/pages/Team';
import PersonalPlans from '@/pages/PersonalPlans';
import StudentPlans from '@/pages/StudentPlans';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import Help from '@/pages/Help';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Cookies from '@/pages/Cookies';
import Accessibility from '@/pages/Accessibility';
import AI from '@/pages/AI';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import Support from '@/pages/Support';

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
            <Route path="/personal-plans" element={<PersonalPlans />} />
            <Route path="/student-plans" element={<StudentPlans />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;