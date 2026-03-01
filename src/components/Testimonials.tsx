import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    company: "Global Imports Ltd.",
    country: "United Kingdom",
    quote:
      "XM Enterprises has been our most reliable partner for textiles. Their attention to detail and adherence to international quality standards is unmatched. Deliveries are always on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Al-Farsi",
    company: "Desert Oasis Trading",
    country: "United Arab Emirates",
    quote:
      "The quality of Basmati rice we receive from XM Enterprises is exceptional. Our customers specifically ask for their brand. Their logistics team makes the import process seamless.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Pacific Rim Sports",
    country: "Australia",
    quote:
      "We have been sourcing sports goods from them for over 3 years. The craftsmanship of their hand-stitched soccer balls and cricket gear is top-tier. Highly recommended.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Global Buyers
          </h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Here's what our international
            partners have to say about our products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-2xl p-8 relative border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-brand-blue/10" />

              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>

              <p className="text-slate-700 mb-8 italic relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.company}, {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
