
import { Link } from 'react-router-dom';
import BouquetCard from '../components/BouquetCard';
import { Heart, MessageCircle, Star } from 'lucide-react';
import { useStore } from '../data/store';

const Home = () => {
  const { bouquets } = useStore();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=1920"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-5xl font-serif">Floralis</h1>
            <p className="text-xl">Créez des moments inoubliables avec nos bouquets</p>
            <Link 
              to="/custom"
              className="inline-block bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition"
            >
              Créer votre bouquet
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Bouquets */}
      <section>
        <h2 className="text-3xl font-serif text-gray-800 mb-8">Bouquets Populaires</h2>
        <div className="grid md:grid-cols-3 gap-8">
        {bouquets.map((bouquet) => (
          <BouquetCard key={bouquet.id} bouquet={bouquet} />
        ))}
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Aimez vos favoris</h3>
          <p className="text-gray-600">Sauvegardez vos bouquets préférés</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MessageCircle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Partagez votre avis</h3>
          <p className="text-gray-600">Commentez et notez nos créations</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Star className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personnalisation</h3>
          <p className="text-gray-600">Créez votre bouquet unique</p>
        </div>
      </section>
    </div>
  );
}

export default Home;