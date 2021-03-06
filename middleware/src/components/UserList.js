import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
 
class UserList extends Component {
    
    componentWillMount()
    {
        this.props.fetchUsers();
    }
    
    renderUser(user)
    {
        return (<div className="card card-block">
            <h4 className="card-title">{user.name}</h4>
            <p className="card-text">Company</p>
            <a className="btn btn-primary">Email</a>
        </div>);
    }
    
    render() {
        return (
            <div className="user-list"> {this.props.users.map(this.renderUser)}</div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return {users: state.users.data}
}

export default connect(mapStateToProps, actions)(UserList);