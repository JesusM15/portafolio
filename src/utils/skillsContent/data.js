import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaPython } from "react-icons/fa6";
import { SiDjango, SiPhp, SiMysql, SiPostgresql, SiGit, SiTailwindcss } from "react-icons/si";

export const data = [
    {
        name: <span className="text-orange-600">HTML5</span>,
        experience: "+3 years",
        icon: <FaHtml5 className="text-orange-600" />
    },
    {
        name: <span className="text-yellow-500">JS</span>,
        experience: "+3 years",
        icon: <FaJs className="text-yellow-500" />
    },
    {
        name: <span className="text-purple-800">BS5</span>,
        experience: "+3 years",
        icon:  <FaBootstrap className="text-purple-800" />
    },
    {
        name: <span className="text-green-500">Django</span>,
        experience: "+2 years",
        icon: <SiDjango className="text-green-500" />
    },
    {
        name: <span className="text-blue-700">Postgres</span>,
        experience: "+2 years",
        icon: <SiPostgresql className="text-blue-800 border-white" />
    },
    {
        name: <span className="text-red-600">Git</span>,
        experience: "+1 year",
        icon: <SiGit className="text-red-600"/>
    },



];

export const data2 = [
    {
        name: <span className="text-blue-600">CSS3</span>,
        experience: "+3 years",
        icon: <FaCss3 className="text-blue-600" />
    },
    {
        name: <span className="text-blue-400">ReactJs</span>,
        experience: "+2 years",
        icon: <FaReact className="text-blue-400" />
    },
    {
        name: <span className="text-yellow-400">Python</span>,
        experience: "+3 years",
        icon: <FaPython className="text-blue-600" />
    },
    {
        name: <span className="text-purple-400">Php</span>,
        experience: "+1 year",
        icon: <SiPhp className="text-purple-400"/>
    },
    {
      name: <span className="text-blue-400">My<span className="text-orange-600">SQL</span></span> ,
      experience: "+2 years",
      icon:  <SiMysql className="text-blue-400"/>
    },
    {
        name: <span className="text-cyan-400">Tailwind</span>,
        experience: "+2 years",
        icon: <SiTailwindcss className="text-cyan-400" />
    },
];