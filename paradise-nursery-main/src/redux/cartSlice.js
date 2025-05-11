import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.cartItems.find(p => p.id === item.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find(p => p.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find(p => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(p => p.id !== action.payload);
    },
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
