import React, { Component } from 'react';

class Phases extends Component {
  render() {
    return (
      <div>
        <h1>Hello, this is React Lifecycle Phases</h1>
        <p>There are 4 methods which are:</p>
        <p>This methods are donot exist on the functional methods only exixt on class component methods.</p>
        <ol>
          <li>Mounting</li>
          <li>Updating</li>
          <li>Unmounting</li>
          <li>Error Handling</li>
        </ol>
      </div>
    );
  }
}

export default Phases;
