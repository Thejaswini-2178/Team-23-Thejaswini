import { useState, useCallback } from "react";
import { debounce } from "lodash";

const DebounceComponent = () => {
  const [text, setText] = useState("");

  const debouncedSearch = useCallback(
    debounce((query) => console.log("Searching:", query), 1000),
    []
  );

  const handleChange = (e) => {
    setText(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <h2>Debouncing Example</h2>
      <input type="text" value={text} onChange={handleChange} placeholder="Type something..." />
    </div>
  );
};

export default DebounceComponent;
