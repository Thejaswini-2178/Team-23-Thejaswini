import React, { Component } from 'react'

class Form_2  extends Component {
    constructor(props){
        super(props)
        this.state={
          user:{fname:"",lname:"",}

        }
    }
  render() {
    return (
      //1. first step to create an general form
      <form>
        <label htmlFor=""> First Name</label>
        <input type="text" id="fname" name="fname"/><br />
        <label htmlFor=""> Last Name</label>
        <input type="text" id="lname" name='lname'/><br />
        <label htmlFor="">Email</label>
        <input type="mail" id="mail" name="name"/><br />
        <label htmlFor="">Password</label>
        <input type="password" id="password" name="password"/><br/>
        <button type="button" id="button">SUBMIT</button>
      </form>
    )
  }
}
export default Form_2
