import classes from './Projects.module.css';
import data from './../../utils/projectsContent/data';
import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () =>{

    const [ projects, setProjects ] = useState(data);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postPerPage, setPostPerPage ] = useState(6);
    
    return(
        <section className='flex justify-start items-center gap-4 w-full flex-col py-2 lg:px-16 px-4 xl:px-20' id="projects" data-aos="fade-up" data-aos-duration="1200">
            {/* <h4 className='text-white text-4xl font-bold flex w-full'>
                Projects
            </h4> */}

            <ProjectCard projects={projects} />
            
        </section>
    );
};

export default Projects;