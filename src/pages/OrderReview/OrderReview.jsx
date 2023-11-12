import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import ReviewItem from "../../components/ReviewItem/ReviewItem";

const OrderReview = () => {
    const items = useLoaderData()
  return (
    <div className="shop-container flex container mx-auto mt-5">
      <div className="review_Container m-[50px] w-full p-5">
        {
          items.map(product => <ReviewItem
          key={product.id}
          product={product}
          ></ReviewItem>)
        }
      </div>
      <div className="cart">
        <Cart items = {items} />
      </div>
    </div>
  );
};

export default OrderReview;
