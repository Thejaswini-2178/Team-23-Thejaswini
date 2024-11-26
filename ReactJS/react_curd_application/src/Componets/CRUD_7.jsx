import React, { Component } from 'react'

class RegistrationForm6 extends Component {
  render() {
    return (
      <div>
        <h3>Registration Form 6</h3>
        <form>
          <div>
            <label>Enter a Color</label>
            <input type="color" />
          </div>
          <div>
            <label>Select Range</label>
            <input type="range" />
          </div>
          <div>
            <label>Preferred Contact Method</label>
            <input type="radio" name="contact" value="email" /> Email
            <input type="radio" name="contact" value="phone" /> Phone
          </div>
          <div>
            <label>Start Time</label>
            <input type="time" />
          </div>
        </form>
      </div>
    );
  }
}