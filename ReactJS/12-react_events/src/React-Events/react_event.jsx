import React, { Component } from 'react'
 class Reactevent extends Component {
    state={
            string:"hii this is my first message",
            details:{
              name:"theju",
              age:"23",
              city:"chittor", 
              state:"Andhra",
            },
           
        }
        change=()=>{
          this.setState({string:"This message is changed"})
        } 
        changDetail=()=>{
          this.setState({name:"Madhu",age:"24",state:"AP",city:"mpl"})
        }
  render(){
    return (
      <div>
        <ul>
          <h3>This is string changing</h3>
        <p>{this.state.string}</p>
        <button onClick={this.change}>Change</button>
        <h3>This  is an object</h3>
        {Object.entries(this.state.details).map(([key,value],index)=>{
           return <li key={index}>{key}:{value}</li>
        })}
        <button onClick={this.changDetail}>Change Details</button>
          {Object.entries(this.state).map(([key,value],index)=>{
              <li key={index}>{key}:{value}</li>
          })}

       

        </ul>
        
      </div>
    )
  }
}

export default Reactevent;
