import React, { Component } from 'react'
import LastChild from './LastChild'

class Secondparent extends Component {
  render() {
    const {names}=this.props
    return (
      <div>
        <h1>Secondparent</h1>
        <p>This is the childdata</p>
        <LastChild names={names}/>
        <ul>
                {names.map((person)=>(
                    <li key={person.id}>{person.id}:{person.name}</li>
                ))}
        </ul>
      </div>
    )
  }
}


export default Secondparent
