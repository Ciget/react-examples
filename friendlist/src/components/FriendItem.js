import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class FriendItem extends Component {
  render() {
    const friend = this.props.item;

    return (<div className="row">
      <div className="col-md-3"><h5>{friend.name}</h5></div>
      <div>
        <button type="button" className="btn btn-default" aria-label="Left Align">
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
};

export default connect(mapPropsToState, null)(FriendItem);
