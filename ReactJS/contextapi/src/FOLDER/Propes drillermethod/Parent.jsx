import React, { Component } from "react";
import Wrapped from "./Wrapped";

class Parent extends Component {
  render() {
    const { names } = this.props;
    return (
      <div>
        <h2>Parent Component</h2>
        <Wrapped names={names} />
      </div>
    );
  }
}
export default Parent;
