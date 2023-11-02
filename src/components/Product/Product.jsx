import React from 'react';

const Product = ({product}) => {
    console.log();
    return (
        <div>
          <h1>my product {product.name}</h1>
        </div>
    );
};

export default Product;