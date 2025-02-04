// import React from 'react'

// const ExpenseTraker_10 = () => {
//     const expenses=[discription,amount]
//   return ( 
//   <div>
//     <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>

//         <div className="mb-6">
//             <input id="expense-description" type="text" placeholder="Description"
//                 className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"/>
//             <input id="expense-amount" type="number" placeholder="Amount"
//                 className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"/>
//             <select id="expense-category" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2">
//                 <option value={Food}>Food</option>
//                 <option value={Transport}>Transport</option>
//                 <option value={Utilities}>Utilities</option>
//                 <option value={Others}>Others</option>
//             </select>
//             <button id="add-expense-btn" className="bg-blue-500 text-white px-4 py-2 rounded">Add Expense</button>
//         </div>

//         <div id="expense-list" className="bg-white shadow-lg rounded-lg p-4">
//             <h2 className="text-xl font-semibold mb-4">Expenses</h2>
//             <div id="expenses" className="space-y-4"></div>
//             <div className="text-right font-bold mt-4">Total: $<span id="total-expenses">0</span></div>
//         </div>
//     </div>
//   </div>
//   )
// }

// export default ExpenseTraker_10




// // import React, { useState } from "react";

// // const ExpenseTracker = () => {
// //   const [description, setDescription] = useState("");
// //   const [amount, setAmount] = useState("");
// //   const [category, setCategory] = useState("Food");
// //   const [expenses, setExpenses] = useState([]);

// //   const handleAddExpense = () => {
// //     if (description.trim() && amount) {
// //       const newExpense = {
// //         description,
// //         amount: parseFloat(amount),
// //         category,
// //       };
// //       setExpenses([...expenses, newExpense]);
// //       setDescription("");
// //       setAmount("");
// //       setCategory("Food");
// //     }
// //   };

// //   // const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

// //   return (
// //     <div classNameName="bg-gray-100 font-sans min-h-screen">
// //       <div classNameName="container mx-auto p-6">
// //         <h1 classNameName="text-3xl font-bold text-center mb-6">Expense Tracker</h1>

// //         {/* Add Expense Section */}
// //         <div classNameName="mb-6">
// //           <input
// //             id="expense-description"
// //             type="text"
// //             placeholder="Description"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             classNameName="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
// //           />
// //           <input
// //             id="expense-amount"
// //             type="number"
// //             placeholder="Amount"
// //             value={amount}
// //             onChange={(e) => setAmount(e.target.value)}
// //             classNameName="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
// //           />
// //           <select
// //             id="expense-category"
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             classNameName="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
// //           >
// //             <option value="Food">Food</option>
// //             <option value="Transport">Transport</option>
// //             <option value="Utilities">Utilities</option>
// //             <option value="Others">Others</option>
// //           </select>
// //           <button
// //             id="add-expense-btn"
// //             onClick={handleAddExpense}
// //             classNameName="bg-blue-500 text-white px-4 py-2 rounded"
// //           >
// //             Add Expense
// //           </button>
// //         </div>

// //         {/* Expense List Section */}
// //         <div id="expense-list" classNameName="bg-white shadow-lg rounded-lg p-4">
// //           <h2 classNameName="text-xl font-semibold mb-4">Expenses</h2>
// //           <div id="expenses" classNameName="space-y-4">
// //             {expenses.map((expense, index) => (
// //               <div
// //                 key={index}
// //                 classNameName="p-4 border rounded-lg flex justify-between items-center"
// //               >
// //                 <div>
// //                   <p classNameName="font-bold">{expense.description}</p>
// //                   <p classNameName="text-sm text-gray-500">{expense.category}</p>
// //                 </div>
// //                 <p classNameName="font-bold text-blue-500">${expense.amount.toFixed(2)}</p>
// //               </div>
// //             ))}
// //           </div>
// //           <div classNameName="text-right font-bold mt-4">
// //             Total: ${totalExpenses.toFixed(2)}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExpenseTracker;
import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    if (description.trim() && amount) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        category,
      };
      setExpenses([...expenses, newExpense]);
      setDescription("");
      setAmount("");
      setCategory("Food");
    }
  };
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>

        {/* Add Expense Section */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Others">Others</option>
          </select>
          <button
            onClick={handleAddExpense}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Expense
          </button>
        </div>

        {/* Expense List Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Expenses</h2>
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">{expense.description}</p>
                  <p className="text-sm text-gray-500">{expense.category}</p>
                </div>
                <p className="font-bold text-blue-500">${expense.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="text-right font-bold mt-4">
            Total: ${totalExpenses.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpenseTracker;

