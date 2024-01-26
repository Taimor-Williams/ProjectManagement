import { useRef, useState } from "react";
import Project from "./Project";
import DefaultFunction from "./DeafultProject";
import DefaultProject from "./DeafultProject";

export default function ProjectBar({}){
    function handleAddProjectClick(){
        setSelectedProject('death')
    }
    function handleAddProjectClickTwo(){
        setSelectedProject('life')
    }
    const projectMore = {Title: "", Description: "", Date: ""}
    const dialog = useRef()
    const [selectedProject, setSelectedProject] = useState('')

    return(
        <div className="flex h-screen">
            <div className="w-1/4 bg-black p-4">
                <h1 className="text-white text-2xl font-bold mb-10">Your Projects</h1>
                <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" 
                onClick = {handleAddProjectClick}> 
                Add Project
                </button>
                <button className = {selectedProject === 'life' ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-yellow-500 hover:border-yellow-700 rounded":
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" }
                onClick = {handleAddProjectClickTwo}> 
                Add Project 2
                </button>
            </div>
            <div className="w-3/4 bg-white p-4">
                {selectedProject === "" && 
                <DefaultProject />}
                {selectedProject === 'death' && 
                <Project 
                className = "h-16 w-16 border p-2 mb-10"
                isActive={selectedProject === 'death'}
                title = "The world"
                description = "the meaning of life"
                date = "death to my enimes">
                </Project>}
                {selectedProject === 'life' &&
                <Project 
                className = "h-16 w-16 border p-2"
                isActive={selectedProject === 'life'}
                title = "The world"
                description = "the meaning of life"
                date = "life to my enimes">
                </Project>}
            </div>
        </div>
    )
}