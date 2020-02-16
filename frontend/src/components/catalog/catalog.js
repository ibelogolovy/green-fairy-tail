import React from 'react';

import ProductCart from '../product-cart';
import ProductFilter from '../product-filter';

import './catalog.css';

const Catalog = () => {
  return (
        <div className="page-content">
            <h2>Продукция</h2>
                <ProductFilter/>
                <div className="product-container">
                  <ProductCart/>
                  <ProductCart/>
                  <ProductCart/>
                  <ProductCart/>
                  <ProductCart/>
                  <ProductCart/>
                  <ProductCart/>
                  <ProductCart/>
                  <ProductCart/>
                  <ProductCart/>
                </div>
        </div>  
  );
};

export default Catalog;