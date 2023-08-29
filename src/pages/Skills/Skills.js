import AOS from 'aos';
import classes from './Skills.module.css';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaPython } from "react-icons/fa6";
import { useEffect } from 'react';

const Skills = () =>{
    
    useEffect(()=>{
        AOS.init();
    }, []);

    return(
        <section id="skills" class=" max-w-full flex items-center justify-start w-full flex-col flex-wrap gap-16 overflow-x-hidden" data-aos="fade-up" data-aos-duration="1000">
            {/* <h3 className={`text-white text-center text-5xl flex h-fit ${classes.textDegrade}`}>
                Skills
            </h3> */}
            <div className={`flex flex-row gap-y-12 gap-x-12 relative ${classes.mainDiv}`}>
                <div className={`flex gap-4 flex-col`}>
                    <div className={`flex flex-nowrap items-start flex-col`} data-aos="fade-right" data-aos-duration="1200">
                        <div className="flex flex-nowrap gap-2 items-center text-3xl">
                            <FaHtml5 className="text-orange-600" />
                            <span className="text-orange-600">HTML5</span>
                        </div>
                        <p className="text-gray-300 text-base opacity-60">
                            +3 years
                        </p>
                    </div>
                    <div className={`flex flex-nowrap items-start flex-col`} data-aos="fade-right" data-aos-duration="1200">
                        <div className="flex flex-nowrap gap-2 items-center text-3xl">
                            <FaJs className="text-yellow-500" />
                            <span className="text-yellow-500">JS</span>
                        </div>
                        <p className="text-gray-300 text-base opacity-60">
                            +3 years
                        </p>
                    </div>
                    <div className={`flex flex-nowrap items-start flex-col`} data-aos="fade-right" data-aos-duration="1200">
                        <div className="flex flex-nowrap gap-2 items-center text-3xl">
                            <FaBootstrap className="text-purple-800" />
                            <span className="text-purple-800">BS5</span>
                        </div>
                        <p className="text-gray-300 text-base opacity-60">
                            +3 years
                        </p>
                    </div>
                </div>
                <div className={`flex gap-4 flex-col`}>
                    <div className={`flex flex-nowrap items-start flex-col`} data-aos="fade-left" data-aos-duration="1200">
                        <div className="flex flex-nowrap gap-2 items-center text-3xl">
                            <FaCss3 className="text-blue-600" />
                            <span className="text-blue-600">CSS3</span>
                        </div>
                        <p className="text-gray-300 text-base opacity-60">
                            +3 years
                        </p>
                    </div>
                    <div className={`flex flex-nowrap items-start flex-col`} data-aos="fade-left" data-aos-duration="1200">
                        <div className="flex flex-nowrap gap-2 items-center text-3xl">
                            <FaReact className="text-blue-400" />
                            <span className="text-blue-400">ReactJs</span>
                        </div>
                        <p className="text-gray-300 text-base opacity-60">
                            +2 years
                        </p>
                    </div>
                    <div className={`flex flex-nowrap items-start flex-col`} data-aos="fade-left" data-aos-duration="1200">
                        <div className="flex flex-nowrap gap-2 items-center text-3xl">
                            <FaPython className="text-blue-600" />
                            <span className="text-yellow-400">Python</span>
                        </div>
                        <p className="text-gray-300 text-base opacity-60">
                            +3 years
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Skills;