import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, name, price, salePrice, onSale, quantity } = action.payload;
      const existingItem = state.products.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.products.push({ 
          _id, 
          name, 
          price: onSale ? salePrice : price,  // Use salePrice if product is on sale
          salePrice,
          onSale,
          quantity 
        });
      }
    },
    upsertCartProducts: (state, action) => {
      state.products = action.payload.map((product) => ({
        _id: product._id,
        name: product.name,
        price: product.onSale ? product.salePrice : product.price,
        salePrice: product.salePrice,
        onSale: product.onSale,
        quantity: product.quantity,
      }));
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item._id !== action.payload._id);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});


// Action creators are generated for each case reducer function
export const { addToCart,upsertCartProducts, removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;

