import React, { Component } from 'react'

export default class MountingMethod extends Component {
  constructor(props){
    // constructor is basically used for the dispalying the data functions
    super(props)
    this.state={
      message:"this is consructer called...",
      obj:{age:23},
      array:["fruits","Vegitables","animals"]
    }
    console.log("the constuctor called.....")
  }
  static getDerivedStateFromProps(props, state) {
    console.log('GetDerivedStateFromProps: Syncing state with props');
    return null;
  }
 

  componentDidMount(){
    console.log("this componentdid mount is called")
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <p>{this.state.obj.age}</p>
        <p>check the age </p>
      </div>
    )
  }
}
