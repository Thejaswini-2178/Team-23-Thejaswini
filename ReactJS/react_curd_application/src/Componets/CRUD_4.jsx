import React, { Component } from 'react'

class RegistrationForm3 extends Component {
  constructor(props){
    super(props)
    this.state={
     user:{
      fname:"",lname:"",gender:"",url:""
    },
    data:[]
    }
  }
  onChangeEvent=(e)=>{
    console.log(e.target.name)
    const event={...this.state.user}
    event[e.target.name]=e.target.value
    this.setState({
      user:event
    })
  }
  submitButton=()=>{
    console.log(this.state)
    const submitData=[...this.state.data]
    submitData.push(this.state.user)
    this.setState({
      data:submitData
    })
    this.clearForm()
  }
  editIndex=null
  editButtonEvent=((val,i)=>{
    console.log(i)
    this.setState({editIndex:i,user:val})
  })
  deleteButtonEvent=(i)=>{
    console.log(i)
    const delbtn=[...this.state.data]
    delbtn.splice(i,1)
    this.setState({
      data:delbtn
    })
    this.clearForm()
  }

  updateButtonEvent=()=>{
    const updateUser=[...this.state.data]
    updateUser[this.state.editIndex]=this.state.user
    this.setState({
      data:updateUser,editIndex:null
    })
    this.clearForm()
  }
  clearForm=()=>{
    let clear={...this.state.user}
    clear={
      fname:"",lname:"",gender:"",url:""
    }
  this.setState({user:clear})
  }

  render() {
    return (
      <div>
        <div className="divdata1">
        <form>
        <h3>Registration Form 3</h3>
          <div>
            <label>First Name</label>
            <input type="text"
            name='fname'
            value={this.state.user.fname}
            onChange={this.onChangeEvent} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text"
            name='lname'
            value={this.state.user.lname}
            onChange={this.onChangeEvent}  />
          </div>
          <div>
            <label>Gender</label>
            <select
            name='gender'
            onChange={this.onChangeEvent} >
              <option value="">Select..</option>
              <option  name="male"   value="male">Male</option>
              <option  name="female" value="female">Female</option>
              <option  name="others" value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Website</label>
            <input type="url" 
            name='url'
            value={this.state.user.url}
            onChange={this.onChangeEvent} />
          </div>
          <div>
            {this.state.editIndex!=null?(
              <button type='button' onClick={this.updateButtonEvent}>Update</button>
            ):(
              <button type='button' onClick={this.submitButton}>Regiser</button>
            )}
           
          </div>
        </form>
        </div>
        <div className="divdata2">
          <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Website</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((val,i)=>{
                return (
                  <tr key={i}>
                    <td>{val.fname}</td>
                    <td>{val.lname}</td>
                    <td>{val.gender}</td>
                    <td>{val.url}</td>
                    <td><button type='button' onClick={()=>{
                      this.editButtonEvent(val,i)
                    }}>Edit</button></td>
                    <td><button type='button' onClick={()=>{
                      this.deleteButtonEvent(i)
                    }}>Delete</button></td>
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
export default RegistrationForm3
