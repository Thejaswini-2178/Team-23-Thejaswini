import React, { Component } from 'react'

class RegistrationForm3 extends Component {
  render() {
    return (
      <div>
        <h3>Registration Form 3</h3>
        <form>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Gender</label>
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Website</label>
            <input type="url" />
          </div>
        </form>
      </div>
    );
  }
}
