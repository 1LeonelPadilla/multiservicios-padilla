import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const GalleryItem = ({ image, title, onClick }) => (
  <div 
    className="group relative cursor-pointer overflow-hidden bg-industrial-dark isolate"
    onClick={() => onClick(image, title)}
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>
    
    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <h4 className="text-white font-heading font-bold uppercase text-lg mb-1">{title}</h4>
      <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        <span className="text-industrial-yellow text-sm font-medium tracking-wider">VER PROYECTO</span>
        <ZoomIn className="text-white" size={20} />
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  const projects = [
    {
      title: "Mantenimiento Bombas Camaroneras",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Reparación Motor Diésel",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Estructura para Barcaza",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dbd?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Revisión Sistema Hidráulico",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Mecánica Automotriz Ligeros",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Carpintería Industrial Aplicada",
      image: "https://images.unsplash.com/photo-1505069190533-da1c9af13346?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  const openModal = (image, title) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="galeria" className="py-24 bg-industrial-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-12 bg-industrial-yellow block"></span>
              <span className="text-industrial-yellow font-bold tracking-widest uppercase text-sm">Nuestro Portafolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">
              Galería de <span className="text-industrial-yellow">Trabajos</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm mt-6 md:mt-0 md:text-right font-medium">
            Imágenes de las soluciones que brindamos al sector acuícola y transporte en El Viejo.
          </p>
        </div>

      </div>

      {/* Grid stretches full width visually */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <GalleryItem key={index} {...project} onClick={openModal} />
        ))}
      </div>

      {/* Lightbox / Modal Minimalista */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm transition-opacity">
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-industrial-yellow transition-colors z-[110]"
          >
            <X size={40} />
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img 
              src={currentImage} 
              alt={currentTitle} 
              className="max-w-full max-h-[80vh] object-contain border border-gray-800 shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white font-heading text-2xl uppercase tracking-widest font-bold">
                {currentTitle}
              </h3>
              <p className="text-industrial-yellow mt-2">Multi Servicios Padilla</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
