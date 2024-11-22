import React, { Component } from "react";
import Parent from "./FOLDER/Propes drillermethod/Parent";

class App extends Component {
  render() {
    const namesCollection = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Alice" },
      { id: 4, name: "Bob" },
      { id: 5, name: "Charlie" },
    ];
    return (
      <div>
        <h1>Props Drilling Example</h1>
        <Parent names={namesCollection} />
      </div>
    );
  }
}

export default App;
