import React, { Component } from 'react'

export default class Curd_aplication extends Component {
  constructor(props){
    super(props)
    this.state={
      user:{
        name:"",contact:"",age:"",gender:"",fatherName:"",motherName:"",email:"",password:""
      },
      userData:[]
    }
  }
  onChangeEventHandling=(e)=>{
    console.log(e.target.name)
    var inputChange={...this.state.user}
    inputChange[e.target.name]=e.target.value
    this.setState({
      user:inputChange
    })
  }

  onSubmit=(event)=>{
    event.preventDefault()
    console.log(this.state)
    const onSubmit=[...this.state.userData]
    onSubmit.push(this.state.user)
    this.setState({
      userData:onSubmit
    })
    console.log(this.state.userData)
    this.clearForm()
  }

  clearForm=()=>{
    let inputChange={...this.state.user}
    inputChange={
      name:"",contact:"",age:"",gender:"",fatherName:"",motherName:"",email:"",password:""
  }
  this.setState({user:inputChange})
  }


  editIndex=null
  deletButton=(i)=>{
    console.log(i)
    // const neWPerson=this.state.userData.filter((obj,index)=>{
    //   return index !==i
    // })
    // this.setState({userData:neWPerson})
    const newPerson=[...this.state.userData]
    newPerson.splice(i,1)
    this.setState({ userData:newPerson})
  }

  editButton=(val,i)=>{
    console.log(i)
    this.setState({editIndex:i,user:val})
  }

  updateUser = () => {
    const newPersons = [...this.state.user];
    newPersons[this.state.editIndex] = this.state.user;
    this.setState({ persons: newPersons, editIndex: null });
    this.clearForm()
  };

  render() {
    return (
      <div>
        <div className='divdata1'>
        <form >
        <h2>Registration Form</h2>
          <label htmlFor="name">Name:</label><br />
          <input type="text" 
          id="name" 
          value={this.state.user.name}
         onChange={this.onChangeEventHandling}
         name="name" required /><br /><br />

          <label htmlFor="contact">Contact Number:</label><br />
          <input type="tel" 
          id="contact" 
          value={this.state.user.contact}
          onChange={this.onChangeEventHandling}
          name="contact" required /><br /><br />

          <label htmlFor="age">Age:</label><br />
          <input type="number" 
          id="age" 
          value={this.state.user.age}
          onChange={this.onChangeEventHandling}
          name="age" /><br /><br />

          <label>Gender:</label><br />
          <input type="radio" 
          id="male" 
          value="male"
          onChange={this.onChangeEventHandling}
          checked={this.state.user.gender === 'male'}
          name="gender"
          /> Male <br />
          <input type="radio" 
          id="female" 
          value="female"
          onChange={this.onChangeEventHandling}
          checked={this.state.user.gender === 'female'}
          name="gender" 
          />Female <br /><br />

          <label htmlFor="fatherName">Father's Name:</label><br />
          <input type="text" 
          id="fatherName" 
          value={this.state.user.fatherName}
          onChange={this.onChangeEventHandling}
          name="fatherName" required /><br /><br />

          <label htmlFor="motherName">Mother's Name:</label><br />
          <input type="text" 
          id="motherName" 
          value={this.state.user.motherName}
          onChange={this.onChangeEventHandling}
          name="motherName" required /><br /><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" 
          id="email" 
          value={this.state.user.email}
          onChange={this.onChangeEventHandling}
          name="email" required /><br /><br />

          <label htmlFor="password">Password:</label><br />
          <input type="password" 
          id="password" 
          value={this.state.user.password}
          onChange={this.onChangeEventHandling}
          name="password" required /><br /><br />
          <button type="submit" onClick={this.onSubmit}>Submit</button>


        </form>
        </div>
        <div className='divdata2'>
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Age</th>
              <th>Gender</th>
              <th>FatherName</th>
              <th>MotherName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete</th>
              <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map((val,i)=>{
                return (
                <tr key={i}>
                  <td>{val.name}</td>
                  <td>{val.contact}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                  <td>{val.fatherName}</td>
                  <td>{val.motherName}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>
                    <button  onClick={()=>{
                      this.deletButton(i)
                      }}>
                        Delet
                    </button>
                  </td>
                  <td>
                    <button  onClick={()=>{
                      this.editButton(val,i)}}>
                        Edit
                    </button>
                 </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
