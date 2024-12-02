// File: FilterExample.js
import React from "react";

function FilterExample() {
  const items = ["Apple", "Banana", "Cherry"];
  const filteredItems = items.filter((item) => item.startsWith("B"));

  return (
    <div>
      <h3>Unmodified Method: filter()</h3>
      <p>Original: {items.join(", ")}</p>
      <p>Filtered: {filteredItems.join(", ")}</p>
    </div>
  );
}

export default FilterExample;
