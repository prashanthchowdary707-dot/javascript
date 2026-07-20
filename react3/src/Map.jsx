function Map(){
    const fruits=["apple","banana","orange"]
    const colours=["red","green","black"]
    return(
        <div>
            {
                fruits.map((fruit)=>{
                    return(

                 
                    <h2>{fruit}</h2>
                   )
                })
            }
            <hr />
            {
                colours.map((colour)=>{
                    return(
                        <button style={{backgroundColor:colour}}>{colour}</button>
                    )
                }

                )
            }          
            

        </div>

    )
}
export default Map;