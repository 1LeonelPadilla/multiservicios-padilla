import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-white pt-16 pb-8 border-t-4 border-industrial-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div>
            <a href="#inicio" className="inline-block mb-4">
              <div className="bg-white p-2 rounded-sm w-48 flex items-center justify-center">
                <img src={logoImg} alt="Multi Servicios Padilla" className="w-full h-auto object-contain" />
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Mantenimiento industrial y mecánico confiable en El Viejo, Chinandega. Especialistas en camaroneras, transporte pesado y vehículos.
            </p>
            <div className="flex space-x-4">
              {/* Optional Social Icons */}
              <div className="w-10 h-10 bg-industrial-gray rounded-full flex items-center justify-center hover:bg-industrial-yellow hover:text-industrial-dark transition-colors cursor-pointer">
                <span className="font-bold">fb</span>
              </div>
              <div className="w-10 h-10 bg-industrial-gray rounded-full flex items-center justify-center hover:bg-industrial-yellow hover:text-industrial-dark transition-colors cursor-pointer">
                <span className="font-bold">ig</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-industrial-yellow uppercase">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Nuestros Servicios</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-white transition-colors">Galería de Trabajos</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-industrial-yellow uppercase">Contacto y Horarios</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-industrial-yellow mr-3 shrink-0 mt-1" size={20} />
                <span className="text-gray-400">El Viejo, Chinandega, Nicaragua</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-industrial-yellow mr-3 shrink-0" size={20} />
                <span className="text-gray-400">+505 0000 0000</span> {/* Placeholder phone */}
              </li>
              <li className="flex items-center">
                <Mail className="text-industrial-yellow mr-3 shrink-0" size={20} />
                <span className="text-gray-400">info@multiserviciospadilla.com</span>
              </li>
              <li className="flex items-start pt-2">
                <Clock className="text-industrial-yellow mr-3 shrink-0 mt-1" size={20} />
                <div className="text-gray-400">
                  <p>Lunes - Viernes: 7:00 AM - 5:00 PM</p>
                  <p>Sábados: 7:00 AM - 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Multi Servicios Padilla. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Diseñado para la industria pesada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
