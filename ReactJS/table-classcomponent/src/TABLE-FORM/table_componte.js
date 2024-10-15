import React, { Component }  from "react"
 class Table extends Component{
    render(){
        return <table border={1}>
            <thead>
                <tr>
                    <th>week</th>
                    <th>5:00</th>
                    <th>7:8</th>
                    <th>2:30-5</th>
                    <th>6-8</th>
                    <th>9-11</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Daily</td>
                    <td>pending topic and revisioning</td>
                    <td>aptitude or reading</td>
                    <td>class,notes and all revisioning</td>
                    <td>recalling and pending works</td>
                    <td>Projects</td>
                </tr>
            </tbody>
        </table>
    }
 }
 export default Table

