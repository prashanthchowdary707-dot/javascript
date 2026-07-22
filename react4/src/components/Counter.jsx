import { useEffect, useState } from "react";

function Counter(){
    const[count,setCount]=useState(0)
    const[name,setName]=useState("prashanth")
    useEffect(()=>{
        console.log("Count Changed")
    },[])
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>increase</button>

            <hr />

            <h1>{name}</h1>
            <button onClick={()=>setName("anitha")}>update</button>

        </div>
    )
}
export default Counter;