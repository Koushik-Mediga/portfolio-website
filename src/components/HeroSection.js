import React from 'react'
import KoushikImage from '../assets/images/koushik-image.jpg'
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';

const HeroSection = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center gap-12 md:gap-28 items-center mt-16 mb-16 px-4' id='about'>
      {/* Left Section */}
      <div className='flex flex-col justify-center gap-10 w-full md:w-5/12'>
        <h1 className='text-3xl text-gray-700'>Hi! I am Koushik</h1>
        <p className='text-4xl text-gray-700'>
          I am a <span className='text-violet-600 font-semibold'>
            <Typewriter
              words={['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'ML Developer', 'UI/UX Designer', 'React Developer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
        <p className='text-md'>
          I'm a Computer Science and Engineering student at NIT Andhra Pradesh with a passion for web development.
          I enjoy working in teams, am highly motivated, and always eager to learn new things. My dedication to
          continuous growth and improvement drives me to take on challenges and collaborate effectively with others.
        </p>

        {/* Social Icons */}
        <div className='w-full flex flex-row flex-wrap gap-6 text-xl items-center'>
          <a href="https://www.linkedin.com/in/koushik-mediga-532983247/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition-all" />
          </a>
          <a href="https://github.com/Koushik-Mediga" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 transition-all" />
          </a>
          <a href="https://leetcode.com/u/koushikmediga/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="hover:text-yellow-400 transition-all"/>
          </a>
        </div>

        {/* Contact Me Button */}
        <a href='#contact' className='w-6/12 md:w-4/12 btn-animated hover:cursor-pointer text-center'>Contact Me</a>
      </div>

      {/* Right Section - Image */}
      <img
        src={KoushikImage}
        alt='Hero Section Image'
        className='w-9/12 sm:w-7/12 md:w-[30%] grayscale hover:grayscale-0 hover:shadow-lg hover:shadow-black transition duration-1000 ease-in-out'
      />
    </div>
  )
}

export default HeroSection
