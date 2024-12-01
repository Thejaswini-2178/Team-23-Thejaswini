import React, { Component } from 'react'

export default class Ifwithlogic extends Component {
  render() {
    const hasMessages = true;
    return (
      <div>
        <h1>Inbox</h1>
        {hasMessages && <p>You have new messages.</p>}
      </div>
    );
  }
}

