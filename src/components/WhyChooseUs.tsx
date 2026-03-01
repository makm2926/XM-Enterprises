import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Verified Suppliers & Farms",
    description:
      "Direct sourcing from trusted, certified partners ensuring authenticity and quality at the origin.",
  },
  {
    title: "International Quality Standards",
    description:
      "Rigorous quality control processes compliant with global import regulations and certifications.",
  },
  {
    title: "Competitive Export Pricing",
    description:
      "Optimized supply chain operations allowing us to offer highly competitive rates in the global market.",
  },
  {
    title: "Reliable Logistics & Documentation",
    description:
      "End-to-end handling of freight, customs clearance, and all necessary export documentation.",
  },
  {
    title: "On-Time Global Delivery",
    description:
      "Strategic partnerships with leading shipping lines to ensure timely delivery to any port worldwide.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Why Choose Us as Your Pakistan Exporters
            </h2>
            <p className="text-lg text-slate-300 mb-10 text-center">
              As a leading export company in Pakistan, we provide
              a seamless international trading experience, mitigating risks and maximizing
              value for our global buyers.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                    <p className="mt-1 text-slate-400">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
