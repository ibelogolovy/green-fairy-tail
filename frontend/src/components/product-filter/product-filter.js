import React from 'react';

import './product-filter.css';

const ProductFilter = ({ categories = [{ title : 'All', id: '1'}], selectedCategory }) => {

  selectedCategory = selectedCategory === undefined ? categories[0].id : selectedCategory;

    return (
      <div className="product-filter">
           По категории:
          <div className = "category-contaiter">
          {categories.map(({ title, id}) => (
                <div key = { id } className={selectedCategory===id ? "selected category": "category"}>
                   {title}
                </div>
          ))}
          </div>
      </div>
    );
};

export default ProductFilter;