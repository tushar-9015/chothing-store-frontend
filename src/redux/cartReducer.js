import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  products: []
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state,action);
      const item = state.products.find((item) => item.id === action.payload.item.id);

      if(item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload.item);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload.item_id)
    },
    resetCart: (state) => {
      state.products = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;

