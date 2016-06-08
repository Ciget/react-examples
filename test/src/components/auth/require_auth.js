import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent)
{
    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        };
        
        render() {
            return <ComposedComponent {...this.props} />;
        }
    
        componentWillMount()
        {
            if (!this.props.authenticated)
            {
                this.context.router.push('/');
            }
        }
        
        componentWillUpdate(nextProp)
        {
            if (!nextProp.authenticated)
            {
                this.context.router.push('/');
            }
        }
    
    }
    function mapStateToProps(state)
    {
        return {authenticated: state.authenticated}
    }
    
    return connect(mapStateToProps)(Authentication);
}