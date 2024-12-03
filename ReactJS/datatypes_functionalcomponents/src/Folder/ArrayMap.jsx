// File: MapExample.js
import React from "react";

function MapExample() {
  const items = ["Apple", "Banana", "Cherry"];
  const mappedItems = items.map((item) => item.toUpperCase());

  return (
    <div>
      <h3>Unmodified Method: map()</h3>
      <p>Original: {items.join(", ")}</p>
      <p>Mapped: {mappedItems.join(", ")}</p>
    </div>
  );
}
export default MapExample;
