import { useState } from "react"

export default function AddProject({handleCancel, handleSave, }){
    const [Title,setTitle] = useState('hello')
    const [Description,setDescription] = useState('hello')
    const [DueDate,setDueDate] = useState('hello')
    function handleUpdateChangeTitle(event){
        setTitle(event.target.value)
    }
    function handleUpdateChangeDescription(event){
        setDescription(event.target.value)
    }
    function handleUpdateChangeDate(event){
        setDueDate(event.target.value)
    }



    return(
        <div className="flex justify-between">
            <div className="w-1/2 pr-4">
                <label>Title</label>
                    <input 
                        id="title"
                        type = 'text' 
                        required value = {Title}
                        onChange = {handleUpdateChangeTitle}
                        className="w-full border p-2 bg-gray-200"
                        >
                    </input>
                <label>Description</label>
                    <input 
                        id="title"
                        type = 'text' 
                        required value = {Description}
                        onChange = {handleUpdateChangeDescription}
                        className="w-full border p-2 bg-gray-200"
                        >
                    </input>
                <label>Date</label>
                    <input 
                        id="title"
                        type = 'text' 
                        required value = {DueDate}
                        onChange = {handleUpdateChangeDate}
                        className="w-full border p-2 bg-gray-200"
                        >
                    </input>
                    {/* <DatePicker label="Basic date picker" /> */}
            </div>
            <div className="w-1/2 flex flex-col">
                <button className="mb-2 bg-red-500 text-white px-4 py-2 rounded" onClick = {handleCancel}>Cancel </button>
                <button className="mb-2 bg-red-500 text-white px-4 py-2 rounded" onClick = {() => handleSave(Title,Description,DueDate)}>Save </button>
            </div>
        </div>
    )
}