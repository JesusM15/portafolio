import classes from "./ProjectCard.module.css";


const ProjectCard = ({ projects }) =>{
    
    return(
        <div className=" w-full xl:w-full flex lg:flex-nowrap flex-wrap gap-12 lg:gap-6 ">
            {projects.map(project => (
            <div className={`lg:w-1/3 w-full text-center lg:text-left ${classes.bgCard} rounded`} key={project.id}>
                <img className="mt-2 p-0 h-auto w-full lg:h-64  xl:h-72 xl:max-h-72" src={project.image} alt={`Imagen ${project.name}`}/>
                <div className="p-4">
                    <h6 className="text-white text-3xl font-semibold italic ">
                        {project.name}
                    </h6>
                    <p className="text-white opacity-80">
                        {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 lg:justify-start mt-3 justify-center">
                        {project.skills.map((skill) =>(
                            <li className="text-white bg-violet-950  italic cursor-pointer px-2 py-1 rounded">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>  
            ))}
        </div>
    );
};

export default ProjectCard;