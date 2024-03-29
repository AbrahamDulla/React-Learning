import "./setCount.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SetCount = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/4`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const [count, setCount] = useState(0);

  const HandleIncrement = () => {
    setCount(count + 1);
  };

  const HandleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="new">
      <h4 style={{ paddingTop: 15 }}>Set Count </h4>
      <div className="count">
        <p>Count: {count}</p>
        <button onClick={HandleDecrement}>Decrement</button>
        <button style={{ marginLeft: 10 }} onClick={HandleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default SetCount;
