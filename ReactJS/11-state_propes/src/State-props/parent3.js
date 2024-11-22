import React, { Component } from 'react'
import child3 from './child3'

export default class parent3 extends Component {
    state={
        text:"Hello this is theju.",
        age:23,
        obj:{"place":"MPL"}
    }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}
