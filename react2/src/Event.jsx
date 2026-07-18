function Event(){
    function greet(){
        alert("welcome top react")
        function show(name){
            alert(name)

        }
    }
    return(
        <div>
           <button onClick={greet}>click me</button>
           <button onClick={()=> alert("hi")}>click</button>
           <button onClick={()=>show("kiran")}>click to check</button>
           <h1 onMouseOver={()=> {alert("mouse enter")}}>hover me</h1>
        </div>
    )
}
export default Event;