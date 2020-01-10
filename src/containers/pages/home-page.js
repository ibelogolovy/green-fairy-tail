import React from 'react';

import Catalog from '../../components/catalog';
import Intro from '../../components/intro';


const HomePage = () => {
  return (
    <React.Fragment>
      <Intro/>
      <Catalog/>
    </React.Fragment>
  );
};

export default HomePage;