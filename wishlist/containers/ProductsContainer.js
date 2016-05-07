import React, {Component} from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

class ProductsContainer extends Component{

  render(){
    console.log(this.props);
    const {products} = this.props;
    
    return (
      <ProductList>
      {products.map(product=>
        <ProductItem product={product}></ProductItem>
      )}
      </ProductList>
    )
  }
}

// ProductsContainer.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired
//   })).isRequired,
// }

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect()(ProductsContainer)
