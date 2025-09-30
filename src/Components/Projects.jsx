const Projects = ({ projects }) => {
    return (
        <>
            <div className="p-4">
                
                <h2 className="text-3xl font-bold mb-4 text-textmain">Proyectos</h2>
                <hr className="my-8 border-t border-subtext" />
                {projects.map((proyecto) => (
                    <div className="mb-20 mt-8" key={proyecto.title}>
                        <img className="w-full rounded-md" src={proyecto.imageUrl} alt="" />
                        <h2 className="text-xl font-bold mt-2 text-textmain">{proyecto.title}</h2>
                        <p className="text-subtext mt-2">{proyecto.description}</p>
                        <div className="mt-2 flex flex-wrap"> 
                            {proyecto.technologies.map((tech) => (
                                <span className="text-sm bg-technologies text-textmain m-2 p-1 px-4 rounded-full text-subtext">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Projects;