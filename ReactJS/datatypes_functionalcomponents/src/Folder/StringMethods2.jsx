import React from 'react'

function RemoveCharacters() {
  const [input, setInput] = useState("");
  const [charactersToRemove, setCharactersToRemove] = useState("");
  const [result, setResult] = useState("");

  const removeCharacters = (str, chars) => {
    const charSet = new Set(chars);
    return str
      .split("")
      .filter((char) => !charSet.has(char))
      .join("");
  };

  const handleRemove = () => {
    setResult(removeCharacters(input, charactersToRemove));
  };

  return (
    <div>
      <h2>Remove Specific Characters</h2>
      <div>
        <label>Input String:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <label>Characters to Remove:</label>
        <input
          type="text"
          value={charactersToRemove}
          onChange={(e) => setCharactersToRemove(e.target.value)}
        />
      </div>
      <button onClick={handleRemove}>Remove Characters</button>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default RemoveCharacters;

