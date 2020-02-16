import React from 'react';

import ProductItem from '../product-item';

import './product-list.css';

const ProductList = ({ products, backLoading}) => {
    return (
        <div className="product-list">
            {
                products.map( (product) => {
                    return (
                            <ProductItem product={product} />
                    );
                })
            }
        </div>

    );
};

export default ProductList;