import React from "react";
import '../index.css'





export const StateComponent = function() {
    // using states
    const result = React.useState();
    console.log(result); // as you can see, this is actually an array with two entrees, first entree is a value, second entree is a function

    // to destructure this array, do this
    const [variable, func] = React.useState('Yes!', () => 2);
    console.log(variable);
    console.dir(func);





    const [isImportant, setIsImportant] = React.useState('Yes')

    const handleClick = function() {
        setIsImportant('Yes');
    }


    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{variable}</h1>
            </div>
        </div>
    )
}