
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Logo y descripción */}
          <div>
            <a href="/" className="text-2xl font-display font-bold mb-4 block">URBAN<span className="text-brand-accent">X</span></a>
            <p className="text-gray-400 mb-6">
              Ropa urbana diseñada para quienes quieren destacar. Estilo sin reglas, moda con actitud.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Enlaces rápidos</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Novedades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categorías</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Colecciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Outlet</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Información */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Información</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos y condiciones</a></li>
            </ul>
          </div>
          
          {/* Columna 4: Contacto */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contacto</h5>
            <ul className="space-y-3 text-gray-400">
              <li>C/ Gran Vía 123, Madrid</li>
              <li>info@urbanx.com</li>
              <li>+34 911 234 567</li>
              <li>Lun-Vie: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>
        
        {/* Separador */}
        <div className="h-px bg-white/10 mb-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} URBANX. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de cookies</a>
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
