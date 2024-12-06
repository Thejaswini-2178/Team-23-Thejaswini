import React, { Component } from 'react';

class RegistrationForm1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 2 To attach the data to state to make it make it controlle comonent
      list: {
        name: "", dob: "", gender: "", mail: ""
      },
      data: []
    }
  }
  // 3 adding onchangeevent to the input fileld 
  // 4 writing the function to the onchange evenyt
  handelChangeEvent = (e) => {
    console.log(e.target.name)
    const inputChange = { ...this.state.list }
    inputChange[e.target.name] = e.target.value
    this.setState({
      list: inputChange
    })
  }
  // 5 now adding  function to the submit to the 
  regesterForm = (event) => {
    const submitForm = [...this.state.data]
    submitForm.push(this.state.list)
    this.setState({
      data: submitForm
    })
    console.log(this.state)
    this.clearForm()
  }
  // 8.for auto deleting the form data in form after completion of entering 
  clearForm = () => {
    let clrData = { ...this.state.list }
    clrData = {
      name: "", dob: "", gender: "", mail: ""
    }
    this.setState({
      list: clrData
    })
  }
  editIndex = null
  // 9.delet button function
  handelDeletButton = (i) => {
    console.log(i)
    const editData = [...this.state.data]
    editData.splice(i, 1)
    this.setState({
      data: editData
    })
  }
  // 10 edit function
  handelEditButton = (val, i) => {
    console.log(i)
    this.setState({ editIndex: i, list: val })
  }

  // 12.update function
  updateButton = () => {
    const deletData = [...this.state.data]
    deletData[this.state.editIndex] = this.state.list
    this.setState({ data: deletData, editIndex: null })
    this.clearForm()
  }

  render() {
    return (
      <div>
        {/*1. create a form*/}
        <div className='divdata1'>
          <form>
            <h3>Registration Form 1</h3>
            <div>
              <label>Full Name</label>
              <input type="text" name="name" value={this.state.list.name} onChange={this.handelChangeEvent} />
            </div>

            <div>
              <label>Date of Birth</label>
              <input type="date" name="dob" value={this.state.list.dob} onChange={this.handelChangeEvent} />
            </div>
            <div>
              <label>Gender</label>
              <input type="radio" name="gender" value="male" onChange={this.handelChangeEvent} checked={this.state.list.gender === "male"} />Male
              <input type="radio" name="gender" value="female" onChange={this.handelChangeEvent} checked={this.state.list.gender === "female"} />Female
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="mail" value={this.state.list.mail} onChange={this.handelChangeEvent} />
            </div>
            <div>
              {/* 11 by using the conditional rendering we are using the register and update as toggel */}
              {this.state.editIndex != null ? (
                <button type='button' onClick={this.updateButton}>Update</button>
              ) : (
                <button type='button' onClick={this.regesterForm}>Register</button>
              )}
            </div>
          </form>
        </div>
        <div className='divdata2'>
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Email</th>
                {/* 6. adding the edit button and delet button */}
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            {/* 7. Adding the button for the edit and deleting the data in the for every aded dat in th etable */}
            <tbody>
              {this.state.data.map((val, i) => {
                return (
                  <tr key={i}>
                    <td>{val.name}</td>
                    <td>{val.dob}</td>
                    <td>{val.gender}</td>
                    <td>{val.mail}</td>
                    <td>
                      <button type='button'
                        onClick={() => {
                          this.handelEditButton(val, i)
                        }}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type='button'
                        onClick={() => {
                          this.handelDeletButton(i)
                        }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RegistrationForm1