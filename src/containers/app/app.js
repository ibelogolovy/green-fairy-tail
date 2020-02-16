import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CatalogPage, AboutPage } from '../pages';
import { withProductService } from '../../components/hoc';
import Menu from '../../components/menu';
import Header from '../../components/header';
import Footer from '../../components/footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <main role="main">
        <Header/>
        <Menu/>
        <div id="mainContent">
          <Switch>
            <Route
              path="/"
              component = {HomePage}
              exact />

            <Route
              path="/products"
              component = {CatalogPage}
            />

            <Route
              path="/about"
              component = {AboutPage}
            />
          </Switch>
        </div>
        <Footer/>
        
      </main>
    );
  }
}

export default withProductService()(App);