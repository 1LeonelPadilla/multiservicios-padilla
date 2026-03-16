import { Droplet, CarFront, Truck, Ship, Hammer, Wrench } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, isPrimary }) => (
  <div className={`p-8 border-t-4 transition-all duration-300 hover:-translate-y-2 group ${
    isPrimary 
      ? 'border-industrial-yellow bg-industrial-dark text-white' 
      : 'border-industrial-dark bg-white shadow-xl hover:shadow-2xl'
  }`}>
    <div className={`w-16 h-16 rounded-sm flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
      isPrimary ? 'bg-industrial-yellow text-industrial-dark' : 'bg-industrial-light text-industrial-dark'
    }`}>
      <Icon size={32} />
    </div>
    <h3 className={`text-xl font-heading font-black uppercase mb-4 ${isPrimary ? 'text-white' : 'text-industrial-dark'}`}>
      {title}
    </h3>
    <p className={isPrimary ? 'text-gray-400' : 'text-gray-600'}>
      {description}
    </p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Droplet,
      title: "Bombas Camaroneras",
      description: "Mantenimiento preventivo y correctivo de bombas para airear pilas en el sector acuícola. Optimizamos el rendimiento continuo.",
      isPrimary: true
    },
    {
      icon: CarFront,
      title: "Vehículos Particulares",
      description: "Mecánica general, revisión de motores, frenos, suspensión y reparaciones eléctricas para vehículos ligeros."
    },
    {
      icon: Truck,
      title: "Camiones y Transporte",
      description: "Servicio especializado para flotas de carga pesada. Mantenimiento de motores diésel, transmisiones y sistemas hidráulicos."
    },
    {
      icon: Ship,
      title: "Barcazas Mineras/Carga",
      description: "Reparación de motores estacionarios, sistemas de propulsión y mantenimiento preventivo para embarcaciones utilitarias."
    },
    {
      icon: Hammer,
      title: "Carpintería Industrial",
      description: "Construcción y reparación de estructuras de madera para barcazas, carrocerías y necesidades del entorno industrial."
    },
    {
      icon: Wrench,
      title: "Servicios por Pedido",
      description: "Nos adaptamos a las necesidades de tu empresa. Evaluamos daños en sitio y proponemos soluciones mecánicas efectivas."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-industrial-light background-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-1 w-8 bg-industrial-yellow block"></span>
            <span className="text-industrial-dark font-bold tracking-widest uppercase text-sm">Lo Que Hacemos</span>
            <span className="h-1 w-8 bg-industrial-yellow block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-industrial-dark uppercase tracking-tighter">
            Nuestros <span className="text-industrial-yellow">Servicios</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Ofrecemos soporte técnico especializado con enfoque en la durabilidad. Tu maquinaria en las mejores manos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Banner CTA */}
        <div className="mt-20 bg-industrial-dark p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border-l-8 border-industrial-yellow">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">¿Necesitas una cotización urgente?</h3>
            <p className="text-gray-400">Atendemos emergencias mecánicas en la zona de El Viejo.</p>
          </div>
          <a 
            href="https://wa.me/50500000000?text=Hola,%20necesito%20una%20cotizaci%C3%B3n%20urgente."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-industrial-yellow text-industrial-dark px-8 py-4 font-black uppercase tracking-wider hover:bg-white transition-colors"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
