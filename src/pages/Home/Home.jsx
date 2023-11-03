import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart/Cart";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([])


     
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setItems([...items,product ])
  };
  return (
    <div className="flex ">
      <div className="products_container grid-flow-col-[4fr 1fr]  w-full p-5">
        <ProductsContainer handleAddToCart={handleAddToCart} 
        products = {products}
        />
      </div>
      <div className="cart ">
        <Cart 
        items={items}
        />
      </div>
    </div>
  );
};

export default Home;
