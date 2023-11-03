import React from 'react';
import Product from '../Product/Product';

const ProductsContainer = ({handleAddToCart, products}) => {

    return (
        <div>
            <div className="products grid grid-cols-3 gap-5">
                {
                    products.map(product =><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
        </div>
    );
};

export default ProductsContainer;