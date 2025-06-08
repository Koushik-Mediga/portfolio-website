import React from 'react'
import KoushikImage from '../assets/images/koushik-image.jpg'
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <div className='w-screen flex flex-row justify-center gap-28 items-center mt-16 mb-16' id='about'>
        <div className='flex flex-col justify-center gap-10 w-4/12'>
            <h1 className='text-3xl text-gray-700'>Hi! I am Koushik</h1>
            <p className='text-4xl text-gray-700'>I am a <span className='text-violet-600 font-semibold'>
                 <Typewriter
                    words={['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'ML Developer', 'UI/UX Designer', 'React Developer']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    />
            </span></p>
            <p className='text-md'>I'm a Computer Science and Engineering student at NIT Andhra Pradesh with a passion for web development. I enjoy working in teams, am highly motivated, and always eager to learn new things. My dedication to continuous growth and improvement drives me to take on challenges and collaborate effectively with others.</p>
            <a href='#contact' className='w-4/12 btn-animated hover:cursor-pointer text-center'>Contact Me</a>
        </div>
        <img src={KoushikImage} alt='Hero Section Image' className='w-[30%] grayscale hover:grayscale-0 hover:shadow-lg hover:shadow-black transition duration-1000 ease-in-out'/>
    </div>
  )
}

export default HeroSection