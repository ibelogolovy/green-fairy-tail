import ReactDOM from 'react-dom';
import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import ErrorBoundry from './components/error-boundry';

import store from './store';

import ProductService from './services/product-service/product-service';
import { ProductServiceProvider } from './services/product-service/product-service-context';

import './index.css';

const productService =  new ProductService();

ReactDOM.render(
  <Provider store = { store }>
      <ErrorBoundry>
        <ProductServiceProvider value = { productService }>
          <Router>
            <App/>
          </Router>
        </ProductServiceProvider>
      </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);