import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5493425551234?text=Hola!%20Quiero%20información%20sobre%20FitClub"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
