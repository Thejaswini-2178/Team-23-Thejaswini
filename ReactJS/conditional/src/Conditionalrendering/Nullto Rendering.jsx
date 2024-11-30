import React, { Component } from 'react'

export class NulltoRendering extends Component {
  render() {
    const shouldRender = false;
    return <div>{shouldRender ? <h1>Render Me</h1> : null}</div>;
  }
}
