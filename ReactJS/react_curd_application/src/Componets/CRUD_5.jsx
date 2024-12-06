import React, { Component } from 'react';

class CRUD_5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        state: "",
        dist: "",
        city: "",
      },
      datalis: [],
    };
  }

  onChangeEvent = (e) => {
    const inputChange = { ...this.state.user };
    inputChange[e.target.name] = e.target.value;
    this.setState({
      user: inputChange,
    });
  };

  editIndex = null;

  submitDataEvent = (event) => {
    event.preventDefault();
    const submitData = [...this.state.datalis];
    submitData.push(this.state.user);
    this.setState({
      datalis: submitData,
    });
    this.clearForm();
  };

  editDataUser = (val, i) => {
    this.setState({
      editIndex: i,
      user: val,
    });
  };

  deleteUser = (i) => {
    const deleteData = [...this.state.datalis];
    deleteData.splice(i, 1);
    this.setState({
      datalis: deleteData,
    });
  };

  clearForm = () => {
    this.setState({
      user: {
        state: "",
        dist: "",
        city: "",
      },
    });
  };

  UpdateDataEvent = () => {
    const update = [...this.state.datalis];
    update[this.state.editIndex] = this.state.user;
    this.setState({
      datalis: update,
      editIndex: null,
    });
    this.clearForm();
  };

  render() {
    return (
      <div>
        <div className="divdata1">
          <form>
            <h1>Registration Form</h1>
            <div>
              <label>State</label>
              <select
                name="state"
                value={this.state.user.state}
                onChange={this.onChangeEvent}
              >
                <option value="">Select...</option>
                <option value="andhra">Andhra</option>
                <option value="telengana">Telangana</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
              </select>
            </div>
            <div>
              <label>District</label>
              <select
                name="dist"
                value={this.state.user.dist}
                onChange={this.onChangeEvent}
              >
                <option value="">Select...</option>
                <option value="chittor">Chittor</option>
                <option value="karnul">Karnul</option>
                <option value="nellor">Nellor</option>
                <option value="kadapa">Kadapa</option>
              </select>
            </div>
            <div>
              <label>City</label>
              <select
                name="city"
                value={this.state.user.city}
                onChange={this.onChangeEvent}
              >
                <option value="">Select...</option>
                <option value="chittor">Chittor</option>
                <option value="karnul">Karnul</option>
                <option value="nellor">Nellor</option>
                <option value="kadapa">Kadapa</option>
              </select>
            </div>
            <div>
              {this.state.editIndex != null ? (
                <button type="button" onClick={this.UpdateDataEvent}>
                  Update
                </button>
              ) : (
                <button type="button" onClick={this.submitDataEvent}>
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="divdata2">
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>State</th>
                <th>District</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.datalis.map((val, i) => (
                <tr key={i}>
                  <td>{val.state}</td>
                  <td>{val.dist}</td>
                  <td>{val.city}</td>
                  <td>
                    <button onClick={() => this.editDataUser(val, i)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => this.deleteUser(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CRUD_5;
