
import React, { useState } from "react";

function SortExample() {
  const [items, setItems] = useState(["Cherry", "Banana", "Apple"]);

  const handleSort = () => {
    const newItems = [...items];
    newItems.sort();
    setItems(newItems);
  };

  return (
    <div>
      <h3>Modified Method: sort()</h3>
      <p>{items.join(", ")}</p>
      <button onClick={handleSort}>Sort Alphabetically</button>
    </div>
  );
}
export default SortExample;
