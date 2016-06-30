import { ADD_FRIEND, DELETE_FRIEND, STAR_FRIEND, GET_FRIENDS } from './constants';

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
  console.log('star user' + id);
  return {
    type: STAR_FRIEND,
    id,
  };
}

export function getFriends() {
  const result = {
    type: GET_FRIENDS,
    data: [{
      id: 1,
      name: 'Victor teste',
      marked: false,
    },
      {
        id: 2,
        name: 'Anton super',
        marked: false,
      },
    ],
  };
  return result;
}
