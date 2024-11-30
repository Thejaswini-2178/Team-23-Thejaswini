import React, { Component } from 'react'

export default class Ifelse extends Component {
    render() {
        const isLoggedIn = true;
        if (isLoggedIn) {
            return <h1>Welcome, User!</h1>;
        } else {
            return <h1>Please log in.</h1>;
        }
    }
}

