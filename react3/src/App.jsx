import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Map from './Map'


import './App.css'
import Card from './Card'

function App() {
  const products=[
     {
      id:12,
     title:"laptop",
     price:24000
     },
     {
      id:34,
      title:"mobile",
      price:45777
     }
  ]
 

  return (
    /*<div>
     <Map/>
    </div>*/
    <div>
      {

      
        products.map(product =>
          <Card key={product.id}
          title={product.title}
          price={product.price}/>
                )                       
        }
                  
    </div>

  )
}

export default App
