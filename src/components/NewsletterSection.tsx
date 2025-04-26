
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Error",
        description: "Por favor, introduce un email válido.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulamos una llamada a la API
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "¡Suscripción completada!",
        description: "Tu código de descuento se ha enviado a tu email.",
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto bg-brand-gray rounded-2xl p-8 md:p-12 text-center">
          <div className="bg-brand-yellow w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center">
            <Bell size={24} className="text-brand-black" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Únete a nuestra newsletter</h2>
          
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Suscríbete y consigue un <span className="font-bold text-brand-accent">10% de descuento</span> en tu primera compra. Mantente al día con las últimas tendencias y lanzamientos.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu dirección de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
              required
            />
            <Button 
              type="submit" 
              className="btn-primary h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Suscribirme'}
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            Al suscribirte, aceptas nuestra política de privacidad y recibirás comunicaciones sobre productos, eventos y ofertas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
