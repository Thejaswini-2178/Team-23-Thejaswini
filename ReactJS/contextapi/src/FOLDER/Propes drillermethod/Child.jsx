import React, { Component } from "react";

class Child extends Component {
  render() {
    const { names } = this.props;

    return (
      <div>
        <h4>Child Component</h4>
        <ul>
          {names.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Child;
