import { useState } from 'react'

import './App.css'

function App() {
  const[count,setcount] = useState(0);
  const[dec,setdec]= useState(100);
  const[name,setname]= useState("rahul")
  const[islogin,setislogin] = useState(true)

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)}>increase</button>
      <h1>{dec}</h1>
      <button onClick={()=> setdec(dec-1)}>decrease</button>
      <h1>{name}</h1>
      <button onClick={()=> setname("prashanth")}>change name</button>
      <h3>{islogin}</h3>
      <h2>{islogin ? "welcomeuser":"pleaselogin"}</h2>
      <button onClick={()=> setislogin(!islogin)}>toggle</button>
    </div>

  )
  
}

export default App
