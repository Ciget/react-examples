import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {
    renderLinks()
    {
      
    }
    
    render() {
        return (
            <nav className="navbar navbar-light">
            <Link to="/" className="navbar-brand">Redux auth</Link>
                <ul className="nav navbar-nav">
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state)
{
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, null)(Header);