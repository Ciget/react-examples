import { ADD_FRIEND, GET_FRIENDS, STAR_FRIEND } from '../actions/constants';

export default function (state = [], action) {
 // console.log(action);
  switch (action.type) {
    case GET_FRIENDS:
      return action.data;
    case ADD_FRIEND:
      return {

      };
    case STAR_FRIEND:
      return state.map(friend => {
        return friend.id === action.id ? Object.assign({}, friend, { marked: !friend.marked }) : friend;
      });
    default:
      var t = [...state, ...action];
      return t;
  }
}
