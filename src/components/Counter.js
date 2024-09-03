import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0  //my variable count is Zero
        };
    }
    IncrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render(){
        const { count } = this.state;
        return (
            <div>
                <button onMouseEnter={this.IncrementCount}>Increment to {count}</button>
            </div>
        )
    }
}

export default Counter;