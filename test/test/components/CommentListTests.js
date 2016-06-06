import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('Comment Box', ()=>{
  let component;
  const props = {comments:['New comment', 'Second comment']};
  
  beforeEach(()=> {
    component = renderComponent(CommentList, null, props);
  });

   it('Show an LI for each comment', ()=>{
    expect(component.find('li').length).to.equal(props.comments.length);   
  } );

  it('Show each comment that is provided', ()=>{
    expect(component).to.contain('New comment');
    expect(component).to.contain('Second comment');
  } );
});