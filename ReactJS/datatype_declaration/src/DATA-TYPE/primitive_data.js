import React, { Component } from "react";
class Primary1 extends Component{
    state={
        a:"hellow world",
        age:23,
        chech:true,
        b:45>29,
        c:"50"===50,
        d:50/10,
        e:20%10,
        f:20%15,
    }
    render(){
        return( 
            <ul>
            <p>a={this.state.a}</p>
            <p>age={this.state.age}</p>
            <p>check={this.state.chech}</p>
            <p>b={this.state.b}</p>
            <p>c={this.state.c}</p>
            <p>d={this.state.d}</p>
            <p>e={this.state.e}</p>
            <p>f={this.state.f}</p>
            </ul>
        )
    }
}
export default Primary1