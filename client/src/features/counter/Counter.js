import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount, increment, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const [text, setText] = useState("");

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(12))}
        >
          +
        </button>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <h1>{text}</h1>
      </div>
    </div>
  );
}
