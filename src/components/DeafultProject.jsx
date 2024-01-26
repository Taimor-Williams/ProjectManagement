import image from '../assets/no-projects.png';
export default function DefaultProject(){
    return (
    <div className = "flex flex-col justify-center items-center h-screen">
        <div className="max-w-xs max-h-xs mb-10">
            <img src={image} alt="Your Alt Text" className="w-full h-full object-cover" />
        </div>
        <h1 className='mb-10'>select or start a project</h1>
        <p className='mb-10'>{"no project selcted. Selecet a project or start with a new one."}</p>
        <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Start a new project</button>
    </div>)
}