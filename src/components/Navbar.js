import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

export default function Navbar() {
  return (
    <nav className="bg-brand text-cream p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Vijayalaxmi Logo" className="h-10 sm:h-12" />
        </Link>
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <Link to="/" className="hover:underline text-sm sm:text-base">Home</Link>
          <Link to="/about" className="hover:underline text-sm sm:text-base">About</Link>
          <Link to="/products" className="hover:underline text-sm sm:text-base">Products</Link>
          <Link to="/contact" className="hover:underline text-sm sm:text-base">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
