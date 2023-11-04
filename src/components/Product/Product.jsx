import React from "react";

const Product = ({ product, handleAddToCart }) => {

  return (
    <div className="fullCard w-[300px] h-[509px] border-2 border-black rounded-md relative">
      <div className="imgSection h-[286px]">
        <img
          className="w-[286px] mx-auto rounded-md"
          src={product.img}
          alt=""
        />
      </div>
      <div className="textContainer p-2 relative h-1/3 ">
        <div className="firstDiv">
          <h3 className="text-xl font-semibold ">{product.name}</h3>
          <p className="font-semibold">Price: ${product.price}</p>
        </div>
        <div className="secondDiv absolute bottom-2 ">
          <p className="text-sm">Manufacturer {product.seller}</p>
          <p>Rating : {product.ratings} star</p>
        </div>
      </div>
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
        className="bg-[#FFE0B3] w-full flex justify-center items-center gap-2 absolute bottom-0 border border-gray-700 h-[48px] text-[#0E161A] rounded-b-md hover:bg-[#ebc791]"
      >
        <p>Add to Cart</p>
        <div className="cart">
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Product;
