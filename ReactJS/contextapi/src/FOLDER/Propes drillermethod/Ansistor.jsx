import React, { Component } from 'react'
import Secondparent from './Secondparent'

class Ansistor extends Component {
  render() {
    const { names } = this.props
    return (
      <div>
        <hr />
        <hr />
        <hr />
        <br />
        <h1>This is the Anisister part</h1>
        <p>this is the data</p>
        <Secondparent names={names} />
        <ol> 
          {names.map((person) => (
            <li key={person.id}>{person.id}:{person.name}</li>
          ))}
        </ol>  
        <hr />
      </div>
    )
  }
}

export default Ansistor

