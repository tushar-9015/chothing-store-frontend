import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: []
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: { 
        addToWishlist: (state, action) => {
            console.log(state, action);
            const item = state.wishlistItems.find((item) => item.id === action.payload.item.id);
            if(item){
                return;
            }
            state.wishlistItems.push(action.payload.item);
        },
        removeWishlistItem: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload.item_id)
        },
        resetWishlist: (state) => {
            state.wishlistItems = []
        }

    }
})

export const { addToWishlist,removeWishlistItem,resetWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;