import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/productsApi";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
    name:"bag",
    description:"test",
    price:205,
    image:"sadfsadf"
  },
  {
    name:"bag",
    description:"test",
    price:205,
    image:"sadfsadf"
  },
  {
    name:"bag",
    description:"test",
    price:205,
    image:"sadfsadf"
  },
  {
    name:"bag",
    description:"test",
    price:205,
    image:"sadfsadf"
  },
]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching producsts", error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li>
            <h3>{product.name}</h3>
            <p>NRP.{product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
