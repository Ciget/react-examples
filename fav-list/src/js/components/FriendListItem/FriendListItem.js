import React, {Component, PropTypes} from 'react';
import './FriendListItem.scss';
import classnames from 'classnames';

class FriendListItem extends Component {
    render() {
        return (
             <li className="friendListItem">
                <div className="friendInfos">
                <div><span>{this.props.name}</span></div>
                <div><small>xx friends in common</small></div>
                </div>
                <div className="friendActions">
                <button className="btn btn-default btnAction" onClick={() => this.props.starFriend(this.props.id)}>
                    <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
                </button>
                <button className="btn btn-default btnAction" onClick={() => this.props.deleteFriend(this.props.id)}>
                    <i className="fa fa-trash" />
                </button>
                </div>
            </li>
        );
    }
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired
};

export default FriendListItem;