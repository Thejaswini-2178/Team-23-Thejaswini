import React, { Component } from "react";
class Primary1 extends Component{
    state={
        a:"hellow world",
        age:23,
        chech:true,
        b:45>29,
        c:"50"===50,
        d:50/10,
        e:20%10,
        f:20%15,
        g:null
    }
    render(){
        return( 
            <ul>
            <p>a={this.state.a}</p>
            <p>age={this.state.age}</p>
            <p>check={this.state.chech?"True":"false"}</p>
            <p>b={this.state.b?"True":"false"}</p>
            <p>c={this.state.c?"True":"false"}</p>
            <p>d={this.state.d}</p>
            <p>e={this.state.e}</p>
            <p>f={this.state.f}</p>
            <p>g={this.state.g?"true":"false"}</p>
            </ul>
        )
    }
}
export default Primary1


// import React, { useState } from 'react';

// const TodoList = () => {
//     const [todos, setTodos] = useState(['Learn React', 'Practice JavaScript', 'Read Documentation']);
  
//     const addTodo = (newTodo) => {
//       // Add a new item to the array using the spread operator
//       setTodos([...todos, newTodo]);
//     };
  
//     return (
//       <div>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>{todo}</li>
//           ))}
//         </ul>
//         <button onClick={() => addTodo('New Task')}>Add Task</button>
//       </div>
//     );
//   };
  
//   export default TodoList;
  