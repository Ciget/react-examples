import { expect } from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import commentReducer  from '../../src/reducers/comments';


describe('Comments reducers', ()=> {
    console.log('Hello');
    
    it('handle action with unknown type', ()=> {
        console.log(commentReducer(undefined, {}));
        expect(commentReducer(undefined, {})).to.eql([]);
    });
    
    it('handle action of type SAVE_COMMENT', ()=> {
        const action ={ type: SAVE_COMMENT, payload:'new comment'};
        expect(commentReducer([], action)).to.eql(['new comment']);
    });
    
    
});
