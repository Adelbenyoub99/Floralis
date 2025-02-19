import { Flower2, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-serif text-rose-600">Floralis</span>
            </div>
            <p className="text-gray-600">Créez des moments inoubliables avec nos bouquets artisanaux.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Accueil</li>
              <li>Catalogue</li>
              <li>Bouquet Personnalisé</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>123 Rue des Fleurs</li>
              <li>75001 Paris</li>
              <li>01 23 45 67 89</li>
              <li>contact@fleurdeparis.fr</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 text-gray-600 hover:text-rose-500 cursor-pointer" />
              <Facebook className="h-6 w-6 text-gray-600 hover:text-rose-500 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-600 hover:text-rose-500 cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2023 Floralis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;