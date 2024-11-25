import React, { Component } from 'react';

class Form4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                skills: [],
                domine: "",
                state: "",
                dist: ""
            },
            newList: []
        };
    }

    handelInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputChange = { ...this.state.data };

        if (type === "checkbox") {
            if (checked) {
                inputChange[name] = [...(inputChange[name] || []), value];
            } else {
                inputChange[name] = (inputChange[name] || []).filter((item) => item !== value);
            }
        } else {
            inputChange[name] = value;
        }

        this.setState({ data: inputChange });
    };

    submitForm = (event) => {
        console.log("Submitted Data:", this.state.data);

        event.preventDefault();
        const newData = [...this.state.newList];
        newData.push(this.state.data);
        this.setState({
            newList: newData,
            data: { skills: [], domine: "", state: "", dist: "" } // Reset form
        });
    };

    render() {
        return (
            <div>
                <form>
                    <label>Skills</label><br />
                    <input type="checkbox" name="skills" value="HTML" onChange={this.handelInputChange} /> HTML
                    <input type="checkbox" name="skills" value="CSS" onChange={this.handelInputChange} /> CSS
                    <input type="checkbox" name="skills" value="JS" onChange={this.handelInputChange} /> JS
                    <input type="checkbox" name="skills" value="React" onChange={this.handelInputChange} /> React <br />

                    <label>Domine</label><br />
                    <input type="radio" name="domine" value="Software" onChange={this.handelInputChange} /> Software
                    <input type="radio" name="domine" value="Hardware" onChange={this.handelInputChange} /> Hardware <br />

                    <label>State</label><br />
                    <select name="state" value={this.state.data.state} onChange={this.handelInputChange}>
                        <option value="">select..</option>
                        <option value="andhra">Andhra</option>
                        <option value="telengana">Telengana</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="kerala">Kerala</option>
                    </select><br />

                    <label>District</label><br />
                    <input
                        list="dist"
                        id="list"
                        name="dist"
                        value={this.state.data.dist}
                        onChange={this.handelInputChange}
                    />
                    <datalist id="dist">
                        <option value="chittoor">Chittoor</option>
                        <option value="ananthapur">Ananthapur</option>
                        <option value="karnool">Karnool</option>
                        <option value="kadapa">Kadapa</option>
                        <option value="nellor">Nellor</option>
                        <option value="ongole">Ongole</option>
                    </datalist>

                </form>

                <button onClick={this.submitForm}>Submit</button>
            </div>
        );
    }
}

export default Form4;
