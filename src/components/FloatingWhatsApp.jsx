import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/50500000000?text=Hola,%20quiero%20cotizar%20un%20servicio%20en%20Multi%20Servicios%20Padilla"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:bg-[#1ebd5a] hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-industrial-dark text-white rounded py-2 px-4 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-2 after:border-8 after:border-transparent after:border-l-industrial-dark">
        ¡Cotiza tu servicio por WhatsApp!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
