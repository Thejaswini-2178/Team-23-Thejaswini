import React, { Component } from 'react'

class RegistrationForm5 extends Component {
  render() {
    return (
      <div>
        <h3>Registration Form 5</h3>
        <form>
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>PIN Code</label>
            <input type="number" />
          </div>
          <div>
            <label>Accept Terms</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Choose a Date</label>
            <input type="date" />
          </div>
        </form>
      </div>
    );
  }
}
