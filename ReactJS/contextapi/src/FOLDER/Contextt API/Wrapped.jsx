import React, { Component } from "react";
import Child from "./Child";

class Wrapped extends Component {
  render() {
    return (
      <div>
        <h3>Wrapped Component</h3>
        <Child />
      </div>
    );
  }
}

export default Wrapped;
