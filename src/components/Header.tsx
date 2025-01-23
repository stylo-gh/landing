import React from 'react';
import { Droplets } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Droplets className="w-6 h-6" />
        <span className="text-2xl font-serif">Drippit</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-gray-600 hover:text-black">Features</a>
        <a href="#faq" className="text-gray-600 hover:text-black">FAQ</a>
      </nav>
      
      <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
        Get Early Access
      </button>
    </header>
  );
}