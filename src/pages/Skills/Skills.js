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
        <section id="skills" class=" max-w-full flex lg:justify-around lg:px-12 items-center justify-center w-full flex-row flex-wrap gap-16 lg:gap-0 overflow-x-hidden" data-aos="fade-up" data-aos-duration="1000">
            <div className="hidden lg:flex flex-col self-stat py-24 max-w-md" data-aos="fade-up" data-aos-duration="1200">
                <h3 className={`text-4xl italic uppercase text-start font-bold text-white`}>
                    About me
                </h3>
               <p className="text-white text-base mt-2 opacity-90">
                    <span className='text-red-800'>Cast</span><span className='text-blue-600'>Soft</span> Software delevoper.
               </p>
               <p className="text-gray-300 text-base mt-3 opacity-90" style={{textWrap: 'wrap'}}>
                    I'm Mexican, B2 on English passionate full stack web developer also have knowledges about AI, Artificial Vision, electronic like arduino, raspberry and others.
                    My hobbies are programming, draw and listen to music.
               </p>
            </div>
            
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