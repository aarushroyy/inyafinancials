'use client';

import { Mail, Phone, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='bg-white'>
    <footer className="relative bg-[#1D4B45] min-h-[500px] rounded-t-[48px] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <h2 className="text-white text-5xl font-light">Get in Touch</h2>
            
            <div className="space-y-4 max-w-md">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-xl bg-[#163632]/80 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full px-6 py-4 rounded-xl bg-[#163632]/80 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col justify-between mt-20">
            <div className="space-y-4">
              <Link href="mailto:inyafinancials@outlook.com" className="flex items-center text-white hover:text-gray-200 transition-colors">
                <Mail className="w-6 h-6 mr-3" />
                <span className="text-lg">inyafinancials@outlook.com</span>
              </Link>
              <Link href="tel:+918882816184" className="flex items-center text-white hover:text-gray-200 transition-colors">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-lg">+91 888-281-6184</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {/* Company Info */}
          <div className="space-y-2">
            <h3 className="text-white text-3xl font-medium">Inya Financials</h3>
            <p className="text-gray-300 text-xl">Tax & Investment Consultants</p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-12">
            <Link href="/services" className="text-white hover:text-gray-200 transition-colors">
              Our Services?
            </Link>
            <Link href="/how-it-works" className="text-white hover:text-gray-200 transition-colors">
              How it Works?
            </Link>
          </div>

          {/* Scroll to Top */}
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#1D4B45] transition-all"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}