import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoImg from '../assets/logo.1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-industrial-dark shadow-lg py-4' : 'bg-industrial-dark/90 md:bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-sm w-12 h-12 flex items-center justify-center">
                <img src={logoImg} alt="Multi Servicios" className="max-w-full max-h-full object-contain" />
              </div>
              <span className="hidden sm:block text-white font-heading font-black text-xl tracking-tighter">
                MULTI SERVICIOS <span className="text-industrial-yellow">PADILLA</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-industrial-yellow transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/50500000000?text=Hola,%20quiero%20cotizar%20un%20servicio%20en%20Multi%20Servicios%20Padilla"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-industrial-yellow text-industrial-dark px-6 py-2 font-bold uppercase tracking-wide hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-industrial-yellow focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-industrial-dark border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-industrial-yellow block px-3 py-4 font-medium text-base uppercase text-center w-full border-b border-gray-800"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/50500000000?text=Hola,%20quiero%20cotizar%20un%20servicio%20en%20Multi%20Servicios%20Padilla"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-industrial-yellow text-industrial-dark px-6 py-3 font-bold uppercase tracking-wide w-[90%] flex justify-center items-center gap-2"
            >
              <Phone size={18} />
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
