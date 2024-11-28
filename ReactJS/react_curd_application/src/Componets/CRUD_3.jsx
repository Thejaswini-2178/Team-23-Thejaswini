import React, { Component } from 'react'

class RegistrationForm2 extends Component {
  constructor(props){
  super(props)
  this.state={
    data:{

    }
  }
  }
  render() {
    return (
      <div>
        <div className='divdata1'> 
        <form>
        <h3>Registration Form 2</h3>
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
        <div className='divdata2'>
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Password</th>
                <th>Phone Number</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default RegistrationForm2
