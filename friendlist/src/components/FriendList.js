import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FriendList extends Component {

  componentWillMount() {
    this.props.getFriends();
  }

  renderFriend(friend) {
    return (<div key={friend.id}>{friend.name}</div>);
  }
  render() {
    return (<div> user list: 
    {this.props.friends.map(this.renderFriend)}
    </div>);
  }
}

function mapPropsToState(state) {
  return {
    friends: state.friend,
  };
}

FriendList.propTypes = {
  getFriends: PropTypes.func,
  friends: PropTypes.array,
};

export default connect(mapPropsToState, actions)(FriendList);
