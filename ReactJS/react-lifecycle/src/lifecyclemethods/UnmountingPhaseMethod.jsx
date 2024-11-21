import React, { Component } from 'react';

export default class UnmountingPhaseMethod extends Component {
  constructor(props) {
    super(props);
    this.state = { age: 23 };
    console.log("")
  }

  componentWillUnmount() {
    if (this.state.age === 23 ) {
      console.log("Component is being unmounted...");
    }
  }

  render() {
    return (
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&s"
          alt="example"
        />
      </div>
    );
  }
}
