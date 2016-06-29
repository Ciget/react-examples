import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FriendItem from './FriendItem';

class FriendList extends Component {

  componentWillMount() {
    this.props.getFriends();
  }

  render() {
    return (<div className="container"> <h2> user list</h2>
    {this.props.friends.map(friend => <FriendItem item={friend} key={friend.id} />)}
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
