import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('Comment Box', ()=>{
  let component;
  
  beforeEach(()=> {
    component = renderComponent(CommentBox);
  });

   it('It has a textarea', ()=>{
    expect(component).to.have.class('comment-box');   
  } );
  
  it('It has a textarea', ()=>{
    expect(component.find('textarea')).to.exist;   
  } );
  
   it('It has a button', ()=>{
    expect(component.find('button')).to.exist;   
  } );
  
  describe('enter some text', ()=>{
    
    
    beforeEach(()=>{
      component.find('textarea').simulate('change', 'some text data');
    });
    
    it('Should show entered text', ()=>{
      expect(component.find('textarea')).to.have.value('some text data');   
    } );
    
      it('when enter data-> clear text', ()=>{
        component.simulate('submit');
        expect(component.find('textarea')).to.have.value('');   
    } );
  });
});