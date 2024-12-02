import React, { useState } from "react";

function StringMethodsExample() {
  const [input, setInput] = useState("Hello World!");

  const handleUppercase = () => setInput(input.toUpperCase());
  const handleLowercase = () => setInput(input.toLowerCase());
  const handleTrim = () => setInput(input.trim());
  const handleReplace = () => setInput(input.replace("World", "React"));

  return (
    <div>
      <h1>String Methods in React</h1>
      <p>{input}</p>
      <button onClick={handleUppercase}>To Uppercase</button>
      <button onClick={handleLowercase}>To Lowercase</button>
      <button onClick={handleTrim}>Trim</button>
      <button onClick={handleReplace}>Replace "World" with "React"</button>
    </div>
  );
}

export default StringMethodsExample;
