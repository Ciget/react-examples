import React, { Component } from 'react';
import Cart from './cart';
import Products from './products';

export default class App extends Component {
  render() {
    return (
      <div>
        <Products/>
        <Cart/>
        {this.props.children}
      </div>
    );
  }
}
