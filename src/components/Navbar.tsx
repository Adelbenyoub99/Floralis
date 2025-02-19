import { Link } from 'react-router-dom';
import { Flower2, Heart, ShoppingCart } from 'lucide-react';
import { useStore } from '../data/store';

const Navbar = () => {
  const { cart, likedBouquets } = useStore();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Flower2 className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-serif text-rose-600">Floralis</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-rose-500">Accueil</Link>
            <Link to="/flowers" className="text-gray-600 hover:text-rose-500">Catalogue</Link>
            <Link to="/custom" className="text-gray-600 hover:text-rose-500">Bouquet Personnalisé</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-rose-500 relative">
              <Heart className="h-6 w-6" />
              {likedBouquets.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {likedBouquets.length}
                </span>
              )}
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-rose-500 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;