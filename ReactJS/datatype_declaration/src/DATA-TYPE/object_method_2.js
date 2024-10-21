import React, { Component } from "react"
class Objectmethod_2 extends Component{
    state={
    obj:{
        name:"theju",
        age:23,
        place:"AP",
        hobbies:["playing","reading"],
        address:{city:"chittoor",state:"AP"}
    }
}
    render(){
        return(
            <div>
                <h1>displaying the object</h1>
                <ul>
                    {Object.entries(this.state.obj).map(([key,value],index)=>(
                        <li key={index}>{key}:{index}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Objectmethod_2

