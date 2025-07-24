import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand text-cream px-4 pt-10 pb-4 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <div className="flex flex-col items-center md:items-start gap-3 text-sm">
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="tel:+447424008212"
                className="flex items-center gap-2 hover:text-amber-300 transition-all duration-200"
              >
                <FaPhoneAlt /> 
              </a>
              <a
                href="mailto:support@vijayalaxmiltd.com"
                className="flex items-center gap-2 hover:text-amber-300 transition-all duration-200"
              >
                <FaEnvelope /> 
              </a>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-end space-x-5 text-2xl">
            <a
              href="https://instagram.com/vijayalaxmi_group"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:text-amber-300 hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>
                        <a
              href="https://wa.me/447424008212"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base hover:text-amber-300 transition transform hover:scale-110 duration-300"
            >
              <FaWhatsapp className="text-lg" /> 
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-sm">
        &copy; 2025 Vijayalaxmi Imports and Exports Ltd. All rights reserved.
      </div>
    </footer>
  );
}
