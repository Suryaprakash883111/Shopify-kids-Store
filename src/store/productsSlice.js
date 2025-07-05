import { createSlice } from '@reduxjs/toolkit';

const kidsProducts = [
  {
    id: 1,
    title: "Kids Summer Dress",
    price: 29.99,
    category: "clothes",
    age: "3-8 years",
    image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&h=400&fit=crop",
    description: "Beautiful summer dress for girls with floral patterns",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    title: "Toy Racing Car",
    price: 24.99,
    category: "toys",
    age: "4-10 years",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    description: "Fast racing car toy with LED lights and sound effects",
    rating: 4.8,
    inStock: true
  },
  {
    id: 3,
    title: "Kids Sneakers",
    price: 39.99,
    category: "shoes",
    age: "2-12 years",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
    description: "Comfortable and stylish sneakers for active kids",
    rating: 4.3,
    inStock: true
  },
  {
    id: 4,
    title: "Educational Puzzle",
    price: 19.99,
    category: "toys",
    age: "3-7 years",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    description: "100-piece educational puzzle for developing problem-solving skills",
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    title: "Kids T-Shirt Set",
    price: 34.99,
    category: "clothes",
    age: "1-10 years",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    description: "Set of 3 colorful t-shirts with fun prints",
    rating: 4.4,
    inStock: true
  },
  {
    id: 6,
    title: "Building Blocks Set",
    price: 49.99,
    category: "toys",
    age: "3-12 years",
    image: "https://images.unsplash.com/photo-1558877385-de3e03c4c4d2?w=400&h=400&fit=crop",
    description: "Creative building blocks set with 200+ pieces",
    rating: 4.9,
    inStock: true
  },
  {
    id: 7,
    title: "Kids Backpack",
    price: 27.99,
    category: "accessories",
    age: "5-12 years",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Colorful and durable backpack for school and adventures",
    rating: 4.2,
    inStock: true
  },
  {
    id: 8,
    title: "Art Supplies Kit",
    price: 32.99,
    category: "toys",
    age: "4-12 years",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    description: "Complete art kit with crayons, markers, and drawing paper",
    rating: 4.7,
    inStock: true
  },
  {
    id: 9,
    title: "Kids Winter Jacket",
    price: 59.99,
    category: "clothes",
    age: "2-10 years",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
    description: "Warm and waterproof winter jacket with hood",
    rating: 4.5,
    inStock: true
  },
  {
    id: 10,
    title: "Musical Toy Piano",
    price: 44.99,
    category: "toys",
    age: "2-8 years",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
    description: "Colorful toy piano with lights and different musical modes",
    rating: 4.8,
    inStock: true
  },
  {
    id: 11,
    title: "Kids Sunglasses",
    price: 15.99,
    category: "accessories",
    age: "3-12 years",
    image: "https://images.unsplash.com/photo-1556306535-38febf6782cc?w=400&h=400&fit=crop",
    description: "UV protection sunglasses in fun colors and shapes",
    rating: 4.1,
    inStock: true
  },
  {
    id: 12,
    title: "Sports Ball Set",
    price: 22.99,
    category: "toys",
    age: "4-12 years",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    description: "Set of 3 sports balls: soccer, basketball, and volleyball",
    rating: 4.4,
    inStock: true
  }
];

const initialState = {
  products: kidsProducts,
  filteredProducts: kidsProducts,
  selectedCategory: 'all',
  searchTerm: '',
  isLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredProducts = state.selectedCategory === 'all' 
        ? state.products 
        : state.products.filter(product => product.category === state.selectedCategory);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSelectedCategory, setSearchTerm, setLoading } = productsSlice.actions;
export default productsSlice.reducer;
