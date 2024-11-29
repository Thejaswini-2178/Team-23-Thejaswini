import React, { Component } from 'react'

 class CRUD10 extends Component {
  render() {
    return (
      <div>
      <h3>Registration Form 9</h3>
      <form>
        <div>
          <label>Enter Feedback</label>
          <textarea rows="4" />
        </div>
        <div>
          <label>Upload Supporting Documents</label>
          <input type="file" />
        </div>
        <div>
          <label>Rate Us</label>
          <input type="range" />
        </div>
        <div>
          <label>Agreement</label>
          <input type="checkbox" /> I agree to terms.
        </div>
      </form>
    </div>
    )
  }
}

export default CRUD10
