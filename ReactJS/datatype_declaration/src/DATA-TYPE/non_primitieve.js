import React, { Component } from "react";
class Nonprimitive extends Component{
    state={
        arr:["theju",25,"mani"],
        object:{ name:"theju",age:23,place:{city:"chittoor",state:"AP"},hobbies:["playing","plantation"]}
    }
    render(){
        return (
          <div>
            <h1>Address</h1>
            <ul>
                <p>{this.state.arr.join("  ")}</p>
            </ul>
            <ul>
                <li>{this.state.object.name}</li>
                <li>{this.state.object.age}</li>
                <li>{this.state.object.place.city}</li>
                <li>{this.state.object.place.state}</li>
                <li>{this.state.object.hobbies.join(",")}</li>
            </ul>
        </div>
        )
    }
}
export default Nonprimitive
