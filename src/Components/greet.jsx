import "./greet.css";
import React, { useState } from "react";

const Greet = () => {
  const [count, setCount] = useState(0);

  const HandleIncrement = () => {
    setCount(count + 1);
  };

  const HandleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="new">
      <h1>Learn UseState</h1>
      <div className="count">
        <p>Count: {count}</p>
        <button style={{ marginRight: 10 }} onClick={HandleIncrement}>
          Increment
        </button>
        <button onClick={HandleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Greet;
