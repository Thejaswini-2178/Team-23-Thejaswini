import { Component } from "react";

export class Child1 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>This is an array</h1>
                <p>{this.props.message}</p>
                <ul>
                    <h2>this is the array passing</h2>
                    {this.props.array1.map((e) => (
                        <li>{e}</li>
                    ))}
                    <h2>This is the object</h2>
                    {Object.entries(this.props.object).map(([k, v], i) => (
                    <li k={i}>
                        {k}:{v}
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}