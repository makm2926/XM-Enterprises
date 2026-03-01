import { Globe2, ShieldCheck, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Premier Export Company in Pakistan
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              XM Enterprises stands at the forefront of global trade, bridging
              the gap between Pakistan's finest resources and international
              markets. As leading Pakistan exporters, we have established ourselves 
              as a reliable export partner for businesses worldwide, delivering 
              premium quality with a steadfast commitment to excellence.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is to deliver unparalleled quality across our diverse
              product range—including textiles, basmati rice, sports goods, leather, 
              and Himalayan pink salt—ensuring strict compliance with international
              export standards. We envision a globally connected marketplace
              where trust and quality drive sustainable growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Globe2 className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Global Reach
                  </h3>
                  <p className="mt-1 text-slate-600">
                    Exporting to the Americas, Europe, Middle East, Africa, and
                    Asia-Pacific.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-brand-green" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Export Compliance
                  </h3>
                  <p className="mt-1 text-slate-600">
                    Strict adherence to international quality and safety
                    standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-brand-orange" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Sustainable Growth
                  </h3>
                  <p className="mt-1 text-slate-600">
                    Building long-term partnerships through reliable supply
                    chains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.postimg.cc/DyJQ6Z2h/exports.jpg"
                alt="XM Enterprises Corporate Office and Logistics"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="text-4xl font-bold text-brand-blue mb-1">10+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
