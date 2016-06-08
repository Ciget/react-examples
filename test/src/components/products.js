import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Products extends Component {
      
    render() {
        return (
            <div>list of products</div>
        );
    }
}

function mapStateToProps(state)
{
    return {
    };
}

export default connect(mapStateToProps, null)(Products);