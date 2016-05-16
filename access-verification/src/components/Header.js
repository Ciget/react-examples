import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    authButton(){
        
        if (this.props.authenticated) {
            return <button onClick={}>Sign Out</button>;
        }
        else  return <button onClick={}>Sign in</button>;
    }
    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className ="nav navbar-nav">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/resources">Resources</Link></li>
                    <li className="nav-item">{this.authButton()}</li>
                </ul>
            </nav>           
        );
    }
}

export default Header;