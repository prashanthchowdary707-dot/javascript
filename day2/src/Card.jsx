//destructuring

//props.name and props.price

function Card ({name,price,available}){
    return(
       <div>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h3>{available ?
        "available" : "Out of stock"}</h3>
       </div>
    )
}
export default Card;