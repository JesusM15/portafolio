import classes from "./ProjectCard.module.css";


const ProjectCard = ({ projects }) =>{
    
    return(
        <div className="w-full flex lg:flex-nowrap flex-wrap gap-8 lg:gap-4 ">
            {projects.map(project => (
            <div className={`lg:w-1/3 w-full text-center lg:text-left ${classes.bgCard} p-4 rounded`} key={project.id}>
                <h6 className="text-white text-3xl font-semibold italic ">
                    {project.name}
                </h6>
                <p className="text-white opacity-80">
                    {project.description}
                </p>
                <ul className="flex flex-nowrap gap-2 lg:justify-start mt-3 justify-center">
                    {project.skills.map((skill) =>(
                        <li className="text-white bg-violet-950  italic cursor-pointer px-2 py-1 rounded">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>  
            ))}
        </div>
    );
};

export default ProjectCard;