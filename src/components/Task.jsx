export default function Task({name,handleClick}){
    return(
        <div>
                <p>
                    {name}
                </p> 
                <button onClick = {handleClick}>
                    Cancel
                </button>    
        </div>
      
    )
}