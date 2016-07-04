import { ADD_FRIEND, STAR_FRIEND, DELETE_FRIEND } from '../constants/ActionTypes.js';

const initState = {
    friends: [
    {
        id: 1,
        name: 'one',
        starred: false
    },
    {
        id: 2,
        name: 'two',
        starred: false
    },
    {
        id: 3,
        name: 'three',
        starred: false
    }]
};

export default function (state = initState, action){
    switch (action.type){
        case ADD_FRIEND:
            return {
                friends: state.friends.concat([
                    {
                        name:action.name, 
                        id: Math.floor(Math.random()*10000)
                }])
            };

        case DELETE_FRIEND:
        
            return {
                ...state,
                friends: state.friends.filter((friend) => friend.id !== action.id)
            };

        case STAR_FRIEND:
        
           return {
               ...state,
               friends: state.friends.map((friend) => {
               if (friend.id === action.id)
               {
                 return Object.assign({}, friend, {starred: !friend.starred});                
               }
               return friend; 
            })
           };

        default:
            return state;
    }
}