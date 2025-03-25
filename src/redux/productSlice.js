import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  products: [],
  selectedProductId: undefined,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products.push(...payload.products);
    },
    upsertProducts: (state, { payload }) => {
      state.products = _.unionBy(       
        state.products,
        payload.products,
        (x) => x._id
      );
    },
    addProduct: (state, { payload }) => {
      state.products.push(payload.product);
    },
    upsertProduct: (state, { payload }) => {
      state.products = _.unionBy(
        [payload.product],
        state.products,
        (x) => x._id
      );
    },
    updateProduct: (state, { payload }) => { // Fixed typo
      const productIndex = state.products.findIndex(
        (x) => x._id === payload._id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          ...payload.product,
        };
      }
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter(
        (x) => x._id !== payload._id
      );
    },
    removeAll: (state) => {
      state.products = [];
    },
    updateSelectedProductId: (state, { payload }) => {
      state.selectedProductId = payload._id;
    },
  },
});

export const {
  addProducts,
  upsertProducts,
  addProduct,
  upsertProduct,
  updateProduct, // Corrected reference
  removeProduct,
  removeAll,
  updateSelectedProductId,
} = productSlice.actions;

export default productSlice.reducer;
