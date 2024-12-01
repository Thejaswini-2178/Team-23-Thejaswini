import React, { Component } from 'react'

export default class RenderCondition extends Component {
  renderContent() {
    const isLoggedIn = true;
    if (isLoggedIn) {
      return <h1>Welcome, User!</h1>;
    }
    return <h1>Please log in.</h1>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

