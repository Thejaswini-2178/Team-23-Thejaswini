import React, { Component } from 'react'

class Curd_aplication extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                uname:"",contact:"",mail:"",password:"",
            },

        }
    }
    handelChange=()=>{
        console.log(e.target.name);
        const newPerson={...this.state.user};
        newPerson[e.target.name]=e.target.value;
        this.setState({user:newPerson})
    };

    registerUser=()=>{
        console.log(e.target.name)
        const newPerson=[...this.state.user]
        newPerson.push(this.state.user)
        this.setState({user:newPerson})
    }
    clearForm=()=>{
        let newPerson={...this.state.user}
        newPerson={
            uname:"",
            contact:"",
            mail:"",
            password:""
        }
        this.setState({user:newPerson}    
        )
    }
    handleDelete = (i) => {
        console.log(i);
        // const newPersons = this.state.persons.filter((obj,index)=>{
        //     return index !== i
        // })
        // this.setState({persons :newPersons })
    
        const newPersons = [...this.state.persons];
        newPersons.splice(i, 1);
        this.setState({ persons: newPersons });
      };
    
      handleEdit = (per, i) => {
        this.setState({ editIndex: i, person: per });
      };
    
      updateUser = () => {
        const newPersons = [...this.state.persons];
        newPersons[this.state.editIndex] = this.state.person;
        this.setState({ persons: newPersons, editIndex: null });
        this.clearForm()
      };
      handleDelete = (i) => {
        console.log(i);
        // const newPersons = this.state.persons.filter((obj,index)=>{
        //     return index !== i
        // })
        // this.setState({persons :newPersons })
    
        const newPersons = [...this.state.persons];
        newPersons.splice(i, 1);
        this.setState({ persons: newPersons });
      };
    
      handleEdit = (per, i) => {
        this.setState({ editIndex: i, person: per });
      };
    
      updateUser = () => {
        const newPersons = [...this.state.persons];
        newPersons[this.state.editIndex] = this.state.person;
        this.setState({ persons: newPersons, editIndex: null });
        this.clearForm()
      };
  render() {
    return (
      <div>
        <div className="form">
        <form>
            <div><label htmlFor="">UserName</label></div>
            <div><input type="text" name="uname"  value="uname" onChange={this.handelChange}/></div>
            <div><label htmlFor="">Contact</label></div>
            <div><input type="tel" name="contact" value="contact" onChange={this.handelChange}/></div>
            <div><label htmlFor="">Email</label></div>
            <div><input type="mail" name="mail" value="mail" onChange={this.handelChange}/></div>
            <div><label htmlFor="">Password</label></div>
            <div><input type="password" name="password" value="password" onChange={this.handelChange}/></div>
        </form>
        </div>

        <div className="table">
            <table border={"1"}  cellSpacing={"0"}  cellPadding={"10"}>
                <thead>
                    <th>UserName</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Password</th>
                </thead>
                <tbodey> 
                </tbodey>
            </table>
        </div>
      </div>
    )
  }
}
export default Curd_aplication 
