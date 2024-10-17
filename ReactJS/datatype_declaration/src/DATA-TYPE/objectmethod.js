import React, { Component } from "react";

class ObjectDisplay extends Component {
  state = {
    obj1: {
      name: "theju",
      age: 22,
      address: "mpl",
      state: "ap",
      hobbies:["playing","Reading"]
    },
  };
  massage=()=>{
      this.setState({name:"Mani",age:23,address:"Andhra",state:"Ap",hobbies:["dancing","music"]})
  }
  render() {
    return (
      <div>
        <h1>Object Key-Value Pairs</h1>
        <ul>
          {Object.entries(this.state.obj1).map(([key, value], index) => (
            <li key={index}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <div>
        <ul>
        <button onClick={this.massage}>change</button>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.address}</p>
        <p>{this.state.hobbies}</p>
        <p>{this.state.state}</p>
        </ul>
        </div>
      </div>
    );
  }
}

export default ObjectDisplay;
