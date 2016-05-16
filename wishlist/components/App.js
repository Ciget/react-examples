import React, {Component} from 'react'
import ProductsContainer from '../containers/ProductsContainer'
import WishBox from './WishBox'
//import products from '../products.json';

class App extends Component{
  
  render(){
    let products = [{
      name: 'sample 1',
      description: 'Some test description about dfsdfs',
      id: 1
    }, {
      name: 'sample 2',
      description: 'Some 2 test description about second',
      id: 2
    }];
    return (<div>
       <ProductsContainer products={products}/>
       <WishBox/>
      </div>)
  }
}

export default App
