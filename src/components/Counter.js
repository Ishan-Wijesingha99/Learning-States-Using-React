import React from "react";
import '../index.css'






export const Counter = function() {
    const [counterValue, setCounterValue] = React.useState(0);

    const addCounter = function() {
        setCounterValue((prevCount) => prevCount + 1); // NEVER use counterValue++
    }

    const minusCounter = function() {
        setCounterValue((prevCount) => prevCount - 1); // NEVER use counterValue--
    }





    return (
        <div className="counter">
            <button className="counter--minus" onClick={minusCounter}>–</button>
            <div className="counter--count">
                <h1>{counterValue}</h1>
            </div>
            <button className="counter--plus" onClick={addCounter}>+</button>
        </div>
    )
}