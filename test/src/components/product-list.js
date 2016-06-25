import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ProductList extends Component {
    componentWillMount() {
        this.props.getProducts();
    }
    
    renderProduct(item) {
        return (<div key={item.id}>{item.name}</div>);
    }

    render() {
        return (<div className="row"> 
                {this.props.data.map(this.renderProduct)}
             </div>
        );
    }
}

function mapStateToProps(state){
    return {
        data: state.product
    };
}

export default connect(mapStateToProps, actions)(ProductList);