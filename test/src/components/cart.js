import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Cart extends Component {
    render() {
        return (
            <div>
                Shopping cart
            </div>
        );
    }
}

Cart.propTypes = {

};

function mapStateToProps(state){
    return {};
}

export default connect(mapStateToProps)(Cart);