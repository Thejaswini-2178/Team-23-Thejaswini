import React, { Component } from "react";
class Array extends Component{
    state={
        array:["hellow","world","hellow","banana","color","orange","banana","grapes"],
        arr2:[12,1,2,3,4,55,34,56,234,87,1,23,34,98],
    }
    // message=()=>{
    //     Array.from(this.state.array.filter((i)=>i===i.length))
    // }
    render(){
        return(
            <div>
                <h1>Array methods</h1>
                <ol>
                <li>Length()
                    <ol>
                        <li>{this.state.array.join(",")}</li>
                        <li>{this.state.array.length}</li>
                        <li>{this.state.arr2.length}</li>
                    </ol>
                </li>
                <li>Indexof()
                    <ol>
                        <li>{this.state.array.indexOf("banana")}</li>
                        <li>{this.state.array.indexOf(6)}
                            <p>returns if the value is not their in the array</p>
                        </li>
                        <li>{this.state.arr2.indexOf(23)}</li>
                        <li>{this.state.arr2.indexOf(100)}{ " Returns -1 if it is not their in the list"}</li>
                    </ol>
                </li>
                <li>LastIndexof():{this.state.array.lastIndexOf("hellow")}</li>
                <li>sort():{this.state.arr2.sort().join(",")}</li>
                <li>push():{this.state.arr2.push(34)}{this.state.arr2.join(",")}</li>
                <li>pop():{this.state.arr2.pop()}  {this.state.arr2.join(",")}</li>
                <li>slice():{this.state.arr2.slice(1,4).join(',')}</li>
                <li>{this.state.arr2.join(",")}</li>
                <li>{this.state.arr2.splice(2,6).join(",")}</li>
                <li>splice():{this.state.arr2.splice(2,4).join(",")}</li>
                    {"this indicates the starting index and then the number of the items that are return from the specifed index"}
                <li>{this.state.arr2.join(",")}</li>
                <li>find():{this.state.arr2.some(e=> e%2==0(
                )
                )}</li>
                <li>findIndex()</li>
                <li>every()</li>
                <li>reverse()</li>
                <li>shift()</li>
                <li>concate()</li>
                <li>fill()</li>
                <li>filter()</li>
                <li>copywithin()</li>
                <li>includes()</li>
               
                <li>forEach()</li>
                <li>reduce()</li>
                <li>reduseright()</li>
                <li>reduseleft()</li>
                <li>flat()</li>
                <li>flatMap()</li>
                <li>keys()</li>
                <li>values()</li>
                <li>Entries()</li>
                <li>map()</li>
                </ol>
            </div>
        )
    }
}
export default Array