import React, { Component } from "react";
import NewData from "./HOC_Numbers";

class NumberCount extends Component {

  render() {
    const {evencount,oddcount,evenNumbersPrinter,oddNumbersPrinter}= this.props
    return (
      <div>
        <hr />
        <h1>Printing the Even and odd through onclick events Numbers</h1>
        <button onClick={this.props.evenNumbersPrinter}>Even Numbers</button>
        <p>The next even number is: {evencount}</p>
        <button onClick={this.props.oddNumbersPrinter}>Odd Numbers</button>
        <p>The next odd number is: {oddcount}</p>
      </div>
    );
  }
}

export default NewData(NumberCount);
