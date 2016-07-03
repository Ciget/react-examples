import React, {Component, PropTypes} from 'react';
import {FriendListItem} from '../FriendListItem/FriendListItem';

class FriendList extends Component {
    renderList(){
        this.props.friends.map((friend) =>
            (<FriendListItem
                key={friend.id} 
                name={friend.name} 
                starred={friend.isStar}
                {...this.props.actions} />));
    }

    render() {
        return (
            <ul className="friend-list">
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