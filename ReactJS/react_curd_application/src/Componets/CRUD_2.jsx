import React, { Component } from 'react';

class RegistrationForm1 extends Component {
  render() {
    return (
      <div>
        <h3>Registration Form 1</h3>
        <form>
          <div>
            <label>Full Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Date of Birth</label>
            <input type="date" />
          </div>
          <div>
            <label>Profile Picture</label>
            <input type="file" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
        </form>
      </div>
    );
  }
}