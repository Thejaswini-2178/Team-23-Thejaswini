import React, { Component } from "react";

class ObjectDisplay1 extends Component {
  state = {
    obj1: {
      name: "theju",
      age: 22,
      address: "mpl",
      state: "ap",
      hobbies: ["playing", "Reading"]
    },
  };

  // Simplified method to update obj1 state
  changeDetails = () => {
    this.setState({
      obj1: {
        name: "Mani",
        age: 23,
        address: "Andhra",
        state: "AP",
        hobbies: ["dancing", "music"] // hobbies should be an array
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Object Key-Value Pairs</h1>
        <ul>
          {Object.entries(this.state.obj1).map(([key, value], index) => (
            <li key={index}>
              {key}: {Array.isArray(value) ? value.join(", ") : value}
            </li>
          ))}
        </ul>
        <button onClick={this.changeDetails}>Change Details</button>
      </div>
    );
  }
}

export default ObjectDisplay1;
