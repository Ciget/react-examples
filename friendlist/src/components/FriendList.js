import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FriendList extends Component {

  componentWillMount() {
    // this.props.getFriends();
  }

  render() {
    return (<div> list of friends</div>);
  }
}

function mapPropsToState(state) {
  return {
    friends: state.data,
  };
}

FriendList.propTypes = {
  getFriends: PropTypes.func,
};

export default connect(mapPropsToState, actions)(FriendList);
