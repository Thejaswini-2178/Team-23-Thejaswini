import React, { Component } from "react"
class Arraymethod extends  Component{
    state={
        a1:[1,2,3,4,5,6,7,8,9,35,5,5,6,7],
        a2:["red","blue","green","vilet","greeen","yellow","purple","orange"],
        a3:[1,2,3,["apple","banana"]]
    }
    render(){
        return (
            <div>
                <h1>Array Methods</h1>
                <ol>
                <li>Length()</li>
                <li>Indexof()</li>
                <li>LastIndexof()</li>
                <li>sort()</li>
                <li>push()</li>
                <li>pop()</li>
                <li>slice()</li>
                <li>splice()</li>
                <li>some()</li>
                <li>find()</li>
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
                <li>map()</li>
            </ol>
            <div>
            <ol>
                <li>Length:{this.state.a1.length}</li>
                <li>Indexof:{this.state.a1.indexOf(4)}</li>
                <li>LastIndexof: {this.state.a1.lastIndexOf(5)}</li>
                <li>sort:{this.state.a1.sort().join(",")}</li>
                <li>push:{this.state.a1.push(21)}</li>
                <li>pop:{this.state.a1.pop()}</li>
                <li>slice:{this.state.a1.slice(1,8).join(",")}</li>
                <li>splice:{this.state.a1.splice(2,4).join(",")}</li>
                <li>some:{this.state.a1.some(n=>n>1)?"true":"false"}</li>
                <li>now the array:{this.state.a1.join(",")}</li>
                <li>find: {this.state.a1.find(n=> n%4===0)}</li>
                <li>findIndex:{this.state.a1.findIndex(m=> m%2===0)}</li>
                <li>every:{this.state.a1.every(e=> e>=1)?"True":"false"}</li>
                <li>reverse:{this.state.a1.reverse().join(",")}</li>
                <li>shift:{this.state.a1.shift()}</li>
                <li>concate: {this.state.a1.concat([1,2,3,4]).join(", ")}</li>
                <li>fill: {this.state.a1.fill("2").join(",")}</li>
                <li>filter:{this.state.a1.filter(e=> e%2===0).join(",")}</li>
                <li>copywithin:{this.state.a2.join(",")}</li>
                <li>copywithin:{this.state.a2.copyWithin(1,3).join(",")}</li>
                {<li>copywithin:{this.state.a2.copyWithin(3,1,2).join(",")}</li> /* (n-1)   */}
                <li>includes:{this.state.a2.includes("pink")?"true":"false"}</li>
                <li>ForEachinsted of this we can use the  map function bcz for each in react js connot return the any value:
                   <ul>
                    <li>
                    {this.state.a2.map((e)=>{
                        return <li>{e}</li>
                    })}
                    </li>
                   </ul>
                </li>
                

                <li>reduce:{this.state.a2.reduce(e=> 2*3*6)}</li>
                { <li>reduseright:{this.state.a2.reduceRight((a,b)=>a+b)}</li> /* it does not support the join methio*/}
                <li>flat:{this.state.a3.flat(e=> e).join(",")}</li>
                <li>flat:{this.state.a3.flat(Infinity).join(",")}</li>
                <li>flatMap:{this.state.a3.flatMap(e=> e)}</li>
                <li>map:{this.state.a1.map(e=> e).join(",")}</li>

                <li>keys:{Array.from(this.state.a1.keys()).join(", ")}</li>
                <li>
                    <ul>
                    entries:{Array.from(this.state.a2.entries(e=>e).map(([index,keys])=> (
                    <li>{[index,keys].join(":")}</li>
                )))}
                    </ul>
                    </li>
            </ol>
            </div>
            </div>
        )
    }
}
export default Arraymethod