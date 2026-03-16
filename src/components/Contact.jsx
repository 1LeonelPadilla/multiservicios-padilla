import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-1 w-8 bg-industrial-yellow block"></span>
            <span className="text-industrial-dark font-bold tracking-widest uppercase text-sm">Comunícate</span>
            <span className="h-1 w-8 bg-industrial-yellow block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-industrial-dark uppercase tracking-tighter">
            ESTAMOS LISTOS PARA <span className="text-industrial-yellow">AYUDARTE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 relative z-10">
          
          {/* Contact Information & Map */}
          <div className="bg-industrial-light p-8 md:p-12 shadow-xl border-t-4 border-industrial-dark">
            <h3 className="text-2xl font-heading font-black uppercase mb-8 text-industrial-dark">Información de Contacto</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md text-industrial-dark mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-dark font-heading uppercase text-sm text-gray-400 tracking-wider">Dirección Principal</h4>
                  <p className="text-industrial-dark font-medium mt-1">El Viejo, Chinandega, Nicaragua</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md text-industrial-dark mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-dark font-heading uppercase text-sm text-gray-400 tracking-wider">Teléfonos de Emergencia</h4>
                  <p className="text-industrial-dark font-medium mt-1">+505 0000 0000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 shadow-md text-industrial-dark mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-dark font-heading uppercase text-sm text-gray-400 tracking-wider">Horario de Operaciones</h4>
                  <p className="text-industrial-dark font-medium mt-1">Lunes - Viernes: 7:00 AM - 5:00 PM</p>
                  <p className="text-industrial-dark font-medium">Sábados: 7:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps iFrame */}
            <div className="w-full h-64 bg-gray-200 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15447.88600863923!2d-87.16568855424915!3d12.641619958933355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f705ba307fa2193%3A0xc3f9bbcb27ae5534!2sEl%20Viejo%2C%20Nicaragua!5e0!3m2!1sen!2s!4v1715694801111!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ubicación Multi Servicios Padilla"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-industrial-dark p-8 md:p-12 shadow-2xl relative overflow-hidden text-white border-b-8 border-industrial-yellow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-yellow translate-x-16 -translate-y-16 rotate-45 opacity-20"></div>
            
            <h3 className="text-2xl font-heading font-black uppercase mb-2">Envíanos un Mensaje</h3>
            <p className="text-gray-400 mb-8 font-medium">Completa el formulario y nos contactaremos contigo lo antes posible con una evaluación.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nombre Completo *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black/40 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-industrial-yellow transition-colors"
                  placeholder="Ej. Juan Pérez"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-black/40 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-industrial-yellow transition-colors"
                    placeholder="Ej. +505 8888 8888"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/40 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-industrial-yellow transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Detalles del Servicio *</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-black/40 border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-industrial-yellow transition-colors resize-none"
                  placeholder="Menciona si es transporte, camaronera, tipo de maquinaria..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-industrial-yellow text-industrial-dark font-black uppercase tracking-widest py-4 mt-4 hover:bg-white transition-colors flex items-center justify-center gap-3"
              >
                Solicitar Cotización
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
