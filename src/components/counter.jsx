import React,  { useState } from 'react';
const Counter = function() {
    let initialState=0;
    const [count, setCount] = useState(initialState);
    
function increment(){
    setCount( count + 1);
  }
  function decrement(){
    setCount( count - 1);
  }
  
return(
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
)
};
export default Counter;