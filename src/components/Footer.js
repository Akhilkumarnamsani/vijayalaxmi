import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand text-cream px-4 pt-8 pb-4 mt-12">
      <div className="max-w-6xl mx-auto">

        {/* Section Titles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center md:text-left">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <h4 className="text-lg font-semibold">Legal</h4>
          <h4 className="text-lg font-semibold">Contact</h4>
          <h4 className="text-lg font-semibold md:text-right text-center">Follow Us</h4>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left mb-6">
          {/* Quick Links */}
          <div>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <ul className="space-y-1">
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-sm">
            <a
              href="tel:+447424008212"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-300 transition-all duration-200"
            >
              <FaPhoneAlt /> 
            </a>
            <a
              href="mailto:info@vijayalaxmiltd.com"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-300 transition-all duration-200"
            >
              <FaEnvelope /> 
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-5 text-2xl">
            <a
              href="https://wa.me/447424008212"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:text-amber-300 hover:scale-110 duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/vijayalaxmi_group"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:text-amber-300 hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm">
          &copy; 2025 Vijayalaxmi Imports and Exports Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
