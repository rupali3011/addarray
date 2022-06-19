import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [addval, setaddval] = useState(0);
  const [prev, setprev] = useState([]);
  return (
    <div className="App">
      <h3>{prev}</h3>
      <button
        onClick={function add() {
          setprev(prev + addval + ",");
          setaddval(addval + 1);
        }}
      >
        add
      </button>
      <button
        onClick={function clear() {
          setprev(0);
          setaddval(0);
        }}
      >
        clear
      </button>
    </div>
  );
}
