function Rendering(){
    const students=[
        {
            id:1,
            name:"prashanth",
            age:22
        },
         {
            id:2,
            name:"anitha",
            age:27
        },
         {
            id:4,
            name:"ramesh",
            age:25
        },
         {
            id:6,
            name:"rahul",
            age:20
        }
    ]
        
    return(
        <div>
            {
           students.map((student)=>{
            return(
                
            
             <div>
                <h2>{student.name}</h2>
                <h3>{student.age}</h3>
                </div>
            )

           })
        }
        </div>
    )
}
export default Rendering;