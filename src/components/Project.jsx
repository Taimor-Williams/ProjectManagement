export default function Project({title, description, date, isActive}){
    if (!isActive){
        return(<h1>Select a Project!</h1>)
    }
    return(
        <div>
            <h1>{title}</h1>
            <h1>{date}</h1>
            <p>{description}</p>
        </div>
    );
}