import React, { Component } from 'react';
import ProductList from './product-list';
import Cart from './cart';
export default class App extends Component {
  render() {
    return (
      <div>
        <ProductList/>
        <Cart/>
      </div>
    );
  }
}
