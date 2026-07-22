import { useState } from "react";
function Operator(){
    const[age,setAge]=useState(0);
    const[islogin,setIslogin]=useState(true);
    return(
        <div>
            <input type="number" onChange={(e)=>setAge(e.target.value)}/>
            {
                age >=18?
                <h1>eligible </h1> :
                <h1>not eligible</h1>
            }
            <input type="boolean"onChange={(e)=>setIslogin(e.target.value)}/>
            {
                islogin ?
                <h1>welcom</h1>:
                <h1>plz login</h1>
            }

        </div>
    )
}
export default Operator;