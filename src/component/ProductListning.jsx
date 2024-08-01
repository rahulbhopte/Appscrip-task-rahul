import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { setProducts } from "../redux/actions/productAction";
import Home from "./Home";

const ProductListning = () => {
  const products = useSelector((state) => state.products); // Assuming 'products' is the key in your Redux state where you store products
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data)); // Dispatching entire response.data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('products', products); // Check if products are correctly stored in Redux state

  return (
    <div>
      <Home />
    </div>
  );
};

export default ProductListning;
