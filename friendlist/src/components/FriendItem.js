import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class FriendItem extends Component {
//   renderFriend(friend) {
//     return (<div key={friend.id} className="row">
//       <div className="col-md-3"><h5>{friend.name}</h5></div>
//       <div><button type="button" className="btn btn-default" aria-label="Left Align" onClick={this.handleClick.bind(this, friend.id)}>
//         <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
//       </button>
//       </div>
//     </div>);
//   }

  render() {
    return (<div>Item</div>);
  }
}

function mapPropsToState(state) {
  return {
  };
}


FriendItem.propTypes = {
  item: PropTypes.node,
};

export default connect(mapPropsToState, null)(FriendItem);
