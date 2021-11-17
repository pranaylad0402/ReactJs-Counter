import React, { useState } from "react";
import "./CounterStyles.css";

export default function Counter() {
  // created state for storing the counter value
  const [counter, setCounter] = useState(1);

  // function for  incrementing the counter value
  const onDecClick = () => {
    //decrement the counter by 1
    let count = +counter - 1;
    setCounter(count);
  };
  //function for decrementing the counter
  const onIncClick = () => {
    //increment the counter by 1
    let count = +counter + 1;
    setCounter(count);
  };
  //function for changing the counter value
  const onCounterChange = (event) => {
    setCounter(event.target.value);
  };

  //component for rendering button
  const renderButton = (className, btnText, onBtnClick) => {
    return (
      <button className={className} onClick={onBtnClick}>
        {btnText}
      </button>
    );
  };

  return (
    <div className="mainContainer">
      <div className="container">
        {renderButton("decButton", "-", onDecClick)}
        <input
          type="number"
          class="cntInput"
          value={counter}
          onChange={onCounterChange}
        />
        {renderButton("incButton", "+", onIncClick)}
      </div>
    </div>
  );
}
