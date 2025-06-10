import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-28 flex flex-row justify-around items-center mt-6'>
        <p className='text-3xl font-semibold '>Portfolio</p>
        <ul className='flex flex-row gap-5'>
            <li><a href='#projects' className='text-xl hover:cursor-pointer hover:underline hover:text-violet-600 transition-all duration-300 ease-in-out'>Projects</a></li>
            <li><a href='#skills' className='text-xl hover:cursor-pointer hover:underline hover:text-violet-600 transition-all duration-300 ease-in-out'>Skills</a></li>
            <li><a href='#contact' className='text-xl hover:cursor-pointer hover:underline hover:text-violet-600 transition-all duration-300 ease-in-out'>Contact Me</a></li>
            <li><a href='#links' className='text-xl hover:cursor-pointer hover:underline hover:text-violet-600 transition-all duration-300 ease-in-out'>Links</a></li>
        </ul>
    </div>
  )
}

export default Navbar