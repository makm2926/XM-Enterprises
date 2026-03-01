import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 mb-6">
              By accessing our website and utilizing our export services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Export Services and Quotes</h2>
            <p className="text-slate-600 mb-6">
              All quotes provided by XM Enterprises are subject to market fluctuations, shipping rates, and availability. A quote does not constitute a binding contract until a formal Purchase Order is accepted and an initial deposit is received.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Payment Terms</h2>
            <p className="text-slate-600 mb-6">
              Payment terms will be specified in the individual commercial invoice or contract. Standard international trade payment methods (such as Letter of Credit or T/T) apply. Goods remain the property of XM Enterprises until full payment is received.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Shipping and Delivery</h2>
            <p className="text-slate-600 mb-6">
              Delivery times are estimates and depend on shipping lines, customs clearance, and destination ports. XM Enterprises is not liable for delays caused by force majeure, customs inspections, or third-party logistics providers. Incoterms (e.g., FOB, CIF) will be clearly defined in the contract.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Quality Assurance and Claims</h2>
            <p className="text-slate-600 mb-6">
              We ensure all products meet international export standards before shipment. Any claims regarding product quality or quantity must be made in writing within 14 days of the cargo arriving at the destination port, accompanied by relevant inspection reports.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">6. Governing Law</h2>
            <p className="text-slate-600 mb-6">
              These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
