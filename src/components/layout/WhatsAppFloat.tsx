import { whatsappLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MMR Traders on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-heading opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/25 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp" aria-hidden="true" />
        <WhatsAppIcon className="relative h-8 w-8 sm:h-9 sm:w-9" />
      </span>
    </a>
  );
}
