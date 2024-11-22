import React, { Component } from "react";
import NameContext from "./NameContext";

class Child extends Component {
  static contextType = NameContext; // Access the context using contextType

  render() {
    const names = this.context;

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
