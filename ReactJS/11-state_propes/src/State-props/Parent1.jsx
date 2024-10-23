import { Component } from "react";
import { Child1 } from "./Child1"

class Parent1 extends Component {
    constructor() {
        super();
        this.state = {
            string: "hellow world this is string",
            array1: ["hema", "manasa", 1, 2, 3, "madhu"],
            person: {
                name: "Haseena",
                age: 23,
                hobbies: "playing",
                address: "AP"
            }
        }
    }
    render() {
        return (
            <div>
                <ul>
                    <h2>This is string passing</h2>
                    <li>{this.state.string}</li>
                    <h2>this is the array passing</h2>
                    {this.state.array1.map(function (e) {
                        return <li>{e}</li>
                    })}
                </ul>
                <ul>
                    <h3>This is the object passing</h3>
                {Object.entries(this.state.person).map(([key, value], index) => (
                    <li key={index}>
                        {key}: {value}
                    </li>
                    ))}

                </ul>
                <Child1 message={this.state.string} array1={this.state.array1} object={this.state.person} />
            </div>
        )
    }
}
export default Parent1;