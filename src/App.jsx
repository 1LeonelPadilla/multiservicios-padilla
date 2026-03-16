import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="bg-industrial-light min-h-screen relative overflow-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
