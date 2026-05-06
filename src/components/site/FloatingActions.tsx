import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => (
  <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
    <a
      href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20a%20quote%20for%20vehicle%20transport"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="group flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-elegant transition-smooth hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
    <a
      href="tel:+919999999999"
      aria-label="Call"
      className="group flex h-14 w-14 items-center justify-center rounded-full gradient-accent text-accent-foreground shadow-accent transition-smooth hover:scale-110 animate-float"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingActions;
