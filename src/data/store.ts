import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Flower {
  id: number;
  name: string;
  latinName: string;
  image: string;
  price: number;
  season: string;
  description: string;
}

export interface Bouquet {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  flowers: { flowerId: number; quantity: number }[];
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  userId: string;
  userName: string;
  text: string;
  date: string;
}

export interface CartItem {
  id: number;
  type: 'bouquet' | 'custom';
  name: string;
  price: number;
  quantity: number;
  flowers?: { flowerId: number; quantity: number }[];
  occasion?: string;
  style?: string;
}

interface Store {
  flowers: Flower[];
  bouquets: Bouquet[];
  cart: CartItem[];
  likedBouquets: number[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
  toggleLike: (bouquetId: number) => void;
  addComment: (bouquetId: number, comment: Omit<Comment, 'id' | 'date'>) => void;
}

// Mock data
export const flowers: Flower[] = [
  {
    id: 1,
    name: "Rose Rouge",
    latinName: "Rosa gallica",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=800",
    price: 3.99,
    season: "Toute l'année",
    description: "Symbole d'amour et de passion, parfaite pour les bouquets romantiques."
  },
  {
    id: 2,
    name: "Pivoine",
    latinName: "Paeonia lactiflora",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
    price: 4.99,
    season: "Printemps",
    description: "Fleur élégante aux pétales délicats, idéale pour les occasions spéciales."
  },
  {
    id: 3,
    name: "Lys Blanc",
    latinName: "Lilium candidum",
    image: "https://images.unsplash.com/photo-1587814177073-c10efb326f2a?auto=format&fit=crop&q=80&w=800",// non
    price: 4.50,
    season: "Été",
    description: "Symbole de pureté, parfait pour les cérémonies et événements formels."
  },
  {
    id: 4,
    name: "Tournesol",
    latinName: "Helianthus annuus",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=800",
    price: 2.99,
    season: "Été",
    description: "Apporte joie et chaleur à tout arrangement floral."
  },
  {
    id: 5,
    name: "Orchidée",
    latinName: "Phalaenopsis",
    image: "https://images.unsplash.com/photo-1566938064504-a379175168b2?auto=format&fit=crop&q=80&w=800",
    price: 6.99,
    season: "Toute l'année",
    description: "Élégante et exotique, parfaite pour les arrangements sophistiqués."
  },
  {
    id: 6,
    name: "Dahlia",
    latinName: "Dahlia pinnata",
    image: "https://images.unsplash.com/photo-1595977437232-9a0426ebf7a5?auto=format&fit=crop&q=80&w=800",
    price: 3.99,
    season: "Été-Automne",
    description: "Fleurs spectaculaires aux couleurs vibrantes."
  }
];

export const bouquets: Bouquet[] = [
  {
    id: 1,
    name: "Romance Parisienne",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?auto=format&fit=crop&q=80&w=800",
    description: "Un bouquet élégant de roses rouges et de pivoines blanches.",
    flowers: [
      { flowerId: 1, quantity: 12 },
      { flowerId: 2, quantity: 5 }
    ],
    likes: 124,
    comments: [
      {
        id: 1,
        userId: "user1",
        userName: "Marie",
        text: "Magnifique bouquet, parfait pour mon anniversaire de mariage !",
        date: "2024-03-15"
      }
    ]
  },
  {
    id: 2,
    name: "Jardin de Printemps",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&q=80&w=800",
    description: "Un mélange coloré de fleurs printanières.",
    flowers: [
      { flowerId: 2, quantity: 3 },
      { flowerId: 3, quantity: 3 },
      { flowerId: 6, quantity: 4 }
    ],
    likes: 98,
    comments: []
  },
  {
    id: 3,
    name: "Élégance Champêtre",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800",
    description: "Un bouquet naturel aux tons pastel.",
    flowers: [
      { flowerId: 4, quantity: 3 },
      { flowerId: 6, quantity: 5 },
      { flowerId: 2, quantity: 4 }
    ],
    likes: 156,
    comments: []
  }
];

export const useStore = create<Store>()(
  persist(
    (set) => ({
      flowers,
      bouquets,
      cart: [],
      likedBouquets: [],

      addToCart: (item) => set((state) => ({
        cart: [...state.cart, { ...item, id: Date.now() }]
      })),

      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
      })),

      updateCartItemQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      })),

      toggleLike: (bouquetId) => set((state) => {
        const isLiked = state.likedBouquets.includes(bouquetId);
        return {
          likedBouquets: isLiked
            ? state.likedBouquets.filter((id) => id !== bouquetId)
            : [...state.likedBouquets, bouquetId],
          bouquets: state.bouquets.map((bouquet) =>
            bouquet.id === bouquetId
              ? {
                  ...bouquet,
                  likes: bouquet.likes + (isLiked ? -1 : 1)
                }
              : bouquet
          )
        };
      }),

      addComment: (bouquetId, comment) => set((state) => ({
        bouquets: state.bouquets.map((bouquet) =>
          bouquet.id === bouquetId
            ? {
                ...bouquet,
                comments: [
                  ...bouquet.comments,
                  {
                    ...comment,
                    id: Date.now(),
                    date: new Date().toISOString().split('T')[0]
                  }
                ]
              }
            : bouquet
        )
      }))
    }),
    {
      name: 'floralis-storage'
    }
  )
);