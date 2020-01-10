import ReactDOM from 'react-dom';
import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';

import App from './containers/app';
import ErrorBoundry from './components/error-boundry';

import './index.css';


ReactDOM.render(
      <ErrorBoundry>
          <Router>
            <App/>
          </Router>
      </ErrorBoundry>
      ,
  document.getElementById('root')
);