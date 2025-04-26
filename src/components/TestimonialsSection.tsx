
import React from 'react';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    id: 1,
    text: "Nunca pensé que una marca pudiera representar tan bien mi personalidad. Las prendas son increíbles y la calidad es excelente.",
    name: "Elena Martínez",
    location: "Madrid",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    rating: 5
  },
  {
    id: 2,
    text: "El diseño es increíble, ropa cómoda que además te hace sentir diferente. Ahora toda mi ropa es de URBANX.",
    name: "Alejandro Gómez",
    location: "Barcelona",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    rating: 5
  },
  {
    id: 3,
    text: "La mejor comunidad de moda que he encontrado. Me encanta cómo cada prenda tiene su propia historia.",
    name: "Carmen Vega",
    location: "Valencia",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-brand-accent text-white border-0">TESTIMONIOS</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">La comunidad habla</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex mb-4">
                {/* Estrellas de valoración */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-6 font-light italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h5 className="font-semibold">{testimonial.name}</h5>
                  <p className="text-sm text-gray-300">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
