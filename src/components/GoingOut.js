import React from "react";



export const GoingOut = function() {
   
    const [answer, setAnswer] = React.useState(true);

    
    const changeAnswer = function() {
        // just invert the boolean whenever a click event occurs
       setAnswer(prevAnswer => !prevAnswer);
    }
    
    

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={changeAnswer}>
                <h1>{answer ? 'Yes' : 'No'}</h1>
            </div>
        </div>
    )
}