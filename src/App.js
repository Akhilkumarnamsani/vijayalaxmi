import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products/Products';
import Vegetables from './pages/Products/Vegetables';
import Spices from './pages/Products/Spices';
import Pulses from './pages/Products/Pulses';
import Fruits from './pages/Products/Fruits';
import Contact from './pages/Contact';

// Corrected Legal Page Imports (from pages/)
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/vegetables" element={<Vegetables />} />
        <Route path="/products/spices" element={<Spices />} />
        <Route path="/products/pulses" element={<Pulses />} />
        <Route path="/products/fruits" element={<Fruits />} />
        <Route path="/contact" element={<Contact />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
