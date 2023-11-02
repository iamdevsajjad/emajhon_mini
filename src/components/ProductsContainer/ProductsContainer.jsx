import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("product.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    return (
        <div>
            <div className="products grid grid-cols-3 gap-5">
                {
                    products.map(product =><Product
                    key={product.id}
                    product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default ProductsContainer;