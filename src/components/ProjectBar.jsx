import { useRef, useState } from "react";
import Project from "./Project";
import DefaultFunction from "./DeafultProject";
import DefaultProject from "./DeafultProject";
import AddProject from "./AddProject";

export default function ProjectBar({}){
    const projectInitialState = [{Title: "death", Description: "the sun is killing my buzz", Date: "11-20-2023", Tasks: []},
    {Title: "life", Description: "", Date: ""}]       
    const [projectList,setProjectList] = useState(projectInitialState)
    function handleAddProjectClick(buttonName){
        setSelectedProject(buttonName)
    }

    const dialog = useRef()
    const [selectedProject, setSelectedProject] = useState('default')

    // add button
    function handleAddProjectCancel(){
        setSelectedProject('none')
    }
    function handleAddProjectSave(title,description,date){
        setProjectList((prevList) => [
            ...prevList,
            { Title: title, Description: description, Date: date },
          ]);
        setSelectedProject(title)
    }
    return(
        <div className="flex h-screen">
            <div className="w-1/4 bg-black p-4 flex flex-col">
                <h1 className="text-white text-2xl font-bold mb-10">Your Projects</h1>
                <button onClick = {()=>setSelectedProject('Add')}
                className = {selectedProject === 'Add'? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-yellow-500 hover:border-yellow-700 rounded mb-10":
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-10" }>
                Add
                </button>
                {projectList.map((project, index) =>(
                <button 
                key = {index}
                className = {selectedProject === project.Title ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-yellow-500 hover:border-yellow-700 rounded mb-10":
                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-10" }
                onClick = {() => handleAddProjectClick(project.Title)}>
                {project.Title}
                </button>
                ))}
            </div>
            <div className="w-3/4 bg-white p-4">
                {selectedProject === 'default' && 
                <DefaultProject></DefaultProject>}
                {selectedProject === 'Add' &&
                <AddProject handleCancel={()=>setSelectedProject('default')} handleSave={handleAddProjectSave}></AddProject>}
                {projectList.map((project, index) =>
                    selectedProject === project.Title ? (
                        <Project
                        key={index}
                        className="h-16 w-16 border p-2 mb-10"
                        title={project.Title}
                        description={project.Description}
                        date={project.Date}
                        Tasks = {project.Tasks}
                        />
                    ) : null
                )}
            </div>
        </div>
    )
}