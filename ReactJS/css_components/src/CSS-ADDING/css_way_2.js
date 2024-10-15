import React, { Component } from "react"
class Css2 extends Component{
    render(){
        return <div>
            <h1>Headding</h1>
            <h1>CSS CAN BE DONE AT ANY WAYS BUT IT SHOLUD AT ONLY ONE WAY AT A TIME</h1>
            <ul>
                <li>TYPES</li>
                <li>inde.css</li>
                <li>app.css</li>
                <li>can be created separatly in our folder</li>
            </ul>
            <table border={2} cellSpacing={0}> 
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                    </tr>
                    <tr>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                    </tr>
                </thead>
            </table>
            <form>
                <label>Input field:</label>
                <input type="text"/>
            </form>
        </div>
    }
}
export default  Css2