import React, { Component } from 'react'

class RegistrationForm4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        mail: "", file: "", available: "", time: ""
      },
      data: []
    }
  }
  editIndex = null
  inputChange = (e) => {
    console.log(e.target.name)
    const inputChange = { ...this.state.user }
    inputChange[e.target.name] = e.target.value
    this.setState({
      user: inputChange
    })
  }
  registerForm = (event) => {
    console.log(this.state)
    const submitData = [...this.state.data]
    submitData.push(this.state.user)
    this.setState({
      data: submitData
    })
    this.clearForm()
  }

  clearForm = () => {
    var clearData = { ...this.state.user }
    clearData = {
      mail: "", file: "", available: "", time: ""
    }
    this.setState({
      user: clearData
    })
  }


  editButton = ((val, i) => {
    console.log(i)
    this.setState({
      editIndex: i, data: val
    })
  })

  deleteBut = (i) => {
    console.log(i)
    const deleteData = [...this.state.data]
    deleteData.splice(i, 1)
    this.setState({
      data: deleteData
    })
  }

  updateFormEvent = () => {
    const updateData = [...this.state.data]
    updateData[this.state.editIndex] = this.state.user
    this.setState({
      data: updateData, editIndex: null
    })
    this.clearForm()
  }
  // updateFormEvent = () => {
  //   const updateData = [...this.state.data]; // Clone the array
  //   updateData[this.state.editIndex] = this.state.user; // Update the specific index
  //   this.setState({ data: updateData }); // Set it back as an array
  //   this.editIndex = null;
  //   this.clearForm();
  // };


  render() {
    return (
      <div>
        <div className='divdata1'>
          <form>
            <h3>Registration Form 4</h3>
            <div>
              <label>Email</label>
              <input type="email" name='mail' value={this.state.user.mail} onChange={this.inputChange} />
            </div>
            <div>
              <label>Name</label>
              <input type="text" name='file' value={this.state.user.file} onChange={this.inputChange} />
            </div>
            <div>
              <label>Available for Full-time</label>
              <input type="radio" name='available' value='Yes' onChange={this.inputChange} checked={this.state.user.available === 'Yes'} />YES
              <input type="radio" name='available' value='No' onChange={this.inputChange} checked={this.state.user.available === 'No'} />NO
            </div>
            <div>
              <label>Preferred Time</label>
              <input type="tel" name='time' value={this.state.user.time} onChange={this.inputChange} />
            </div>
            <div>
              {this.state.editIndex != null ? (<button type='button' onClick={this.updateFormEvent}>Update</button>) : (<button type='button' onClick={this.registerForm}>Register</button>)}
            </div>
          </form>
        </div>
        <div className='divdata2'>
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>Email</th>
                <th>Resume</th>
                <th>Avialablke or Not</th>
                <th>Time</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(this.state.data) && this.state.data.length > 0 ? (
                this.state.data.map((val, i) => (
                  <tr key={i}>
                    <td>{val.mail}</td>
                    <td>{val.file}</td>
                    <td>{val.available}</td>
                    <td>{val.time}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          this.editButton(val, i);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          this.deleteBut(i);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default RegistrationForm4
