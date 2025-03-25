import axiosApiInstance from "./authInstance";



const backendURL = process.env.REACT_APP_API_URL;

export const getCart = async () => {
  try {
    const response = await axiosApiInstance.get(`${backendURL}/api/cart`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching cart:", error);
    throw error
  }
};

export const upsertCart = async (productId, quantity) => {
  try {
    const response = await axiosApiInstance.post(`${backendURL}/api/cart/upsert`, { productId, quantity });
    return response.data;
  } catch (error) {
    console.error('❌ Cart update error:', error);
    throw error;
  }
}

export const removeCartItem = async (productId) => {
  try {
    const response = await axiosApiInstance.post(`${backendURL}/api/cart/delete`, { productId });
    return response.data;
  } catch (error) {
    console.error('❌ Remove cart item error:', error);
    throw error;
  }
}

export const resetCart = async () => {
  try {
    const response = await axiosApiInstance.post(`${backendURL}/api/cart/reset`);
    return response.data;
  } catch (error) {
    console.error('❌ Reset cart error:', error);
    throw error;
  }
}
