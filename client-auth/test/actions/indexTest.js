import {expect} from '../test_helper';
import {saveComment} from '../../src/actions';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Actions', ()=> {
    
    describe('SaveComment', ()=> {
        it('has correct type', ()=>{
            let action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });
        
          it('has correct payload', ()=>{
            let action = saveComment('new comment');
            expect(action.payload).to.equal('new comment');
        });
    });
    
});

