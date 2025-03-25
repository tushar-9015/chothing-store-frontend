import axios from "axios";

const backendURL = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${backendURL}/api/products/`);
    return res.data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error; // Rethrow for handling in the calling function
  }
};


export const getProduct = async (id) => {
  try {
    const res = await axios.get(`${backendURL}/api/products/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

export const getFilteredProducts = async ({ category, type, tag, minPrice, maxPrice, sort }, page = 1) => {
  try {
    const res = await axios.post(`${backendURL}/api/products/productfilter`, {
      category,
      type,
      tag,
      minPrice,
      maxPrice,
      sort,
      page,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    throw error;
  }
};

