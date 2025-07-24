import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react or use icons of your choice
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-brand text-cream p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Vijayalaxmi Logo" className="h-10 sm:h-12" />
        </Link>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links (visible on desktop) */}
        <div className="hidden sm:flex space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col items-start px-4 space-y-2 text-sm">
          <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/products" className="hover:underline" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
