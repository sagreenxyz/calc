import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  
  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "/", "="].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === "=" ? calculate() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button onClick={clearInput}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
