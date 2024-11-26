import React, { Component } from 'react'

class RegistrationForm2 extends Component {
  render() {
    return (
      <div>
        <h3>Registration Form 2</h3>
        <form>
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="tel" />
          </div>
          <div>
            <label>Age</label>
            <input type="number" />
          </div>
        </form>
      </div>
    );
  }
}
