import { useState } from "react";

function Usestate(){
    const[name,setName]= useState("prashanth")
    const[age,setAge]=useState(22)
    return(
        <div>
           <h1>{name}</h1>
           <h3>{age}</h3>
           <button onClick={()=> {setName("kiran");setAge(22)}}>update</button>
        </div>
    )
}
export default Usestate;