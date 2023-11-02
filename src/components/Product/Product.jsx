import React from 'react';

const Product = ({product}) => {
    console.log();
    return (
        <div className='fullCard w-[300px] h-[509px] border-2 border-black rounded-md relative'>
          <div className="imgSection">
            <img className='w-[286px] mx-auto rounded-md' src={product.img} alt="" />
          </div>
          <div className="textContainer p-2 ">
            <div className="firstDiv">
              <h3 className='text-xl font-semibold '>{product.name}</h3>
              <p className='font-semibold'>Price: ${product.price}</p>
            </div>
            <div className="secondDiv mt-8">
              <p className='text-sm'>Manufacturer {product.seller}</p>
              <p>Rating : {product.ratings} star</p>
            </div>
          </div>
          <button className='bg-[#FFE0B3] w-full absolute bottom-0 border border-gray-700 h-[48px] text-[#0E161A] rounded-b-md hover:bg-[#ebc791]'>Add to Cart</button>
        </div>
    );
};

export default Product;