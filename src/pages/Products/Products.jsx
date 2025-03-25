import React, { useState, useEffect, useCallback } from "react";
import List from "../../components/List/List";
import "./products.scss";
import { useSelector, useDispatch } from "react-redux";
import * as productService from "../../services/product";
import {
  removeAll,
  upsertProducts,
} from "../../redux/productSlice";
import _ from "lodash";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    type: [],
    tags: [],
    sort: "",
    minPrice: "",
    maxPrice: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(undefined);

  const category = ["men", "women", "unisex"];
  const type = ["shoes", "bags", "t-shirt", "eyewear", "shirt", "jackets"];
  const tag = ["featured", "trending", "usual"];
  const allProducts = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  console.log(allProducts);

  const getProducts = useCallback((page = 1) => {
    if (page >= totalPages) {
      return;
    }
    setLoading(true);

    productService
      .getFilteredProducts(filters, page)
      .then(
        ({ data, pagination }) => {
          dispatch(upsertProducts({ products: data }));
          setCurrentPage(pagination.currentPage);
          setTotalPages(pagination.totalPages);
        },
        (errors) => {
          setErrors(errors);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }, [totalPages, filters, dispatch]);

  const resetProducts = () => {
    dispatch(removeAll());
    setCurrentPage(1);
    setTotalPages(2);
    getProducts();
  };

  useEffect(() => {
    console.log("reset");
    resetProducts();
  }, []);

  useEffect(() => {
    const startIndex = 9 * (currentPage - 1);
    const endIndex = 9 * currentPage;
    const temp = allProducts.slice(startIndex, endIndex);
    console.log(allProducts, temp, startIndex, endIndex, currentPage);
    setFilteredProducts(temp);
  }, [allProducts, currentPage]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const handleSortChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      sort: e.target.value,
    }));
  };

  const goToPage = _.debounce(async ( pageNumber) => {
    setCurrentPage(pageNumber);
    getProducts(pageNumber)
  }, 600);

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Filters</h2>

        {/* Categories */}
        <div className="filterItem">
          <h3>Product Categories</h3>
          {category.map((item, index) => (
            <div className="inputItem" key={index}>
              <input
                type="checkbox"
                name="categories"
                value={item}
                onChange={handleChange}
              />
              <label>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
            </div>
          ))}
        </div>

        {/* Product Type */}
        <div className="filterItem">
          <h3>Product Type</h3>
          {type.map((item, index) => (
            <div className="inputItem" key={index}>
              <input
                type="checkbox"
                name="type"
                value={item}
                onChange={handleChange}
              />
              <label>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
            </div>
          ))}
        </div>

        {/* Product Tag */}
        <div className="filterItem">
          <h3>Product Tag</h3>
          {tag.map((item, index) => (
            <div className="inputItem" key={index}>
              <input
                type="checkbox"
                name="tags"
                value={item}
                onChange={handleChange}
              />
              <label>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="filterItem">
          <h3>Price Range</h3>
          <div className="priceRangeWrapper">
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, minPrice: e.target.value }))
              }
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
              }
            />
          </div>
        </div>

        {/* Sort By */}
        <div className="filterItem">
          <h3>Sort By Price</h3>
          <div className="inputItem">
            <input
              type="radio"
              name="sortBy"
              value="asc"
              onChange={handleSortChange}
            />
            <label>Low to High</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="sortBy"
              value="desc"
              onChange={handleSortChange}
            />
            <label>High to Low</label>
          </div>
        </div>

        {/* Apply Filters Button */}
        <button className="applyFiltersBtn" onClick={resetProducts}>
          Apply Filters
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />

        {/* List Component */}
        <List products={filteredProducts} loading={loading} errors={errors} />

        {/* Pagination */}
        <div className="pagination" >
          <button className="page-button" disabled={currentPage <= 1} onClick={() => goToPage(currentPage - 1)}>
            Prev
          </button>

          <span>
            <input
              type="number"
              min={1}
              max={totalPages}
              step="1"
              value={currentPage}
              onChange={(e) => goToPage(parseInt(e.target.value, 10))}
            />{" "}
            / {totalPages}
          </span>

          <button className="page-button" disabled={currentPage >= totalPages}  onClick={() => goToPage(currentPage + 1)}>
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Products;
