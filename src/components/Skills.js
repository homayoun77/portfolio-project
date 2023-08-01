import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import nodejs from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import firebase from '../assets/firebase.png'

function Skills() {
  return (
    <div name='skills' className='bg-primary w-full sm:h-screen text-gray-300 py-20 sm:py-0 '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies i've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
                    <img src={html} alt="html" className='w-20 mx-auto' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
                    <img src={css} alt="css" className='w-20 mx-auto' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
                    <img src={javascript} alt="javascript" className='w-20 mx-auto' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
                    <img src={reactImg} alt="react" className='w-20 mx-auto' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
                    <img src={nodejs} alt="node" className='w-20 mx-auto' />
                    <p className='my-4'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
                    <img src={tailwind} alt="tailwind" className='w-20 mx-auto' />
                    <p className='my-4'>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
                    <img src={github} alt="github" className='w-20 mx-auto' />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-2'>
                    <img src={firebase} alt="firebase" className='w-20 mx-auto' />
                    <p className='my-4'>Firebase</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills