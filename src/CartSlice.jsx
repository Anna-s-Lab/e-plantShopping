import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      // Check if item already exists in the cart
      const item = state.items.find((item) => item.name === name);
      if (item) item.quantity++;
      else state.items.push({ name, image, cost, quantity: 1 });
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      const newList = state.items.filter((item) => item.name !== name);
      state.items = newList;
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
