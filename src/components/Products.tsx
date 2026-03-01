import { ArrowRight, X, Maximize2 } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  keyword: string;
  details: string;
}

const products: Product[] = [
  {
    id: "textiles",
    title: "Textiles & Garments",
    description:
      "Premium textiles ready for export. High-quality cotton fabrics and finished garments manufactured in modern facilities.",
    image: "https://i.postimg.cc/m2YfPTKq/garment.jpg",
    alt: "Premium folded cotton garments, tight weave close-up, soft studio lighting, light grey background, 8k photorealistic.",
    keyword: "textile exporter Pakistan",
    details:
      "Our textile division specializes in high-thread-count cotton fabrics, ready-made garments, and home textiles. We ensure strict quality control from yarn spinning to final stitching, meeting international standards for durability, colorfastness, and comfort.",
  },
  {
    id: "rice",
    title: "Rice (Basmati & Non-Basmati)",
    description:
      "Premium long-grain Basmati rice. Export quality polished white rice sourced directly from verified farms.",
    image: "https://i.postimg.cc/c4RyvdVN/Pakistan-Rice-export.webp",
    alt: "Macro shot of extra-long white rice overflowing from a burlap sack, rustic wooden table, warm lighting, hyper-realistic.",
    keyword: "basmati rice exporter Pakistan",
    details:
      "We export the finest quality Basmati and Non-Basmati rice, known for its exceptional aroma, extra-long grain, and exquisite taste. Our rice is aged to perfection and processed in state-of-the-art milling facilities to ensure zero impurities.",
  },
  {
    id: "sports",
    title: "Sports Goods",
    description:
      "High-quality sports equipment for export. Professional hand-stitched soccer balls, cricket bats, and leather gloves.",
    image: "https://i.postimg.cc/rF1XDq7n/Sports-Goods.jpg",
    alt: "Premium hand-stitched leather soccer ball on a reflective black surface, dramatic rim lighting, dark moody background, 8k.",
    keyword: "sports goods exporter",
    details:
      "Sialkot's finest sports goods brought to the global market. We offer FIFA-quality hand-stitched soccer balls, premium English willow cricket bats, and professional-grade protective gear, crafted by skilled artisans.",
  },
  {
    id: "leather",
    title: "Leather Products",
    description:
      "Premium finished leather goods. Finely crafted briefcases, jackets, and wallets showcasing rich grain texture.",
    image: "https://i.postimg.cc/CLGTRw96/Leather-Products.webp",
    alt: "Luxury full-grain leather duffel bag resting on smooth marble, softbox lighting highlighting the natural leather grain, photorealistic.",
    keyword: "leather products export",
    details:
      "Our leather products are manufactured from top-grade, ethically sourced hides. We export a wide range of leather apparel, accessories, and industrial leather goods, featuring superior tanning, rich textures, and impeccable stitching.",
  },
  {
    id: "machinery",
    title: "Machinery & Industrial Equipment",
    description:
      "Heavy industrial machinery components and precision-engineered metal gears for global industrial applications.",
    image: "https://i.postimg.cc/Fsy5YhwM/Industrial-Machinery.jpg",
    alt: "Brand-new precision stainless steel machinery parts on a clean workbench, bright cold commercial lighting, 8k hyper-realistic.",
    keyword: "industrial equipment exporter",
    details:
      "We supply robust, precision-engineered machinery parts and industrial equipment. Our products are manufactured using high-grade stainless steel and advanced CNC machining, ensuring durability and exact specifications for heavy industries.",
  },
  {
    id: "salt",
    title: "Pink Himalayan Rock Salt",
    description:
      "Authentic Pink Himalayan Rock Salt. Natural rough-shaped salt lamps and coarse pink edible salt crystals.",
    image: "https://i.postimg.cc/VLQPsJZT/Rocksalt.jpg",
    alt: "Macro shot of coarse Pink Himalayan rock salt in a wood bowl, warm backlighting glowing through the pink crystals, crisp white background.",
    keyword: "Pink Himalayan salt exporter",
    details:
      "Mined directly from the foothills of the Himalayas, our Pink Rock Salt is 100% natural and unrefined. We export edible salt, therapeutic bath salts, and beautifully crafted salt lamps, rich in essential trace minerals.",
  },
];

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-slate-600 hover:text-slate-900 shadow-sm backdrop-blur-sm transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <img
              src={product.image}
              alt={product.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-10">
            <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-3">
              {product.keyword}
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {product.title}
            </h3>

            <div className="prose prose-slate mb-8">
              <p className="text-lg text-slate-700 font-medium mb-4">
                {product.description}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {product.details}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a
                href={`#contact?product=${product.id}`}
                onClick={onClose}
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-blue hover:bg-blue-700 transition-colors shadow-sm"
              >
                Request Quote
              </a>
              <a
                href={`https://wa.me/923112222796?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20${encodeURIComponent(product.title)}.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:text-brand-green transition-colors shadow-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Premium Export Products from Pakistan
          </h2>
          <p className="text-lg text-slate-600">
            Discover our diverse portfolio of high-quality products. As a top export company in Pakistan, 
            we source and manufacture to meet stringent international standards for global trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer flex flex-col"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64 overflow-hidden bg-slate-100 group-hover:shadow-inner">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-slate-900 px-5 py-2.5 rounded-full flex items-center font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <Maximize2 className="h-4 w-4 mr-2 text-brand-blue" />
                    View Details
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">
                  {product.keyword}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="inline-flex items-center text-brand-blue font-medium group-hover:translate-x-1 transition-transform">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                  <a
                    href={`#contact?product=${product.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center px-4 py-2 bg-brand-orange text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
