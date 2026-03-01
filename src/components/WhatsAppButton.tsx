import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923112222796?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20export%20products.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
