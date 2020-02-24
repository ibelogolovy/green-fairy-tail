import React from 'react';

import ProductList from '../product-list-container';
import CategoryListContainer from '../category-list-container';

const CatalogPage = () => {
  return (

      <div id='catalog'>
          <h2>Каталог</h2>
              <CategoryListContainer/>
              <ProductList/>
      </div>  

  );
};

export default CatalogPage;