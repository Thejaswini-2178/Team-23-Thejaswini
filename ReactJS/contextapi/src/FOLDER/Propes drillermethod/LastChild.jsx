import React, { Component } from 'react'

export default class LastChild extends Component {
  render() {
    const {names}=this.props
    return (
      <div>
        <h1>child data</h1>
        <ul>
            {names.map((person)=>(
                <li>{person.id}:{person.name}</li>
            ))}
        </ul>
      </div>
    )
  }
}
