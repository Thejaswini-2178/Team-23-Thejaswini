import React, { useState } from "react";

function PushExample() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  const handleAdd = () => {
    const newItems = [...items];
    newItems.push("Cherry");
    setItems(newItems);
  };

  return (
    <div>
      <h3>Modified Method: push()</h3>
      <p>{items.join(", ")}</p>
      <button onClick={handleAdd}>Add Cherry</button>
    </div>
  );
}
export default PushExample;
