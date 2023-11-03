import React from 'react';

const Cart = ({items}) => {
    return (
        <div className=' sticky top-6 h-[508px] bg-[#FFE0B3] w-[264px] p-3 rounded-md'>
             <h3 className='text-center text-xl font-semibold my-3'>Order Summery</h3>
             <div className="results p-5">
                <p className='my-3'>Selected items : {items.length} </p>
                <p className='my-3'>Total Price : 0 </p>
                <p className='my-3'>Total Shipping Charge : 0 </p>
                <p className='my-3'>Tax : 0 </p>
                <p className='mt-8 text-xl'>Grand Total : 0 </p>
             </div>
        </div>
    );
};

export default Cart;