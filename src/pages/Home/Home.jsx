import React from "react";
import Cart from "../../components/Cart/Cart";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

const Home = () => {
  return (
    <div className="flex ">
      <div className="products_container grid-flow-col-[4fr 1fr]  w-full p-5">
        <ProductsContainer />
      </div>
      <div className="cart w-[264px] bg-[#FFE0B3] p-3">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
