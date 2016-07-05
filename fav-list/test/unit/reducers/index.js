import reducer from '../../../src/js/reducers/friendList';
import { ADD_FRIEND, DELETE_FRIEND, STAR_FRIEND } from '../../../src/js/constants/ActionTypes';
import chai, { expect } from 'chai';

describe('Test reducer', () => {
    
    it('should handle add user action', () => {
        let result = reducer({friends:[]}, {type: ADD_FRIEND, name:'asdasd'});
        expect(result).to.have.property('friends').with.length(1);

    });
    
});
