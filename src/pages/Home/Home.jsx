import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import {
  addToDB,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakeDB";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((pd) => pd.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      setItems(savedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = items.find((pd) => items.id === pd.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...items, product];
    } else {
      const rest = items.filter((pd) => pd.id !== product.id);
      exist.quantity = exist.quantity + 1;
      newCart = [rest, product];
    }
    setItems(newCart);
    addToDB(product.id);
  };

  const handleClearCart = () => {
    setItems([]);
    deleteShoppingCart();
  };

  return (
    <div className="flex container mx-auto">
      <div className="products_container grid-flow-col-[4fr 1fr]  w-full p-5">
        <ProductsContainer
          handleAddToCart={handleAddToCart}
          products={products}
        />
      </div>
      <div className="cart ">
        <Cart items={items} handleClearCart={handleClearCart}>
          <Link to="/orderReview">
            <button className="flex justify-between w-[90%] mx-auto p-2  text-white bg-[#FF9900] hover:bg-[#c89345] transition-all rounded-sm">
              <p className="mx-2">Review Cart</p>{" "}
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Home;
