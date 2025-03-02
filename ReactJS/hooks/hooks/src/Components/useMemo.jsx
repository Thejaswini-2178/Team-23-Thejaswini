import { useState, useMemo } from "react";

export default function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);

  const squaredNumber = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <div>
      <p>Squared Number: {squaredNumber}</p>
      <button onClick={() => setNum(num + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}
