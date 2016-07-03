import { ADD_FRIEND, STAR_FRIEND, DELETE_FRIEND } from '../constants/ActionTypes.js';

const initState = [
    {
        id: 1,
        name: 'one'
    },
    {
        id: 2,
        name: 'two'
    },
    {
        id: 3,
        name: 'three'
    }
];

export default function (state = initState, action){
    switch (action.type){
        case ADD_FRIEND:
            return {
                ...state,
                //friends: state.
            };

        case DELETE_FRIEND:
            return {
                
            };

        case STAR_FRIEND:
            return {
                
            };

        default:
            return state;
    }
}