import React, { Component } from 'react'

export default class RenderingComponents extends Component {
  render() {
    return <h1>Admin Dashboard</h1>;
  }
}

class User extends React.Component {
  render() {
    return <h1>User Dashboard</h1>;
  }
}

class App extends React.Component {
  render() {
    const isAdmin = true;
    return isAdmin ? <Admin /> : <User />;
  }
}

