import React from "react";
const ReviewItem = ({ product }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="w-[571px] h-[107px] p-[8px] border-2 border-gray-500 rounded-md my-3 flex">
      <img className="w-[91px] h-[91px] rounded-md " src={img} alt="" />
      <div className="reviewDetails my-[0px] mx-[15px] grow items-center">
        <p className="font-normal text-xl leading-6 ">{name}</p>
        <p>
          Price : <span className="text-[#FF9900]">${price}</span>
        </p>
        <p>
          Shipping Charge : <span className="text-[#FF9900]">{quantity}</span>
        </p>
      </div>
      <button className="bg-[#eb57574d] h-[55px] w-[55px] rounded-full flex justify-center items-center  mx-auto text-[#EB5757] font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default ReviewItem;
