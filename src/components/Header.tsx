import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Why Us", href: "#why-us" },
    { name: "Markets", href: "#markets" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home">
              <Logo className="h-10 md:h-12" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-brand-blue to-brand-purple text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-gradient-to-r from-brand-blue to-brand-purple text-white px-6 py-3 rounded-md font-medium"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
