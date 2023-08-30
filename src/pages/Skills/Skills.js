import AOS from 'aos';
import classes from './Skills.module.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { data, data2 } from '../../utils/skillsContent/data';

const Skills = () =>{
    
    useEffect(()=>{
        AOS.init();
    }, []);

    return(
        <section id="skills" class=" max-w-full flex items-center justify-center w-full flex-col flex-wrap gap-16 overflow-x-hidden" data-aos="fade-up" data-aos-duration="1000">
            <div className={`flex flex-row gap-y-12 gap-x-12 relative ${classes.mainDiv}`}>
                <div className={`flex gap-4 lg:gap-6 flex-col`}>
                    {data.map(( { name, icon, experience } )=>(
                        <div className={`flex flex-nowrap items-start flex-col`} data-aos="fade-right" data-aos-duration="1200">
                            <div className="flex flex-nowrap gap-2 items-center text-3xl lg:text-4xl">
                                { icon }
                                { name }
                            </div>
                            <p className="text-gray-300 text-base lg:text-lg opacity-60">
                                { experience }
                            </p>
                        </div>
                    ))}
                    
                </div>
                <div className={`flex gap-4 lg:gap-6 flex-col`}>
                    {
                        data2.map(( { name, icon, experience } )=>(
                            <div className={`flex flex-nowrap items-start flex-col`} data-aos="fade-left" data-aos-duration="1200">
                                <div className="flex flex-nowrap gap-2 items-center text-3xl lg:text-4xl">
                                    { icon }
                                    { name }
                                </div>
                                <p className="text-gray-300 text-base opacity-60 lg:text-lg">
                                    { experience }
                                </p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Skills;