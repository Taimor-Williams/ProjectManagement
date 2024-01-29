import { useRef, useState } from "react";
import Project from "./Project";
import DefaultFunction from "./DeafultProject";
import DefaultProject from "./DeafultProject";

export default function ProjectBar({}){
    const projectList = []
    projectList.push({Title: "death", Description: "the sun is killing my buzz", Date: "11-20-2023"})
    projectList.push({Title: "life", Description: "", Date: ""})
    function handleAddProjectClick(buttonName){
        setSelectedProject(buttonName)
    }
    const dialog = useRef()
    const [selectedProject, setSelectedProject] = useState('')
    return(
        <div className="flex h-screen">
            <div className="w-1/4 bg-black p-4">
                <h1 className="text-white text-2xl font-bold mb-10">Your Projects</h1>
                {projectList.map((project, index) =>(
                <button 
                key = {index}
                className = {selectedProject === project.Title ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-yellow-500 hover:border-yellow-700 rounded":
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" }
                onClick = {() => handleAddProjectClick(project.Title)}>
                {project.Title}
                </button>
                ))}
            </div>
            <div className="w-3/4 bg-white p-4">
                {projectList.map((project, index) =>
                    selectedProject === project.Title ? (
                        <Project
                        key={index}
                        className="h-16 w-16 border p-2 mb-10"
                        isActive={selectedProject === project.Title}
                        title={project.Title}
                        description={project.Description}
                        date={project.Date}
                        />
                    ) : null
                )}
            </div>
        </div>
    )
}