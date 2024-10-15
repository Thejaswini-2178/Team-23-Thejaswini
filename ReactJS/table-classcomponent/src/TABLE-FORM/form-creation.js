import React, { Component } from "react";
export class Form extends Component{
    render(){
        return <div>
            <div>
                <br/><br/>
            </div>
            <label>Name:</label>
            <input type="teext"/>
            <label>Email</label>
            <input type="email"/>
            <label>Password</label>
            <input type="password"/>
            <button type="submit">Submit</button>
        </div>
    }
}