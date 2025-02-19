import { Trash2, Plus, Minus } from 'lucide-react';
import { useStore } from '../data/store';

const Cart = () => {
  const { cart, flowers, removeFromCart, updateCartItemQuantity } = useStore();
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getFlowerNames = (item: typeof cart[0]) => {
    if (!item.flowers) return '';
    return item.flowers.map(f => {
      const flower = flowers.find(fl => fl.id === f.flowerId);
      return `${flower?.name} (${f.quantity})`;
    }).join(', ');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-gray-800 mb-4">Votre Panier</h1>
          <p className="text-gray-600">Votre panier est vide</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-serif text-gray-800 mb-8">Votre Panier</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-start justify-between py-4 border-b last:border-0">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                {item.flowers && (
                  <p className="text-sm text-gray-600 mt-1">
                    {getFlowerNames(item)}
                  </p>
                )}
                {item.occasion && (
                  <p className="text-sm text-gray-600">
                    Occasion: {item.occasion}, Style: {item.style}
                  </p>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="w-24 text-right">
                  <div className="text-rose-500 font-medium">
                    {(item.price * item.quantity).toFixed(2)} €
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.price.toFixed(2)} € / unité
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Total</span>
            <span className="text-2xl font-semibold text-rose-500">
              {totalPrice.toFixed(2)} €
            </span>
          </div>
          
          <button className="w-full bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition">
            Procéder au paiement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;