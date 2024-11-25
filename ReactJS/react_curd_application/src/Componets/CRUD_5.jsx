import React, { Component } from 'react'

class RegistrationForm4 extends Component {
    render() {
      return (
        <div>
          <h3>Registration Form 4</h3>
          <form>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Upload Resume</label>
              <input type="file" />
            </div>
            <div>
              <label>Available for Full-time</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>Preferred Time</label>
              <input type="time" />
            </div>
          </form>
        </div>
      );
    }
  }
