import React from "react";
import Cart from "../../components/Cart/Cart";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

const Home = () => {
  return (
    <div className="flex ">
      <div className="products_container   w-full">
        <ProductsContainer />
      </div>
      <div className="cart  ">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
