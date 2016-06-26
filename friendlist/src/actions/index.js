import { ADD_FRIEND, DELETE_FRIEND, STAR_FRIEND } from './constants';

export function addFriend(data) {
  return {
    type: ADD_FRIEND,
    name: data.name,
  };
}

export function deleteFriend(id) {
  return {
    type: DELETE_FRIEND,
    id,
  };
}

export function starFriend(id) {
  return {
    type: STAR_FRIEND,
    id,
  };
}
