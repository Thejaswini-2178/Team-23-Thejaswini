import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
  state = { isLoggedIn: false };

  toggleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleLogin}>
          {this.state.isLoggedIn ? "Logout" : "Login"}
        </button>
        {this.state.isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in.</h1>}
      </div>
    );
  }
}


