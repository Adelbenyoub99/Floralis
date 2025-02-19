import React, { useState } from 'react';
import { Heart, MessageCircle, ShoppingCart } from 'lucide-react';
import { useStore, type Bouquet } from '../data/store';


interface BouquetCardProps {
  bouquet: Bouquet;
}

const BouquetCard = ({ bouquet }: BouquetCardProps) => {
  const { toggleLike, addComment, addToCart, likedBouquets } = useStore();
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const isLiked = likedBouquets.includes(bouquet.id);

  const handleAddToCart = () => {
    addToCart({
      type: 'bouquet',
      name: bouquet.name,
      price: bouquet.price,
      quantity: 1,
      flowers: bouquet.flowers
    });
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(bouquet.id, {
        userId: 'user1', // In a real app, this would come from auth
        userName: 'Utilisateur', // In a real app, this would come from auth
        text: comment
      });
      setComment('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-64">
        <img 
          src={bouquet.image} 
          alt={bouquet.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => toggleLike(bouquet.id)}
            className={`p-2 rounded-full shadow-md transition ${
              isLiked ? 'bg-rose-500 text-white' : 'bg-white hover:bg-rose-50'
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'text-white' : 'text-rose-500'}`} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-serif text-gray-800">{bouquet.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{bouquet.description}</p>
        <p className="text-rose-500 font-semibold mt-2">{bouquet.price.toFixed(2)} €</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-4 text-gray-500 text-sm">
            <button
              onClick={() => toggleLike(bouquet.id)}
              className="flex items-center hover:text-rose-500"
            >
              <Heart className="h-4 w-4 mr-1" /> {bouquet.likes}
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center hover:text-rose-500"
            >
              <MessageCircle className="h-4 w-4 mr-1" /> {bouquet.comments.length}
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Ajouter</span>
          </button>
        </div>

        {showComments && (
          <div className="mt-4 border-t pt-4">
            <div className="space-y-4">
              {bouquet.comments.map((comment) => (
                <div key={comment.id} className="text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">{comment.userName}</span>
                    <span className="text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{comment.text}</p>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmitComment} className="mt-4 flex gap-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ajouter un commentaire..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default BouquetCard;