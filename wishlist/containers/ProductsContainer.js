import React, {Component} from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'

class ProductsContainer extends Component{

  render(){
    const {products} = this.props;
    
    return (<div>
      {products.map(product=>
        <ProductItem key={product.id} product={product}></ProductItem>
      )}
      </div>
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
    product: state.products
  }
}

export default connect()(ProductsContainer)
