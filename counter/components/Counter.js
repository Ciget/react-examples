import React, {Component} from 'react';

export class Counter extends Component 
{
    constructor(props) {
        super(props);
        this.state = {counterValue: 0, test:20};
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    
    onIncrement(){
        this.setState(  {counterValue: this.state.counterValue+1} );
    }

    onDecrement(){
        this.setState(  {counterValue: this.state.counterValue-1} );
    }

    render(){
        return (<div>
            <h3>{this.state.counterValue}</h3>
            <button onClick={this.onIncrement}>+</button>
            <button onClick={this.onDecrement}>-</button>
        </div>);
    }   
}