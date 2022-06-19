import React from "react";

export const Counter = function() {




    return (
        <div className="counter">
            <button className="counter--minus">–</button>
            <div className="counter--count">
                <h1>0</h1>
            </div>
            <button className="counter--plus">+</button>
        </div>
    )
}