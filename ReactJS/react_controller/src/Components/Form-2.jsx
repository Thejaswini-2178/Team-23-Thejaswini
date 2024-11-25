import React, { Component } from 'react'

class Form_2 extends Component {
  // 2.add the constructor
  constructor(props){
    super(props)
    this.state={
    // 3.attach the user data in state to convert this form into controle component
      user:
      {
        fname:"",lname:"",mail:"",password:""
      },
      // 9. creating an empty array
      personData:[]
    }
  }

  // 6. function for the onchange event // the event it self pass an parameter  //any time if you chang the value it will targeting that event along with the value
  handelInputChange=(e)=>{
     console.log(e.target.name);
    //6.1 copping this in onother variable
    const newStateValues={...this.state.user};
    newStateValues[e.target.name]=e.target.value;
    this.setState({user:newStateValues})  
  }

  // 8.function for sub,itting the data
  handelSubmit=(event)=>{
    event.preventDefault()
    console.log(this.state)
    const newUsers=[...this.state.personData];
    newUsers.push(this.state.user);
    this.setState({users:newUsers});
  }

  
  render() {
    return (
      // 1.let write the html for the form 
      <div>
        <form>
          <label htmlFor="">FirstName</label>
          <input type="text" 
          name='fname'
          // 4. now assign the sate property  as a value of the input elememt .....the input is not works untill we add an on chanegeevent
          value={this.state.fname} 
          // 5. making this input changing we are attaching the onchangeevent
          onChange={this.handelInputChange} 
          />
          <label htmlFor="">LastName</label>
          <input type="text"
          name='lname'
          value={this.state.lname} 
          onChange={this.handelInputChange}
          />
          <label htmlFor="">Email</label>
          <input type="text"
          name='mail'
          value={this.state.mail} 
          onChange={this.handelInputChange}      
          />
          <label htmlFor="">Password</label>
          <input type="text"
          name='password'
          value={this.state.password} 
          onChange={this.handelInputChange}
          />
          
          {/* 7. submit button with onclik event */}
          <button onClick={this.handelSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default Form_2
