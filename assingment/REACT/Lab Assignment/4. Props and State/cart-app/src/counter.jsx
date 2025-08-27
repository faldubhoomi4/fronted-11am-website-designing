import { useState } from "react";

function Counter() {
  // declare state variable "count"
  const [count, setCount] = useState(0);

  // function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;