import React, {Component} from 'react'
import ProductsContainer from '../containers/ProductsContainer'
//import WishBox from '../containers/WishBox'
//import products from '../products.json';

class App extends Component{
  
  render(){
    let products = [{
      name: 'sample 1',
      id: 1
    }, {
      name: 'sample 2',
      id: 2
    }];
    return (<div>
       <ProductsContainer products={products}/>
      </div>)
  }
}

export default App
