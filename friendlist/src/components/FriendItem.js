import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FriendItem extends Component {
  
  render() {
    const friend = this.props.item;

    return (<div className="row">
      <div className="col-md-3"><h5>{friend.name}</h5></div>
      <div>
        <button type="button" className="btn btn-default" className={friend.marked === true ? 'btn-success' : ''} aria-label="Left Align" onClick={() => this.props.starFriend(friend.id)}>
          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
        </button>
      </div>
    </div>);
  }
}

function mapPropsToState(state) {
  return {
  };
}


FriendItem.propTypes = {
  item: PropTypes.object.isRequired,
  starFriend: PropTypes.func,
};

export default connect(mapPropsToState, actions)(FriendItem);
