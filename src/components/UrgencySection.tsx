
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const UrgencySection = () => {
  // Estado para el contador de tiempo
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  // Actualizar el contador cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              // Restablecer el timer cuando llegue a cero
              hours = 48;
              minutes = 0;
              seconds = 0;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 bg-gradient-to-r from-brand-accent to-pink-600 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">¡OFERTA FLASH! 15% DE DESCUENTO</h3>
            <p className="text-white/80 max-w-md">
              Sólo por tiempo limitado. Utiliza el código <span className="font-bold">URBAN15</span> al finalizar tu compra.
            </p>
          </div>
          
          {/* Contador */}
          <div className="flex items-center space-x-4">
            <Clock size={32} className="hidden sm:block" />
            <div className="flex space-x-2 sm:space-x-3">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-2 w-16 sm:w-20">
                  <span className="text-2xl sm:text-3xl font-bold block text-center">{String(timeLeft.hours).padStart(2, '0')}</span>
                </div>
                <span className="text-xs mt-1 text-white/80">HORAS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-2 w-16 sm:w-20">
                  <span className="text-2xl sm:text-3xl font-bold block text-center">{String(timeLeft.minutes).padStart(2, '0')}</span>
                </div>
                <span className="text-xs mt-1 text-white/80">MINUTOS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-2 w-16 sm:w-20">
                  <span className="text-2xl sm:text-3xl font-bold block text-center">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
                <span className="text-xs mt-1 text-white/80">SEGUNDOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
