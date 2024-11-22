import React, { Component } from "react";
import Child from "./Child";

class Wrapped extends Component {
  render() {
    const { names } = this.props;

    return (
      <div>
        <h3>Wrapped Component</h3>
        <Child names={names} />
      </div>
    );
  }
}

export default Wrapped;
