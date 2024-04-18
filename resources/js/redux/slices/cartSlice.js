import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
    editFromCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.qty = action.payload.qty;
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart && itemInCart.qty > 0) {
        itemInCart.qty--;
      }

      if (itemInCart.qty === 0) {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addtoCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export const { editFromCart } = cartSlice.actions;
export default cartSlice.reducer;
