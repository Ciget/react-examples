import React, {Component, PropTypes} from 'react';

class AddFriendInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: this.props.name || ''
        };
    }
    handleChange(e){
        this.setState({name:e.target.value});
    }

    handleSubmit(e){
        const name = e.target.value.trim();
        if (e.which==13){
            this.props.addFriend(name);
            this.setState({name: ''});
        }
    }
    
    render() {
        return (<input type="text" className='addFriendInput'
        value={this.state.name}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
        );
    }
}

AddFriendInput.propTypes = {
    name: PropTypes.string,
    addFriend: PropTypes.func.isRequired
};

export default AddFriendInput;