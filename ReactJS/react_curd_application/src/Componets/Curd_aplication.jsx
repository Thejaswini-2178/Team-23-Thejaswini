import React, { Component } from 'react'

class Curd_aplication extends Component {
    constructor(props){
        super(props)
        
    }
  render() {
    return (
      <div>
        <div className="form">
        <form>
            <div><label htmlFor="">UserName</label></div>
            <div><input type="text" name="uname"  value="uname"/></div>
            <div><label htmlFor="">Contact</label></div>
            <div><input type="tel" name="contact" /></div>
            <div><label htmlFor="">Email</label></div>
            <div><input type="mail" name="mail" /></div>
            <div><label htmlFor="">Password</label></div>
            <div><input type="password" name="password" /></div>
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
