import { useState } from "react";
import Usestate from "./Usestate";
function Change(){
    const[name,setName]=useState("")
    const[age,setAge]=useState(0)

    function handleChange(e){
        setAge(e.target.value)
    }
    function submit(e){
        e.preventDefault();
        alert("submitted") 
            }

    return(
        <div>
         <input type="text" onChange={(e)=>{setName(e.target.value)}} />
         <h1>{name}</h1>

        <input type="number" onChange={handleChange}/>

        <h1>{age}</h1>
        <form onSubmit={submit}></form>
        </div>
    )
}
export default Change;