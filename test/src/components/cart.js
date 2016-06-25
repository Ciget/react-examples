import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Cart extends Component {
    render() {
        return (
            <div>
                Cart
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {items: state.product.data};
}

export default connect(mapStateToProps, actions)(Cart);