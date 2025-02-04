import React from 'react'
import { useSelector } from 'react-redux'

const InventaryManageMent_9 = () => {
    const inventary=useSelector((state)=>state.inventary)
  return (
    <div>
        <h2>InventaryManageMent_9</h2>
        <ul>
            {inventary.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default InventaryManageMent_9


// import React from "react";

// const InventoryManagement = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
//       <div className="container mx-auto max-w-lg bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">Inventory Management System</h1>

//         {/* Add Product Section */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Product Name"
//             className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
//           />
//           <input
//             type="number"
//             placeholder="Quantity"
//             className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-2"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
//             Add Product
//           </button>
//         </div>

//         {/* Inventory Section */}
//         <div className="bg-gray-50 shadow rounded-lg p-4">
//           <h2 className="text-xl font-semibold mb-4">Product Inventory</h2>
//           <div className="space-y-2">
//             <div className="p-3 bg-white shadow-md rounded-lg">
//               <span className="font-medium">Product Name</span> - <span>Quantity</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InventoryManagement;
