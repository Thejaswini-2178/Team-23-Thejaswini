import React, { Component } from 'react'

const NewData = (OriginalComponent1) => {
    class HOCNumbers extends Component {
        constructor(props) {
            super(props)
            this.state = {
                evencount: 0,
                oddcount: 0
            }
        }
        onmouseEvenPrinter = () => {
            this.setState((countstatr) => ({
                evencount: countstatr.evencount + 2
            }))
        }
        onmouseOddPrinter = () => {
            this.setState((countfrom) => ({
                oddcount: countfrom.oddcount % 2 == 0 ? countfrom.oddcount + 1 : countfrom.oddcount + 2
            }))
        }
        evenNumbersPrinter = () => {
            this.setState((prevState) => ({
                evencount: prevState.evencount + 2,
            }));
        };
        oddNumbersPrinter = () => {
            this.setState((numberStart) => ({
                oddcount: numberStart.oddcount % 2 == 0 ? numberStart.oddcount + 1 : numberStart.oddcount + 2
            }))
        }
        render() {
            return <OriginalComponent1
                onmouseEvenPrinter={this.onmouseEvenPrinter}
                onmouseOddPrinter={this.onmouseOddPrinter}
                evenNumbersPrinter={this.evenNumbersPrinter}
                oddNumbersPrinter={this.oddNumbersPrinter}
                oddcount={this.state.oddcount}
                evencount={this.state.evencount}
            />
        }
    }
    return HOCNumbers
}
export default NewData
