import { ADD_FRIEND, GET_FRIENDS } from '../actions/constants';

export default function (state = [], action) {
 // console.log(action);
  switch (action.type) {
    case GET_FRIENDS:
      return action.data;
    case ADD_FRIEND:
      return {

      };
    default:
      var t = [...state, ...action];
      return t;
  }
}
