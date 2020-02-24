import React from 'react';

import CatalogPage from './catalog-page';
import Intro from '../../components/intro';


const HomePage = () => {
  return (
    <div className="page-content ">
      <Intro/>
      <CatalogPage/>
    </div>
  );
};

export default HomePage;