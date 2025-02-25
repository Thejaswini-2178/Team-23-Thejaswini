import React, { Component } from "react";
import Wrapped from "./Wrapped";


class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <Wrapped />
      </div>
    );
  }
}

export default Parent;
