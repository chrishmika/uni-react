import React, { useState } from "react";

const Count = () =>{
    const [count , setCount] = useState(0);

    const handleclick = () =>{
        setCount(count+1);
    }
    return (
        <>
        <h1>Counter{count}</h1>
        <button onClick={()=> setCount(count+1)}>Click</button>

        <button onClick={handleclick}>Click</button>
        </>
    )
}

export default Count;