import { useState } from "react";
import Task from "./Task";

export default function Project({title, description, date, taskList, handleUpdateState, index}){
    const [taskName, setTaskName] = useState('')

    function handleUpdateChangeTask(event){
        setTaskName(event.target.value)
    }

    function updateTask(){
        handleUpdateState((prevState) => {
            const newState = [...prevState]
            newState[index].Tasks.push(taskName)
            console.log("New State after pushing task:", newState[index].Tasks);
            return newState
        })
        setTaskName('')
    }

    function cancelTask(curTaskIndex){
        console.log("Canceling task at index:", curTaskIndex);
        handleUpdateState((prevState) => {
            const newState = [...prevState]
            // console.log(newState[index].Tasks)
            newState[index].Tasks.splice(curTaskIndex,1)
            console.log("New State after canceling task:", newState[index].Tasks);
            // console.log(newState[index].Tasks)
            return newState
        })
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
            <button onClick = {updateTask} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                Add task
            </button> 
            {taskList.map((taskName, taskIndex) =>(
                <Task key = {taskIndex} name = {taskName} handleClick = {()=>cancelTask(taskIndex)}/>
            ))}
                    
        </div>
    );
}