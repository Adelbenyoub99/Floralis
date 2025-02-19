import React, { useState } from 'react';
import { Flower2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useStore } from '../data/store';

const CustomBouquet = () => {
  const { flowers, addToCart } = useStore();
  const [selectedFlowers, setSelectedFlowers] = useState<Array<{ flowerId: number; quantity: number }>>([]);
  const [occasion, setOccasion] = useState('');
  const [style, setStyle] = useState('');
  const [budget, setBudget] = useState('50-100');

  const occasions = [
    "Anniversaire",
    "Mariage",
    "Saint-Valentin",
    "Remerciement",
    "Deuil",
    "Félicitations"
  ];

  const styles = [
    "Romantique",
    "Champêtre",
    "Moderne",
    "Classique",
    "Exotique"
  ];

  const totalPrice = selectedFlowers.reduce((sum, selection) => {
    const flower = flowers.find(f => f.id === selection.flowerId);
    return sum + (flower?.price ?? 0) * selection.quantity;
  }, 0);

  const handleAddToCart = () => {
    if (selectedFlowers.length > 0) {
      addToCart({
        type: 'custom',
        name: `Bouquet personnalisé ${style} pour ${occasion}`,
        price: totalPrice,
        quantity: 1,
        flowers: selectedFlowers,
        occasion,
        style
      });
      setSelectedFlowers([]);
      setOccasion('');
      setStyle('');
      setBudget('50-100');
    }
  };

  const updateFlowerQuantity = (flowerId: number, delta: number) => {
    setSelectedFlowers(prev => {
      const existing = prev.find(f => f.flowerId === flowerId);
      if (!existing) {
        if (delta > 0) {
          return [...prev, { flowerId, quantity: delta }];
        }
        return prev;
      }

      const newQuantity = existing.quantity + delta;
      if (newQuantity <= 0) {
        return prev.filter(f => f.flowerId !== flowerId);
      }

      return prev.map(f =>
        f.flowerId === flowerId ? { ...f, quantity: newQuantity } : f
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-serif text-gray-800">Créez Votre Bouquet Personnalisé</h1>
        <p className="text-gray-600">Composez un bouquet unique qui correspond à vos envies</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-serif text-gray-800 mb-4">Occasion</h2>
            <div className="grid grid-cols-2 gap-3">
              {occasions.map((occ) => (
                <button
                  key={occ}
                  onClick={() => setOccasion(occ)}
                  className={`p-3 rounded-lg border transition ${
                    occasion === occ
                      ? 'border-rose-500 bg-rose-50 text-rose-700'
                      : 'border-gray-200 hover:border-rose-200'
                  }`}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-serif text-gray-800 mb-4">Style</h2>
            <div className="grid grid-cols-2 gap-3">
              {styles.map((s) => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`p-3 rounded-lg border transition ${
                    style === s
                      ? 'border-rose-500 bg-rose-50 text-rose-700'
                      : 'border-gray-200 hover:border-rose-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-serif text-gray-800 mb-4">Budget</h2>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="0-50">Moins de 50€</option>
              <option value="50-100">50€ - 100€</option>
              <option value="100-150">100€ - 150€</option>
              <option value="150+">Plus de 150€</option>
            </select>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-serif text-gray-800 mb-4">Votre Sélection</h2>
          {selectedFlowers.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Flower2 className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p>Commencez à ajouter des fleurs depuis notre catalogue</p>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedFlowers.map((selection) => {
                const flower = flowers.find(f => f.id === selection.flowerId);
                if (!flower) return null;
                
                return (
                  <div key={flower.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                    <span className="font-medium">{flower.name}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateFlowerQuantity(flower.id, -1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{selection.quantity}</span>
                        <button
                          onClick={() => updateFlowerQuantity(flower.id, 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-rose-500 font-medium">
                        {(flower.price * selection.quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>
                );
              })}
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{totalPrice.toFixed(2)} €</span>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={selectedFlowers.length === 0}
                  className="w-full mt-4 bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Commander le bouquet</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomBouquet;