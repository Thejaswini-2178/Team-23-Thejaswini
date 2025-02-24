import React, { Component } from 'react'
import NewData from './HOC_Numbers'

class NumbersCount1 extends Component {

  render() {
    const {oddcount,evencount,evenNumbersPrinter,oddNumbersPrinter}= this.props
    return (
      <div>
        <h1>This is the mouse hover even and odd numbers printer </h1>
        <button onMouseOver={this.props.onmouseEvenPrinter}>Even numbers</button>
        <p>The next even number is:{evencount}</p>
        <button onMouseOver={this.props.onmouseOddPrinter}>odd numbers</button>
        <p>The next even number is:{oddcount}</p>
      </div>
    )
  }
}

export default NewData(NumbersCount1)
