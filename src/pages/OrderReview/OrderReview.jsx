import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import { removeFromDB } from "../../utilities/fakeDB";

const OrderReview = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) =>{
      const remaining = cart.filter(pd => pd.id !==id);
      setCart(remaining);
      removeFromDB(id)
    }




  return (
    <div className="shop-container flex container mx-auto mt-5">
      <div className="review_Container m-[50px] w-full p-5">
        {
          cart.map(product => <ReviewItem
          key={product.id}
          product={product}
          handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>)
        }
      </div>
      <div className="cart">
        <Cart items = {cart}/>
      </div>
    </div>
  );
};

export default OrderReview;
