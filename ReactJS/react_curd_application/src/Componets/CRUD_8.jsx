import React, { Component } from 'react'

class RegistrationForm7 extends Component {
  render() {
    return (
      <div>
        <h3>Registration Form 7</h3>
        <form>
          <div>
            <label>Twitter Handle</label>
            <input type="text" placeholder="@username" />
          </div>
          <div>
            <label>Upload Profile Image</label>
            <input type="file" />
          </div>
          <div>
            <label>Newsletter Subscription</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="usa">USA</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
