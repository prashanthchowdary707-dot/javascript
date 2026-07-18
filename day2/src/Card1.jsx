//Props are read-only values passed from a parent component to a child component. They are used to share data between components.
function Card1({subjects}){
    return(
        <div>
            <ul>
                {
                    subjects.map(subject =>
                        <li>
                            {subject}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Card1;