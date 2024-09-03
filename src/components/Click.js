import React, { Component } from "react";

export class Click extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0  //my variable count is Zero
        };
    }
    UpdateClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render(){
        const { count } = this.state; //every time we clicked the button the coutn is incremented
        return (
            <div>
                <button onClick={this.UpdateClick}>Click {count} me!</button>
            </div>
        )
    }
}

export default Click;