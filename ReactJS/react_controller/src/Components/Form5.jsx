import React, { Component } from 'react'

export class Form5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                fname: "", email: "", phone: "", password: "", confirmPassword: ""
            },
            userData: []
        }
    }
    onChangeEvent = (e) => {
        console.log(e.target.name)
        // coping the data
        var addData = { ...this.state.data }
        // updating th edata
        addData[e.target.name] = e.target.value
        this.setState({
            data: addData
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        console.log(this.state)
        // opping the data
        var submittedData = [...this.state.userData]
        submittedData.push(this.state.data)
        this.setState({
            userData: submittedData
        })
        this.clearForm()
    }
    

    clearForm = () => {
        let formData={...this.state.userData}
        this.setState = {
            data: {
                fname: "", email: "", phone: "", password: "", confirmPassword: ""
            },
        }
        this.setState({data:formData})
    }
    render() {
        return (
            <div>
                <form>
                    <div style={{ marginBottom: 15 }}>
                        <label htmlFor="name">Name:</label>
                        <input type="text"
                            id="fname"
                            name="fname"
                            value={this.state.data.fnamename}
                            onChange={this.onChangeEvent}
                            style={{ width: '100%', padding: 8, marginTop: 5 }} />

                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email"
                            name="email"
                            value={this.state.data.email}
                            onChange={this.onChangeEvent}
                            style={{ width: '100%', padding: 8, marginTop: 5 }} />
                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone"
                            value={this.state.data.phone}
                            name="phone"
                            onChange={this.onChangeEvent}
                            style={{ width: '100%', padding: 8, marginTop: 5 }} />
                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password"
                            name="password"
                            value={this.state.data.password}
                            style={{ width: '100%', padding: 8, marginTop: 5 }}
                            onChange={this.onChangeEvent}
                        />
                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword"
                            name="confirmPassword"
                            value={this.state.data.confirmPassword}
                            style={{ width: '100%', padding: 8, marginTop: 5 }}
                            onChange={this.onChangeEvent}
                        />
                    </div>
                    <button type="submit"
                        onClick={this.submitForm}
                        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
                        Register
                    </button>
                </form>
                <ul>
                    {this.state.userData.map((val, index) => (
                        <li key={index}>
                            Name: {val.fname} Email: {val.email}, Phone: {val.phone}, Password: {val.password}, Confirm Password: {val.confirmPassword}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Form5