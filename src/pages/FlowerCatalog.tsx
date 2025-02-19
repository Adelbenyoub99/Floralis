import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { useStore } from '../data/store';

const FlowerCatalog = () => {
  const { flowers, addToCart } = useStore();
  const [search, setSearch] = useState('');

  const filteredFlowers = flowers.filter(flower =>
    flower.name.toLowerCase().includes(search.toLowerCase()) ||
    flower.latinName.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (flowerId: number) => {
    const flower = flowers.find(f => f.id === flowerId);
    if (flower) {
      addToCart({
        type: 'custom',
        name: `Bouquet personnalisé avec ${flower.name}`,
        price: flower.price,
        quantity: 1,
        flowers: [{ flowerId, quantity: 1 }]
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-gray-800">Catalogue des Fleurs</h1>
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une fleur..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredFlowers.map((flower) => (
          <div key={flower.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative h-64">
              <img
                src={flower.image}
                alt={flower.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-serif text-gray-800">{flower.name}</h3>
                  <p className="text-sm text-gray-500 italic">{flower.latinName}</p>
                </div>
                <span className="text-rose-500 font-semibold">{flower.price.toFixed(2)} €</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{flower.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">Saison: {flower.season}</span>
                <button
                  onClick={() => handleAddToCart(flower.id)}
                  className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition flex items-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Ajouter au bouquet</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowerCatalog;