
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isLimited?: boolean;
  stock?: number;
}

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const products: Product[] = [
    {
      id: 1,
      name: "Urban Oversized Hoodie",
      category: "hoodies",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      isNew: true,
      stock: 5
    },
    {
      id: 2,
      name: "Graphic Street Tee",
      category: "tees",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      isLimited: true
    },
    {
      id: 3,
      name: "Washed Denim Jacket",
      category: "jackets",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1553143820-6bb68bc34679?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    },
    {
      id: 4,
      name: "Cargo Tech Pants",
      category: "pants",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      isNew: true
    },
    {
      id: 5,
      name: "Neon Statement Hoodie",
      category: "hoodies",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      stock: 3
    },
    {
      id: 6,
      name: "Vintage Logo Tee",
      category: "tees",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    },
    {
      id: 7,
      name: "Urban Bomber Jacket",
      category: "jackets",
      price: 109.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      isLimited: true,
      stock: 2
    },
    {
      id: 8,
      name: "Relaxed Fit Joggers",
      category: "pants",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'hoodies', name: 'Sudaderas' },
    { id: 'tees', name: 'Camisetas' },
    { id: 'jackets', name: 'Chaquetas' },
    { id: 'pants', name: 'Pantalones' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-brand-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Productos destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras prendas más populares, diseñadas para expresar tu personalidad sin decir una palabra.
          </p>
        </div>
        
        {/* Filtro de categorías */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-brand-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Grid de productos */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group">
              {/* Imagen del producto */}
              <div className="relative overflow-hidden h-80">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay con acción */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-brand-black font-medium px-4 py-2 rounded-md flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingBag size={18} />
                    <span>Añadir al carrito</span>
                  </button>
                </div>
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-brand-accent text-white border-0">Nuevo</Badge>
                  )}
                  {product.isLimited && (
                    <Badge className="bg-brand-yellow text-brand-black border-0">Edición limitada</Badge>
                  )}
                  {product.stock && product.stock < 10 && (
                    <Badge variant="outline" className="bg-white border-white">¡Solo {product.stock} unidades!</Badge>
                  )}
                </div>
              </div>
              
              {/* Detalles del producto */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">{categories.find(c => c.id === product.category)?.name}</p>
                  </div>
                  <span className="font-semibold">{product.price.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botón para ver más productos */}
        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center">
            Ver todos los productos
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
