import React, { useState } from "react";

const ChildComponent = React.memo(({ count }) => {
  console.log("Child re-rendered");
  return <p>Child Count: {count}</p>;
});

const ReactMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  return (
    <div>
      <h2>React.memo Example</h2>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increment Other</button>
      <p>Other Count: {otherCount}</p>
    </div>
  );
};

export default ReactMemoComponent;
