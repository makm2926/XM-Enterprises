import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <Logo className="h-12 md:h-16 mb-6" />
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Your trusted partner in global trade. We specialize in exporting
              premium quality products from Pakistan to markets worldwide,
              ensuring compliance, reliability, and excellence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="hover:text-brand-blue transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-blue transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-brand-blue transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="hover:text-brand-blue transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#markets"
                  className="hover:text-brand-blue transition-colors"
                >
                  Markets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-green mr-3 mt-0.5" />
                <span>+92 311 2222796</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                <span>info@xm.com.pk</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-blue mr-3 mt-0.5" />
                <span>Multan, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} XM Enterprises. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
