
import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  const communityPhotos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      username: "@marc_style",
      likes: 254
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      username: "@laura_urban",
      likes: 187
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      username: "@street_carlos",
      likes: 329
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      username: "@maria_fashion",
      likes: 142
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      username: "@sofia_looks",
      likes: 276
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      username: "@alex_style",
      likes: 198
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Nuestra comunidad</h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Únete a miles de personas que ya forman parte del movimiento. Comparte tu estilo con #UrbanXStyle
            </p>
          </div>
          <Button className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:opacity-90">
            <Instagram className="mr-2" size={18} />
            Síguenos en Instagram
          </Button>
        </div>
        
        {/* Grid de fotos de la comunidad */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {communityPhotos.map((photo) => (
            <div key={photo.id} className="relative group overflow-hidden rounded-md">
              <img 
                src={photo.image} 
                alt={`Foto de ${photo.username}`} 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className="text-white font-semibold">{photo.username}</span>
                <div className="flex items-center text-white/80 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {photo.likes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
