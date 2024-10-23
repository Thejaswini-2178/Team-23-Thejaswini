import React, { Component } from 'react';
import Child from './Child'; // Import the Child component

class Parent extends Component {
    state = {
        array: [1, 2, 3, 4, "theju", "manishankar", "sivashankar"],
        obj: {
            name: "Anjum",
            age: 24,
            mail: "thejaswini123@gmail.com"
        }
    };

    render() {
        return (
            <div>
                {/* Render array values as an unordered list */}
                <ul>
                    {this.state.array.map((val, index) => (
                        <li key={index}>{val}</li>
                    ))}
                </ul>
                {/* Pass the `array` and `obj` as props to the child component */}
                <Child array={this.state.array} obj={this.state.obj} />
            </div>
        );
    }
}

export default Parent;
