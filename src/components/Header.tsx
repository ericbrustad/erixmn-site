"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wine-tours", label: "Wine Tours" },
  { href: "/transportation-to-amtrak", label: "Amtrak" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darker/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-gold tracking-wider">
              ERIX
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 uppercase tracking-widest">
              Coach &amp; Car
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+19522084920"
              className="hidden sm:flex items-center gap-2 bg-gold text-black px-4 py-2 text-sm font-semibold rounded hover:bg-gold-light transition-colors"
            >
              <Phone size={14} />
              952-208-4920
            </a>
            <a
              href="https://erixmn.addons.la/m/portal/?k=6ycYDgvrBmXpcbrsfkbx"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-white/10 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-white/20 transition-colors"
            >
              Book Now
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-darker border-t border-gold/20">
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-gold transition-colors uppercase tracking-wider text-sm py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+19522084920"
              className="flex items-center gap-2 bg-gold text-black px-4 py-3 text-sm font-semibold rounded mt-2 justify-center"
            >
              <Phone size={14} />
              Call 952-208-4920
            </a>
            <a
              href="https://erixmn.addons.la/m/portal/?k=6ycYDgvrBmXpcbrsfkbx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-4 py-3 text-sm font-semibold rounded text-center"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
