import React, { useState } from "react";

function SpliceExample() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  const handleRemove = () => {
    const newItems = [...items];
    newItems.splice(1, 1); // Remove one element at index 1
    setItems(newItems);
  };

  return (
    <div>
      <h3>Modified Method: splice()</h3>
      <p>{items.join(", ")}</p>
      <button onClick={handleRemove}>Remove Banana</button>
    </div>
  );
}
export default SpliceExample;
