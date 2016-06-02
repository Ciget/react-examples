import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
    handleFormSubmit({email, password})
        {
            console.log(email, password);  
            this.props.signinUser({email, password});  
        };
        
    render() {
        const {handleSubmit, fields:{email, password}} = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email: </label>
                    <input className="form-control" {...email}/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password: </label>
                    <input className="form-control" {...password}/>
                </fieldset>
                <button action="submit" className="btn btn-primary"> Sign In</button> 
            </form>);
    }
}

export default reduxForm({
    form:'signin',
    fields:['email', 'password']
}, null, actions)(Signin);