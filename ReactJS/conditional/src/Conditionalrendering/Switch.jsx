import React, { Component } from 'react'

export default class Switch extends Component {
  render() {
    const userRole = "admin";
    switch (userRole) {
      case "admin":
        return <h1>Welcome, Admin!</h1>;
      case "user":
        return <h1>Welcome, User!</h1>;
      default:
        return <h1>Please sign up.</h1>;
    }
  }
}

