import { MapPin } from "lucide-react";

const markets = [
  "Americas",
  "Europe",
  "Middle East",
  "Africa",
  "Asia-Pacific",
  "Worldwide",
];

export default function Markets() {
  return (
    <section id="markets" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Global Export Markets We Serve
          </h2>
          <p className="text-lg text-slate-600">
            As dedicated Pakistan exporters, our network spans across continents, delivering quality
            products to diverse markets globally with reliable compliance and logistics.
          </p>
        </div>

        <div className="relative">
          {/* Map Graphic Placeholder */}
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-7 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative">
            <img
              src="https://i.postimg.cc/Kvk7fzZh/market.jpg"
              alt="XM Enterprises Global Export Markets"
              className="object-cover w-full h-full opacity-80 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 p-4 w-full max-w-4xl">
                {markets.map((market, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white flex items-center justify-center transform hover:-translate-y-1 transition-transform"
                  >
                    <MapPin className="h-5 w-5 text-brand-orange mr-2" />
                    <span className="font-semibold text-slate-800">
                      {market}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
