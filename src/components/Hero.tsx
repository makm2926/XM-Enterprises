import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100/50 mix-blend-multiply" />
        <img
          src="https://i.postimg.cc/MpXyHpF1/Word-export-map.png"
          alt="Global Trade Background"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-6 border border-brand-blue/20">
            <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2"></span>
            Premier Pakistan Exporters
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8">
            Export Company in Pakistan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">
              XM Enterprises
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 font-light">
            Your Trusted Partner in Global Trade | Exporting Quality Textiles, Basmati Rice, 
            Sports Goods & More Worldwide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://wa.me/923112222796?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20export%20products.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-slate-700 bg-white border border-slate-200 hover:border-brand-green hover:text-brand-green transition-colors shadow-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-brand-green" />
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
