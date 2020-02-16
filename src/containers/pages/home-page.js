import React from 'react';

import ProductList from '../product-list-container';
import Intro from '../../components/intro';


const HomePage = () => {
  return (
    <div className="page-content ">
      <Intro/>
      <ProductList/>
    </div>
  );
};

export default HomePage;