import React, { Component } from 'react'

export default class UpdatingPhaseMethod extends Component {
    constructor(Props){
        super(Props)
        this.state={id:25}
        console.log(   ""   )
        console.log("Constructed is called.....")
    }
    static getDerivedStateFromProps(props,state){
        console.log("static getDerivedStateFromProps is called...");
        return null;
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate is called.....");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate is called...")
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is called...")
        return true;
    }
  render() {
    console.log("render is called....")
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.id+1})}>CLICK</button>
      </div>
    )
  }
}
