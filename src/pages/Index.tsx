
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import CommunitySection from '@/components/CommunitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import UrgencySection from '@/components/UrgencySection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Características principales */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-gray rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entregas rápidas</h3>
              <p className="text-gray-600">Recibe tu pedido en 24-48h en toda la península.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-gray rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad garantizada</h3>
              <p className="text-gray-600">Materiales premium y fabricación ética de alta calidad.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-gray rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Compra segura</h3>
              <p className="text-gray-600">Devoluciones gratuitas durante 30 días sin preguntas.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ProductsSection />
      
      {/* Banner colección destacada */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Colección destacada" 
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-16">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">Nueva colección <br /> Primavera-Verano</h3>
              <p className="text-white/90 mb-6 max-w-md">Descubre las nuevas tendencias que definirán tu estilo esta temporada.</p>
              <button className="bg-white text-brand-black font-medium px-6 py-3 rounded-md inline-flex items-center self-start hover:bg-opacity-90">
                Ver colección
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <UrgencySection />
      <TestimonialsSection />
      <CommunitySection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
