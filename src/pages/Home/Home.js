import classes from './Home.module.css';
import astronaut from './../../media/astronauta.png';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Home = () =>{

    const textTitles = useRef(null);

    useEffect(() => {
      const typed = new Typed(textTitles.current, {
        strings: ["Frontend", "Backend", "Databases", "UI/UX", "SEO"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 150,
        backSpeed: 150,
        backDelay: 150,
        loop: true,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);

    // const [ cursorX, setCursorX ] = useState();
    // const [ cursorY, setCursorY ] = useState();

    // window.addEventListener('mousemove', (e) =>{
    //     setCursorX(e.pageX);
    //     setCursorY(e.pageY);
    // });
    
    return(
        <section id="home" className="flex items-center w-full px-4">
                <div className="flex items-center flex-col lg:flex-row w-full justify-around lg:gap-0 gap-6">

                    <div className="flex flex-col lg:block items-center text-center lg:text-left">
                        <h2 className="text-white text-7xl">
                            Hi, I&#39;m <span className={`text-purple-500 ${classes.spanText}`}>Jesus</span>
                        </h2>
                        <span className="italic text-white text-2xl opacity-70 lg:h-auto h-4" ref={textTitles}>
                            Frontend
                        </span>
                        <p className="mt-3 text-gray-400 text-base opacity-70 max-w-md">
                            In this website you&#39;ll see my skills and projects as a Software developer. 
                        </p>
                        <div className="mt-4 flex gap-3 items-center">
                            <a className={`text-white px-12 py-2 text-lg border border-purple-700 ${classes.btnIcon}`} href="#_" rel="noreferrer">
                                Contact me
                            </a>
                        </div>
                    </div>
                    <div className={`${classes.astronautContainer}`}>
                        <img src={astronaut} className="h-72 w-auto" />
                    </div>

                    {/* <div className={classes.cursor} style={{ left: cursorX + 'px', top: cursorY + 'px' }}>

                    </div> */}
            </div>
        </section>
    );
};

export default Home;