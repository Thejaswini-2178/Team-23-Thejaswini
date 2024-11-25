import React, { Component } from 'react'

class RegistrationForm8 extends Component {
    render() {
      return (
        <div>
          <h3>Registration Form 8</h3>
          <form>
            <div>
              <label>Full Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Start Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Experience Level</label>
              <select>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
          </form>
        </div>
      );
    }
  }
