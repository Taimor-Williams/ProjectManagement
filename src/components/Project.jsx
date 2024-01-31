import { useState } from "react";

export default function Project({title, description, date, tasks}){
    const [taskName, setTaskName] = useState('')

    function handleUpdateChangeTask(event){
        setTaskName(event.target.value)
    }


    return(
        <div className = "flex justify-center items-start flex flex-col">
            <div className="w-64 border rounded bg-gray-100">
                <h1 className="mb-2">{title}</h1>
                <h1 className="mb-2">{date}</h1>
                <p>{description}</p>
            </div>
            <div>
            <label>Task</label>
                    <input 
                        id="title"
                        type = 'text' 
                        required value = {taskName}
                        onChange = {handleUpdateChangeTask}
                        className="w-full border p-2 bg-gray-200"
                        >
                    </input>
            </div>
            {/* <button onClick = >
                Add task
            </button> */ }
        </div>
    );
}