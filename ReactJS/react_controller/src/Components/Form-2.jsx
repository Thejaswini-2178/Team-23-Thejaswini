import React, { Component } from 'react'

class Form_2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //3. adding the user inputs in to an empty array  
      user: { fname: "", lname: "", mail: "", password: "" },
      data: [],
    }
  }
  
  //4.function for the handelClickSubmit
  handelClickSubmit = () => {
    console.log(this.state);              //this will dispalys the  entair state
    // 4.1 now adding this to the data
    const newUser = [...this.state.data]    // copping the content in data
    newUser.push(this.state.user)         //adding that added data of user content 
    this.setState({ data: newUser })
  }
  handleInputFieldChange = (e) => {
    cons
    ole.log(e.target.name);
    const newStateValus = { ...this.state.person };
    newStateValus[e.target.name] = e.target.value;
    this.setState({ person: newStateValus });
    // this.setState({ fname: e.target.value });
  };
  render() {
    return (
      //1. first step to create an general form
      <form>
        <label htmlFor=""> First Name</label>
        <input type="text" id="fname" name="fname" /><br />
        <label htmlFor=""> Last Name</label>
        <input type="text" id="lname" name='lname' /><br />
        <label htmlFor="">Email</label>
        <input type="mail" id="mail" name="name" /><br />
        <label htmlFor="">Password</label>
        <input type="password" id="password" name="password" /><br />
        {/* 2 we have to write th efunction to the user button*/}
        <button type="button" id="button" onClick={this.handelClickSubmit} >SUBMIT</button>
      </form>
    )
  }
}
export default Form_2
