import React, { Component } from 'react'

export default class Logical extends Component {
        render() {
          const isLoggedIn = true;
          return isLoggedIn ? <h1>Welcome, User!</h1> : <h1>Please log in.</h1>;
        }
      }
      
