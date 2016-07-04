import React, {Component, PropTypes} from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import './FriendList.scss';
class FriendList extends Component {

 renderList() {
    return this.props.friends.map((friend) =>
      (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          starred={friend.starred}
          {...this.props.actions} />
      )
    );
  }

    render() {
        return (
            <ul className="friendList">
                {this.renderList()}
            </ul>
        );
    }
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default FriendList;