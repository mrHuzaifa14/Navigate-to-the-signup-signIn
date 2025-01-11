import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Shop BMW</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Build Your Own</a></li>
              <li><a href="#" className="hover:text-gray-300">New Vehicles</a></li>
              <li><a href="#" className="hover:text-gray-300">Pre-Owned</a></li>
              <li><a href="#" className="hover:text-gray-300">Special Offers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Experience BMW</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">BMW M</a></li>
              <li><a href="#" className="hover:text-gray-300">BMW Electric</a></li>
              <li><a href="#" className="hover:text-gray-300">Motorsport</a></li>
              <li><a href="#" className="hover:text-gray-300">BMW Golf Cup</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Financial Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Service & Parts</a></li>
              <li><a href="#" className="hover:text-gray-300">BMW Connected Drive</a></li>
              <li><a href="#" className="hover:text-gray-300">Technology & Innovation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect with BMW</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-gray-300 cursor-pointer" />
              <Twitter className="h-6 w-6 hover:text-gray-300 cursor-pointer" />
              <Instagram className="h-6 w-6 hover:text-gray-300 cursor-pointer" />
              <Youtube className="h-6 w-6 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} BMW of North America, LLC. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}