import Counter from "./components/Counter"
import Time from "./components/Time"
import "./Api.css"

function App() {
  const[products,setProducts]=useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/1")
    .then(res => res.json())
    .then(data =>{
      setProducts(data)
    })
  },[])
  
  return (
    <div className="container">
     {
      products.map(product=>
        <div className="card">
          <img src={product.img} alt="" />
        <h2 key={product.id}>{product.title}</h2>
        <h5> Rs. {product.price}</h5>
        </div>
        
        
      )
     }
    </div>
  )
}

export default App
