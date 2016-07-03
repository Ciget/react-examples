import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  {AddFriendInput, FriendList} from '../../components';
import * as FriendActions from '../../actions/FriendsAction';

class FriendListApp extends Component {
    render() {
        const { friends, actions } = this.props;
        return (
            <div>
                <h2>Friend list</h2>
                <AddFriendInput addFriend={actions.addFriend}/>
                <FriendList friends={friends}/>
            </div>
        );
    }
}

FriendListApp.propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
    return {
        friends: state.friends
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(FriendActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps )(FriendListApp);