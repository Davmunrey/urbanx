
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-black text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Modelo con ropa urbana" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      {/* Contenido */}
      <div className="container-custom relative z-10 mt-14 sm:mt-0">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Define tu <span className="text-brand-accent">estilo</span>.<br />
            Rompe las reglas.
          </h1>
          <p className="text-lg sm:text-xl opacity-90 mb-8 font-light">
            La nueva colección ya está aquí. Prendas que desafían lo convencional para quienes no tienen miedo de destacar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary flex items-center gap-2 text-base">
              Comprar ahora <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-black">
              Ver colección
            </Button>
          </div>
          
          {/* Indicadores de características */}
          <div className="hidden md:flex items-center space-x-6 mt-16">
            <div className="flex flex-col">
              <span className="text-sm uppercase tracking-wider opacity-75">Envío gratis</span>
              <span className="font-medium">En pedidos +50€</span>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="flex flex-col">
              <span className="text-sm uppercase tracking-wider opacity-75">Devoluciones</span>
              <span className="font-medium">30 días garantía</span>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="flex flex-col">
              <span className="text-sm uppercase tracking-wider opacity-75">Descuento</span>
              <span className="font-medium">15% primera compra</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm mb-2">Descubre más</span>
        <div className="h-12 w-0.5 bg-white/50 animate-pulse-light"></div>
      </div>
    </section>
  );
};

export default HeroSection;
