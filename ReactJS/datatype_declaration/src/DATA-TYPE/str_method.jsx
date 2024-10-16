import React, { Component } from "react";
class Strmethods extends Component{
    state={
        a:"My name is Thejaswini Iam from ctm My name Is thejaswini   "
    }
    render(){
        return (
           <div>
                <br/><hr/>
            <h1>STRING METHODS</h1>
             <ol>
                <li>length()</li>
                <li>toUpperCase()</li>
                <li>toLowerCase()</li>
                <li>substr()</li>
                <li>charcodeat()</li>
                <li>charAt()</li>
                <li>substring()</li>
                <li>slice()</li>
                <li>splice()</li>
                <li>split()</li>
                <li>Trim()</li>
                <li>Reverse()</li>
            </ol>
            <br/>
             <ol>
                <li>{this.state.a}</li>
                <li>length:{this.state.a.length}</li>
                <li>trim:{this.state.a.trim()}</li>
                <li>toLower:{this.state.a.toLocaleLowerCase()}</li>
                <li>toUpper:{this.state.a.toLocaleUpperCase()}</li>
                <li>substring:{this.state.a.substring(1,6)}</li>
                <li>substr:{this.state.a.substr(3,6)}</li>
                <li>split:{this.state.a.split(" ").join(",")}</li>
                <li>charat:{this.state.a.charAt(6)}</li>
                <li>charCodeAt:{this.state.a.charCodeAt(19)}</li>
                <li>join:{this.state.a.split("").reverse().join("")}</li>
                <li>slice:{this.state.a.slice(1,5)}</li>
                <li>slipt:{this.state.a.split(1,2)}</li>
                </ol>
           </div>
        )
    }
}
export default Strmethods