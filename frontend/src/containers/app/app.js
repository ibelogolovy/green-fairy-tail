import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive'

import { HomePage, CatalogPage, AboutPage } from '../pages';
import { withProductService } from '../../components/hoc';
import Menu from '../../components/menu';
import menuItems from '../../constants/menuItems';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SideBar from "../../components/sidebar";

import './app.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
       <MediaQuery maxWidth={1224}>
          <SideBar menuItems={menuItems}/>
       </MediaQuery>
      <main id="main" role="main">
        <Header/>
        <Menu menuItems={menuItems}/>
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
      </React.Fragment>
    );
  }
}

export default withProductService()(App);