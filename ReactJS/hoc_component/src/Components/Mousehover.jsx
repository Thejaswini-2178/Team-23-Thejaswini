import React, { Component } from 'react';
import updateData from './HOC component'; 

class Mousehover extends Component {
  render() {
    
    const { count, onmousehoverIncrement, onmousehoverDecriment } = this.props; 

    return (
      <div>
        <h1>This is the mousehover function</h1>
        <p>This is the increment and decrement function</p>
        <button
          style={{ padding: '10px', margin: '10px' }}
          onMouseOver={this.props.onmousehoverIncrement} 
        >
          Increment
        </button>
        <button
          style={{ padding: '10px', margin: '10px' }}
          onMouseOver={this.props.onmousehoverDecriment} 
        >
          Decrement
        </button>
        <h2>The total count: {count}</h2>
      </div>
    );
  }
}


export default updateData(Mousehover); 
