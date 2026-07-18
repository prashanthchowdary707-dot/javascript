import Card from "./Card"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"
function App() {
 

  return (
    <div>
      <Card name="table" price={1000} available={true}/>
      <hr />
      <Card1 subjects={["React","node","express"]}/>
      <hr />
      <Card2 students={{name:"rahul" , age:23}}/>
      <hr />
      <Card3 name="mobile" price={20000}/>
    </div>
  )
}

export default App
