import React from 'react';

import './product-filter.css';

const ProductFilter = () => {
    return (
      <div className="product-filter">
           По категории:
          <div className = "category-contaiter">
              <div className="category">
                  Хвойные
              </div>
              <div className="category">
                  Лиственные
              </div>
              <div className="category">
                  Комнатные
              </div>
              <div className="category">
                  Травяные
              </div>
          </div>
      </div>
    );
};

export default ProductFilter;