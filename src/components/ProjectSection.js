import React from 'react'
import SortingVisualizerImage from '../assets/images/sorting-visualizer-image.png'
import EduhubImage from '../assets/images/eduhub-image.png'
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPostman, SiJsonwebtokens } from 'react-icons/si'


const ProjectSection = () => {
  return (
    <div className='w-full bg-gray-100 flex flex-col justify-around gap-10 items-center pt-5' id='projects'>
        <p className='text-richorange text-[70px] font-semibold overflow-visible'>Projects</p>

        <div className='-ml-48 w-8/12 relative shadow-[1px_1px_15px_#000000] group'>
            <img src={EduhubImage} className='object-cover'/>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-violet-800 group-hover:bg-opacity-50 transition-all duration-500" />
            <div className='absolute top-[20%] left-[10%] w-10/12 flex flex-col justify-center gap-5 transition-transform duration-500 group-hover:scale-105'>
                <div className='w-full flex flex-row flex-wrap gap-6 text-4xl items-center'>
                    <SiMongodb title="MongoDB" color="#47A248" />
                    <SiExpress title="Express.js" color="#FFFFFF" /> 
                    <SiReact title="React" color="#61DAFB" />
                    <SiNodedotjs title="Node.js" color="#339933" />
                    <SiJavascript title="JavaScript" color="#F7DF1E" />
                    <SiHtml5 title="HTML5" color="#E34F26" />
                    <SiCss3 title="CSS3" color="#1572B6" />
                    <SiTailwindcss title="Tailwind CSS" color="#06B6D4" />
                    <SiPostman title="Postman" color="#FF6C37" />
                </div>
                <h3 className='text-5xl font-semibold text-white overflow-visible'>EduHub</h3>
                <p className='text-white text-lg'>EduHub is a comprehensive EdTech web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It offers a seamless platform for learners and instructors to manage courses efficiently. The platform includes robust features such as course creation and enrollment, user authentication, and role-based dashboards for students and instructors.</p>
                <div className='flex flex-row items-center gap-5'>
                    <a href="https://github.com/Koushik-Mediga/EduHub" target="_blank" rel="noopener noreferrer"className='btn-animated'>Read More</a>
                    <a href="https://github.com/Koushik-Mediga/EduHub" target="_blank" rel="noopener noreferrer"><FaGithub className=' h-[50px] w-auto hover:cursor-pointer text-white hover:text-richorange transition-all'/></a>
                    <a href="https://github.com/Koushik-Mediga/EduHub" target="_blank" rel="noopener noreferrer"><FaLink className='h-[40px] w-auto hover:cursor-pointer text-white hover:text-richorange transition-all'/></a>
                </div>
            </div>
        </div>

        <div className='-mr-48 w-8/12 relative shadow-[1px_1px_15px_#000000] group'>
            <img src={SortingVisualizerImage} className='object-cover'/>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-violet-800 group-hover:bg-opacity-50 transition-all duration-500" />
            <div className='absolute top-[20%] left-[10%] w-10/12 flex flex-col justify-center gap-5 transition-transform duration-500 group-hover:scale-105'>
                <div className='w-full flex flex-row flex-wrap gap-6 text-4xl items-center'>
                    <SiJavascript title="JavaScript" color="#F7DF1E" />
                    <SiHtml5 title="HTML5" color="#E34F26" />
                    <SiCss3 title="CSS3" color="#1572B6" />
                </div>
                <h3 className='text-5xl font-semibold text-white overflow-visible'>Sorting Visualizer</h3>
                <p className='text-white text-lg'>This Sorting Visualizer is an interactive front-end project designed to help users understand and visualize sorting algorithms. It provides a dynamic graphical interface where users can observe how various algorithms like Bubble Sort, Merge Sort, Quick Sort, and others work step-by-step.</p>
                <div className='flex flex-row items-center gap-5'>
                    <a href="https://github.com/Koushik-Mediga/Sorting-Visualizer" target="_blank" rel="noopener noreferrer"className='btn-animated'>Read More</a>
                    <a href="https://github.com/Koushik-Mediga/Sorting-Visualizer" target="_blank" rel="noopener noreferrer"><FaGithub className=' h-[50px] w-auto hover:cursor-pointer text-white hover:text-richorange transition-all'/></a>
                    <a href="https://koushik-mediga.github.io/Sorting-Visualizer/" target="_blank" rel="noopener noreferrer"><FaLink className='h-[40px] w-auto hover:cursor-pointer text-white hover:text-richorange transition-all'/></a>
                </div>
            </div>
        </div>
        
        <a href="https://github.com/Koushik-Mediga" target="_blank" rel="noopener noreferrer"className='mb-10 btn-animated'>More Projects</a>

    </div>
  )
}

export default ProjectSection