import React, { Component } from 'react';

class Child extends Component {
    render() {
        const { array, obj } = this.props; // Destructure the array and obj from props
        return (
            <div>
                {/* Display the array elements */}
                <h3>Array:</h3>
                {array.map((val, index) => (
                    <p key={index}>{val}</p>
                ))}

                {/* Display object details */}
                <h3>Object Data:</h3>
                <p>Name: {obj.name}</p>
                <p>Age: {obj.age}</p>
                <p>Email: {obj.mail}</p>
            </div>
        );
    }
}

export default Child;
