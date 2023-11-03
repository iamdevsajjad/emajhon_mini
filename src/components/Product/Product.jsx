import React from 'react';

const Product = ({product , handleAddToCart} ) => {
   
    return (
        <div className='fullCard w-[300px] h-[509px] border-2 border-black rounded-md relative'>
          <div className="imgSection h-[286px]">
            <img className='w-[286px] mx-auto rounded-md' src={product.img} alt="" />
          </div>
          <div className="textContainer p-2 relative h-1/3 ">
            <div className="firstDiv">
              <h3 className='text-xl font-semibold '>{product.name}</h3>
              <p className='font-semibold'>Price: ${product.price}</p>
            </div>
            <div className="secondDiv absolute bottom-2 ">
              <p className='text-sm'>Manufacturer {product.seller}</p>
              <p>Rating : {product.ratings} star</p>
            </div>
          </div>
          <button onClick={() => {handleAddToCart(product)}} className='bg-[#FFE0B3] w-full absolute bottom-0 border border-gray-700 h-[48px] text-[#0E161A] rounded-b-md hover:bg-[#ebc791]'>Add to Cart</button>
        </div>
    );
};

export default Product;