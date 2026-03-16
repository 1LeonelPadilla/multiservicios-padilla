import { CheckCircle2, Factory, Settings } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-12 bg-industrial-yellow block"></span>
              <span className="text-industrial-dark font-bold tracking-widest uppercase text-sm">Sobre Nosotros</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              MÁS DE 10 AÑOS DE <span className="text-industrial-yellow">EXPERIENCIA</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 border-l-4 border-industrial-yellow pl-4">
              Somos un equipo altamente calificado, dedicados a brindar soluciones integrales en mantenimiento mecánico e industrial.
            </p>
            
            <p className="text-gray-600 mb-8">
              En Multi Servicios Padilla, comprendemos que el tiempo es dinero para la industria local. Nos especializamos en mantener operativa la maquinaria crítica de El Viejo y la región de Chinandega. Desde el mantenimiento de bombas indispensables para airear pilas en el sector camaronero, hasta el transporte terrestre y marítimo. Nuestro compromiso es la robustez y la confianza en cada trabajo.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="text-industrial-yellow shrink-0 mt-1 mr-3" size={24} />
                <div>
                  <h4 className="font-bold text-industrial-dark font-heading uppercase">Soporte al Sector Acuícola</h4>
                  <p className="text-gray-600 text-sm">Expertos en bombas de aireación para camaroneras.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-industrial-yellow shrink-0 mt-1 mr-3" size={24} />
                <div>
                  <h4 className="font-bold text-industrial-dark font-heading uppercase">Soluciones para Transporte</h4>
                  <p className="text-gray-600 text-sm">Mantenimiento de camiones, barcazas y vehículos particulares.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-industrial-yellow shrink-0 mt-1 mr-3" size={24} />
                <div>
                  <h4 className="font-bold text-industrial-dark font-heading uppercase">Carpintería Industrial</h4>
                  <p className="text-gray-600 text-sm">Trabajos a la medida y reparaciones estructurales.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Stats Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 w-full rounded-sm overflow-hidden shadow-2xl pb-[100%]">
              <img 
                src="https://images.unsplash.com/photo-1542106263-956db2936746?q=80&w=2000&auto=format&fit=crop" 
                alt="Maquinaria y equipo en El Viejo" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            
            {/* Yellow Highlight box */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-industrial-yellow p-8 shadow-xl max-w-xs">
              <div className="text-5xl font-heading font-black text-industrial-dark mb-2">10+</div>
              <p className="font-bold uppercase tracking-wider text-industrial-dark">Años sirviendo a la industria en Chinandega.</p>
            </div>
            
            {/* Industrial Accent Elements */}
            <div className="absolute -top-4 -right-4 z-0 w-32 h-32 border-[16px] border-industrial-light"></div>
            <div className="absolute top-1/2 -right-12 z-0 hidden md:flex flex-col space-y-2 opacity-10">
              <Factory size={64} />
              <Settings size={64} className="animate-spin-slow" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
