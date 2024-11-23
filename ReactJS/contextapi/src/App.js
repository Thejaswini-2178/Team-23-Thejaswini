import React, { Component } from "react";
import Parent from "./FOLDER/Propes drillermethod/Parent";
import Ansistor from "./FOLDER/Propes drillermethod/Ansistor";

class App extends Component {
  render() {
    const namesCollection = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Alice" },
      { id: 4, name: "Bob" },
      { id: 5, name: "Charlie" },
    ];
    return (
      <div>
        <h1>Props Drilling Example</h1>
        <Parent names={namesCollection} />
        <Ansistor names={namesCollection}/>
      </div>
    );
  }
}
export default App;

// import React, { Component } from "react";
// import { NameProvider } from "./FOLDER/Contextt API/NameContext";
// import Parent from "./FOLDER/Contextt API/Parent";

// class App extends Component {
//   render() {
//     const namesCollection = [
//       { id: 1, name: "John" },
//       { id: 2, name: "Jane" },
//       { id: 3, name: "Alice" },
//       { id: 4, name: "Bob" },
//       { id: 5, name: "Charlie" },
//     ];

//     return (
//       <NameProvider value={namesCollection}>
//         <div>
//           <h1>Context API Example</h1>
//           <Parent />
//         </div>
//       </NameProvider>
//     );
//   }
// }

// export default App;
