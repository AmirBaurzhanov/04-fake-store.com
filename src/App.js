import './App.css';

import React from 'react';
import { Route } from 'react-router';
import { ProductsPage } from './components/products/productsContainer';
import About from './components/about/About';
import { Details } from './components/products/detail/detailContainer';
import { RegisterPage } from './components/login/registerContainer';
import { CategoryPage } from './components/category/categoryContainer';
import { NavbarPage } from './components/header/NavbarContainer';
import { CartPage } from './components/cart/cartContainer';


const App = () => {

  return (
    <div>
      <NavbarPage />
      <div>
        <Route exact path="/" render={() => <ProductsPage />} />
        <Route exact path="/product/:id?" render={() => <Details />} />
        <Route exact path="/category/:category?" render={() => <CategoryPage />} />
        <Route exact path="/cart" render={() => <CartPage />} />
        <Route exact path="/login" render={() => <RegisterPage />} />
        <Route exact path="/about" render={() => <About />} />
      </div>
    </div>
  );
}


export default App
