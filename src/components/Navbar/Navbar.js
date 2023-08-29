import classes from './Navbar.module.css';
import { BsLinkedin, BsDiscord} from "react-icons/bs";

const Navbar = () =>{
    return(
        <nav className="flex max-h-16 justify-end p-2 absolute w-full">
            <ul className="flex flex-row gap-4">
                <li>
                    <a href="#" target="_blank">
                       <BsLinkedin  className={`text-3xl ${classes.icon}`}/>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                       <BsDiscord  className={`text-3xl ${classes.icon}`}/>
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;