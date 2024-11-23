import React, { Component } from 'react';

const updateData = (OriginalComponent) => {
    class Newcomponet extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            };
        }
        onclickIncriment = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        };

        onclickDecrement = () => {
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }));
        };

        onmousehoverIncrement = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        };

        onmousehoverDecriment = () => {
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }));
        };

        render() {
            return (
                <OriginalComponent
                    count={this.state.count}
                    onmousehoverIncrement={this.onmousehoverIncrement}
                    onmousehoverDecriment={this.onmousehoverDecriment}
                    onclickIncriment={this.onclickIncriment}
                    onclickDecrement={this.onclickDecrement}
                />
            );
        }
    }
    return Newcomponet;
};

export default updateData;

