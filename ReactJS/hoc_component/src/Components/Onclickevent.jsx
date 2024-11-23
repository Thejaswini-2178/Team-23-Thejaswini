import React, { Component } from 'react';
import updateData from './HOC component'; 

class Onclickevent extends Component {
    render() {
        const { count,onclickIncriment, onclickDecriment,  } = this.props; 

        return (
            <div>
                <h1>This is incrementing and decrementing buttons</h1>
                <button
                    style={{ padding: '10px', margin: '10px' }}
                    onClick={ this.props.onclickIncriment} 
                >
                    Increment
                </button>
                <button
                    style={{ padding: '10px', margin: '10px' }}
                    onClick={this.props.onclickDecrement}
                >
                    Decrement
                </button>
                <h2>The total count: {count}</h2> 
            </div>
        );
    }
}

export default updateData(Onclickevent);
