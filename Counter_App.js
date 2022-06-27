import React, { useState } from "react";

function Counter_App(){

    const[count, Handler]= useState(0)

    //for increasing the value//
    const increaseHandler=()=>{
        Handler(count+1)
    }
    //for decreasing the value//
    const decreaseHandler=()=>{
        Handler(count-1)
    }
    //for reset the value//
    const resetHandler=()=>{
        Handler(0)
    }

    return(
        <>
       
        <div className="number">
            <h1>Counter App</h1>
            </div>
         <div className=" number1">
            {count}
             </div>
        
         <div className="btnn">
             <button  onClick={increaseHandler} className="btn btn-primary" >Increase</button>
             <button onClick={decreaseHandler} className="btn btn-secondary">Decrease</button>
             <button onClick={resetHandler} className="btn btn-success">Reset</button>
         </div>
        
        </ >
    )
}

export default Counter_App;