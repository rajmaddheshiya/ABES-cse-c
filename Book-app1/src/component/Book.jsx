import React, { useState } from "react";
import "./book.css";

function Book(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div id="book">
      <img src={props.img} alt="Book Cover" id="b" />
      <h2>Title: {props.title}</h2>
      <p>Price: {props.price}</p>

      <div className="counter">
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Book;
