import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import { FaSpinner } from "react-icons/fa"; // Spinner icon for loading state
import { getAllProducts } from "../../services/product.js"; // Adjust the path if needed

const FeaturedProducts = ({ tag }) => {
  const [products, setProducts] = useState([]); // Holds filtered products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAndFilterProducts = async () => {
      try {
        setLoading(true);
        setError(false);

        const allProducts = await getAllProducts(); // Fetch all products

        // Filter by tag and limit to first 4 products
        const filteredProducts = allProducts.filter(product => product?.tag === tag).slice(0, 4);

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFilterProducts();
  }, [tag]); // Re-run when 'tag' changes

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{tag} Products</h1>
      </div>
      <div className="bottom">
        {error ? (
          <div className="error">
            <p>Something went wrong! Please try again later.</p>
            <button onClick={() => window.location.reload()} className="retry-button">
              Retry
            </button>
          </div>
        ) : loading ? (
          <div className="loading">
            <FaSpinner className="spinner-icon" />
            <p>Loading...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="no-products">
            <p>No {tag} products found.</p>
          </div>
        ) : (
          products.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
