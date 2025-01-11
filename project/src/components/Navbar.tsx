import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-gray-900 font-bold text-xl">Brand</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/main" className="text-gray-900 hover:text-gray-600">Main Page</Link>
            <Link to="/login" className="text-gray-900 hover:text-gray-600">Login</Link>
            <Link to="/signup" className="text-gray-900 hover:text-gray-600">Sign Up</Link>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5" />
              <MapPin className="h-5 w-5" />
              <User className="h-5 w-5" />
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/main" className="block px-3 py-2 text-gray-900">Main Page</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-900">Login</Link>
            <Link to="/signup" className="block px-3 py-2 text-gray-900">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
