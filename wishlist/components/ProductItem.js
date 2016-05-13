import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addToCompare} from '../actions'

class ProductItem extends Component{

  render(){
    const product = this.props.product;
    return (
      <div key={product.id} className={'container-fluid'}>
        <div className="row">
        <div className="col-md-4"> <div className="thumbnail"> 
         <div className="caption"> <h4>{product.name}</h4> <p>{product.description}</p> <p>
         <a href="#" className="btn btn-primary" onClick={this.Compare} role="button">Compare</a> </p> </div> </div> </div> 
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    Compare: (e) => {
      dispatch(addCompare(1, 'asds'))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps)(ProductItem);
