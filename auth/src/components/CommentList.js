import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
    
    render() {
        const {comments} = this.props;
        console.log(comments);
        return (
            <ul className="comment-list">
                {comments.map(comment=><li key={comment}>{comment}</li>)}
            </ul>
        );
    }
}

function mapStateToProps(state)
{
    return {comments:state.comments};
}

export default connect(mapStateToProps)(CommentList);