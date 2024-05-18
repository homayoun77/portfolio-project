import React from 'react'
import { motion } from 'framer-motion'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import bootstrap from '../assets/bs5.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import redux from '../assets/redux.png'

function Skills() {
  return (
    <div name='skills' className='bg-primary w-full md:h-screen text-gray-300'>
        {/* container */}
        <motion.div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'
        // initial={{ opacity: 0 , scale:0 }}
        // whileInView={{opacity:1, scale:1}}
        // viewport={{once:true}}
        // transition={{type:'tween' , delay:0.2, duration:0.8}}
        >
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies i've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500 pt-2'>
                <motion.div className='shadow-md shadow-[#040c16] py-2'
                    initial={{ opacity: 0 , scale:0 }}
                    whileInView={{opacity:1 , scale:1}}
                    viewport={{once:true}}
                    transition={{delay:0.2 , duration:0.3}}
                >
                    <img src={html} alt="html" className='w-20 mx-auto' />
                    <p className='my-4'>HTML</p>
                </motion.div>
                </div>
                <div className='hover:scale-110 duration-500 pt-2'>
                <motion.div className='shadow-md shadow-[#040c16] py-2 '
                    initial={{ opacity: 0 , scale:0 }}
                    whileInView={{opacity:1 , scale:1}}
                    viewport={{once:true}}
                    transition={{delay:0.4 , duration:0.3}}
                >
                    <img src={css} alt="css" className='w-20 mx-auto' />
                    <p className='my-4'>CSS</p>
                </motion.div>
                </div>
                <div className='hover:scale-110 duration-500 pt-2'>
                <motion.div className='shadow-md shadow-[#040c16] py-2 '
                    initial={{ opacity: 0 , scale:0 }}
                    whileInView={{opacity:1 , scale:1}}
                    viewport={{once:true}}
                    transition={{delay:0.6 , duration:0.3}}
                >
                    <img src={javascript} alt="javascript" className='w-20 mx-auto' />
                    <p className='my-4'>JavaScript</p>
                </motion.div>
                </div>
                <div className='hover:scale-110 duration-500 pt-2'>
                <motion.div className='shadow-md shadow-[#040c16] py-2 '
                    initial={{ opacity: 0 , scale:0 }}
                    whileInView={{opacity:1 , scale:1}}
                    viewport={{once:true}}
                    transition={{delay:0.8 , duration:0.3}}
                >
                    <img src={reactImg} alt="react" className='w-20 mx-auto' />
                    <p className='my-4'>React</p>
                </motion.div>
                </div>
                <div className='hover:scale-110 duration-500 pt-2'>
                <motion.div className='shadow-md shadow-[#040c16] py-2'
                    initial={{ opacity: 0 , scale:0 }}
                    whileInView={{opacity:1 , scale:1}}
                    viewport={{once:true}}
                    transition={{delay:1 , duration:0.3}}
                >
                    <img src={bootstrap} alt="node" className='w-20 mx-auto' />
                    <p className='my-4'>Bootstrap</p>
                </motion.div>
                </div>
                <div className='hover:scale-110 duration-500 pt-2'>
                <motion.div className='shadow-md shadow-[#040c16] py-2 '
                    initial={{ opacity: 0 , scale:0 }}
                    whileInView={{opacity:1 , scale:1}}
                    viewport={{once:true}}
                    transition={{delay:1.2 , duration:0.3}}
                >
                    <img src={tailwind} alt="tailwind" className='w-20 mx-auto' />
                    <p className='my-4'>TailwindCSS</p>
                </motion.div>
                </div>
                <div className='hover:scale-110 duration-500 pt-2'>
                <motion.div className='shadow-md shadow-[#040c16] py-2 '
                    initial={{ opacity: 0 , scale:0 }}
                    whileInView={{opacity:1 , scale:1}}
                    viewport={{once:true}}
                    transition={{delay:1.4 , duration:0.3}}
                >
                    <img src={github} alt="github" className='w-20 mx-auto' />
                    <p className='my-4'>Github</p>
                </motion.div>
                </div>
                <div className='hover:scale-110 duration-500 pt-2'>
                <motion.div className='shadow-md shadow-[#040c16] py-2 '
                    initial={{ opacity: 0 , scale:0 }}
                    whileInView={{opacity:1 , scale:1}}
                    viewport={{once:true}}
                    transition={{delay:1.6 , duration:0.3}}
                >
                    <img src={redux} alt="firebase" className='w-20 mx-auto' />
                    <p className='my-4'>Redux</p>
                </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Skills