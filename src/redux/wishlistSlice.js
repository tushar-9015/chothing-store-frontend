import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: []
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: { 
    addToWishlist: (state, action) => {
      const { _id } = action.payload;
      const existingItem = state.wishlistItems.find((item) => item._id === _id);
      
      if (!existingItem) {
        state.wishlistItems.push(action.payload);
      }
    },
    removeWishlistItem: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item._id !== action.payload._id);
    },
    resetWishlist: (state) => {
      state.wishlistItems = [];
    }
  }
});

// Export actions
export const { addToWishlist, removeWishlistItem, resetWishlist } = wishlistSlice.actions;

// Export reducer
export default wishlistSlice.reducer;
