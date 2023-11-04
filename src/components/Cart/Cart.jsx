import React from "react";
const Cart = ({ items }) => {

    let total = 0;
    let shippingCharge = 0;
    for(const item of items){
        total = total + item.price;
        shippingCharge = shippingCharge + item.shipping;
    }
      const tax = total*7 / 100;
      const grandTotal = total + shippingCharge + tax;



  return (
    <div className=" sticky top-6 h-[508px] bg-[#FFE0B3] w-[264px] p-3 rounded-md">
      <h3 className="text-center text-xl font-semibold my-3">Order Summery</h3>
      <div className="results p-5">
        <p className="my-3">Selected items : {items.length} </p>
        <p className="my-3">Total Price : ${total} </p>
        <p className="my-3">Shipping Charge : ${shippingCharge} </p>
        <p className="my-3">Tax : {tax.toFixed(2)} </p>
        <p className="mt-8 text-xl">Grand Total : {grandTotal.toFixed(2)} </p>
      </div>
      <div className="buttons w-full">
        <button
        className="flex  text-white bg-[#FF3030] hover:bg-[#e63535] transition-all mx-auto px-12 my-2 py-1 rounded-sm">
          <p className="">Clear Cart</p>{" "}
          <div className="icon mx-2">
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </button>
        <button className="flex  text-white bg-[#FF9900] hover:bg-[#c89345] transition-all mx-auto px-12 my-2 py-1 rounded-sm">
          <p className="mx-2">Clear Cart</p>{" "}
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
      </div>
    </div>
  );
};

export default Cart;
