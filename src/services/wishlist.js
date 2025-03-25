import axios from "axios";

const backendURL = process.env.REACT_APP_API_URL;

export const getWishlist = async () => {
  try {
    const response = await axios.get(`${backendURL}/api/wishlists`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching cart:", error);
    throw error
  }
};

export const addWishlist = async (productId) => {
  try {
    const response = await axios.post(`${backendURL}/api/wishlists/add`, { productId});
    return response.data;
  } catch (error) {
    console.error('❌ Cart update error:', error);
    throw error;
  }
}

export const removeWishlistItem = async (productId) => {
  try {
    const response = await axios.post(`${backendURL}/api/wishlists/delete`, { productId });
    return response.data;
  } catch (error) {
    console.error('❌ Remove cart item error:', error);
    throw error;
  }
}

export const resetWishlist = async () => {
  try {
    const response = await axios.post(`${backendURL}/api/wishlists/reset`);
    return response.data;
  } catch (error) {
    console.error('❌ Reset cart error:', error);
    throw error;
  }
}
