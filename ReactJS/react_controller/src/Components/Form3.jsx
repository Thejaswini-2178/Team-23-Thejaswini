import React, { Component } from 'react'

class Form3 extends Component {
  constructor(props){
    super(props)
    this.state={
      user:{
         fname:"",mail:"",password:"",phone:"",DOB:""
      },
      data:[]
    }
  }
  handelInputChange=(e)=>{
  console.log(e.target.name)
  
   const inputChange={...this.state.user}     //copping this data in hallow in a variabele
   inputChange[e.target.name]=e.target.value //updated this
   this.setState({
    user:inputChange
   })
  }

  handelSubmit=(event)=>{
    event.preventDefault()
    console.log(this.state)
    const newUser=[...this.state.data]
    newUser.push(this.state.user)
    this.setState({data:newUser})
    this.handelClear();
  }

  handelClear=()=>{
    this.setState({
   user:{
    fname:"",
    mail:"",
    password:"",
    phone:"",
    DOB:""
   }
    })
  }

  render() {
    return (
      <div>
        <form>
            <label htmlFor="">Name</label>
            <input type="text" 
            name="fname"
            value={this.state.user.fname} 
            onChange={this.handelInputChange}
            />
            <label htmlFor="">Email</label>
            <input type="text"
            name="mail" 
            value={this.state.user.mail} 
            onChange={this.handelInputChange}
            />
            <label htmlFor="">Password</label>
            <input type="password" 
            name="password"
            value={this.state.user.password}
            onChange={this.handelInputChange}
            />
            <label htmlFor="">Contact</label>
            <input type="tel" 
            name="phone"
            value={this.state.user.phone} 
            onChange={this.handelInputChange}
            />
            <label htmlFor="">DOB</label>
            <input type="date" 
            name="DOB"
            value={this.state.user.DOB} 
            onChange={this.handelInputChange}
            />
            <button onClick={this.handelSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default Form3
