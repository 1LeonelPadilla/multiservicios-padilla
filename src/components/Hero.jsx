import { Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative h-screen min-h-[600px] flex items-center bg-industrial-dark"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // Placeholder for heavy machinery / industrial pump 
          backgroundImage: 'url("https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-industrial-dark/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <span className="h-1 w-12 bg-industrial-yellow block"></span>
            <span className="text-industrial-yellow font-bold tracking-widest uppercase text-sm">Servicio Técnico Especializado</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-6 tracking-tighter shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            MULTI SERVICIOS <br />
            <span className="text-industrial-yellow">PADILLA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-medium animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Mantenimiento industrial y mecánico <span className="text-white font-bold">confiable</span> en El Viejo, Chinandega.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <a 
              href="https://wa.me/50500000000?text=Hola,%20quiero%20cotizar%20un%20servicio%20en%20Multi%20Servicios%20Padilla"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-industrial-yellow text-industrial-dark px-8 py-4 font-black uppercase tracking-wider text-center hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Wrench size={20} />
              Contáctanos por WhatsApp
            </a>
            <a 
              href="#servicios"
              className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider text-center hover:bg-white hover:text-industrial-dark transition-all duration-300"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
        <span className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Desliza</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-industrial-yellow rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
