import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="inline-flex items-center text-brand-blue hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </a>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-6">
              XM Enterprises ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our export services.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 mb-6">
              We may collect personal identification information including, but not limited to: your name, company name, email address, phone number, shipping address, and business requirements when you fill out our contact forms or request a quote.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-6">
              The information we collect is used to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Process your inquiries and provide accurate quotes.</li>
              <li>Facilitate international shipping and customs documentation.</li>
              <li>Improve our customer service and website experience.</li>
              <li>Send periodic emails regarding your order or other products and services.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Data Protection</h2>
            <p className="text-slate-600 mb-6">
              We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Contact Us</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions regarding this Privacy Policy, you may contact us using the information below:
              <br /><br />
              <strong>XM Enterprises</strong><br />
              Multan, Pakistan<br />
              Email: info@xm.com.pk<br />
              Phone: +92 311 2222796
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
