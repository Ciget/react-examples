import React, {Component} from 'react'
import { connect } from 'react-redux'

class ProductItem extends Component{

  render(){
    const product = this.props.product;
    return (
      <div key={product.id} className={''}>
        <div className="row"> <div className="col-sm-6 col-md-4"> 
          <div className="thumbnail">
           <img data-src="holder.js/100%x200" alt="100%x200" style={{height: 200, width: 100, display: 'block'}}
            data-holder-rendered="true"/>
            <div className="caption"> 
            <h3>Thumbnail label</h3> <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p> </div> 
          </div> 
        </div> 
        <div className="col-sm-6 col-md-4"> <div className="thumbnail"> 
        <img data-src="holder.js/100%x200" alt="100%x200" style={{height: 200, width: 100, display: 'block'}} 
        data-holder-rendered="true"/> 
          <div className="caption"> 
            <h3>Thumbnail label</h3> <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p> </div> 
          </div>
        </div> 
        <div className="col-sm-6 col-md-4"> <div className="thumbnail"> 
        <img data-src="holder.js/100%x200" alt="100%x200" style={{height: 200, width: 100, display: 'block'}}  
        data-holder-rendered="true"/> <div className="caption"> <h3>Thumbnail label</h3> <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p> </div> </div> </div> 
      </div>
      </div>
    )
  }
}
export default connect()(ProductItem);
