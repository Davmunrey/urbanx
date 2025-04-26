
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Cambia el estilo cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-display font-bold text-brand-black">URBAN<span className="text-brand-accent">X</span></a>
        
        {/* Navegación de escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-brand-black hover:text-brand-accent transition-colors">Hombre</a>
          <a href="#" className="text-brand-black hover:text-brand-accent transition-colors">Mujer</a>
          <a href="#" className="text-brand-black hover:text-brand-accent transition-colors">Accesorios</a>
          <a href="#" className="text-brand-black hover:text-brand-accent transition-colors">Colección</a>
        </nav>
        
        {/* Iconos */}
        <div className="flex items-center space-x-4">
          <button className="text-brand-black hover:text-brand-accent transition-colors">
            <Search size={20} />
          </button>
          <button className="text-brand-black hover:text-brand-accent transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-brand-accent text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
          </button>
          <button 
            className="md:hidden text-brand-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="container-custom py-5 flex justify-between items-center">
            <a href="/" className="text-2xl font-display font-bold">URBAN<span className="text-brand-accent">X</span></a>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            <a href="#" className="text-xl font-medium">Hombre</a>
            <a href="#" className="text-xl font-medium">Mujer</a>
            <a href="#" className="text-xl font-medium">Accesorios</a>
            <a href="#" className="text-xl font-medium">Colección</a>
            <Button className="btn-primary mt-4">Comprar ahora</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
