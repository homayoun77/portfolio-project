import React from 'react'

import { motion } from 'framer-motion'

import netflixProject from '../assets/projects/netflix-project.png'
import blogProject from '../assets/projects/blog-project.png'

function Work() {
  return (
    <div name='work' className='w-full md:h-screen bg-primary text-gray-300 py-20'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-4'>Check out some of my recent works.</p>
            </div>

            <div className='grid lg:grid-cols-2 gap-8'>

              <motion.div className='shadow-lg shadow-[#040c16] w-full rounded-md flex lg:flex-col items-center overflow-hidden'
                initial={{x:'-50%' , opacity:0}}
                whileInView={{x:0 , opacity:1}}
                viewport={{once:true}}
                transition={{type:'spring' , delay:0.2, stiffness:30}}
              >
                <img src={netflixProject} alt="" className='w-[40%] lg:w-full h-full ' />
                <div className='w-[60%] lg:w-full flex flex-col lg:py-3 justify-center items-center'>
                  <span className='md:text-2xl md:font-bold text-white tracking-wider'>
                    Netflix Personal Project
                  </span>
                  <div>
                    <a href="https://netflix-project-homayoun77.vercel.app/" target='_blank'>
                      <button className='rounded px-2 py-1 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                    </a>
                    <a href="https://github.com/homayoun77/netflix-project" target='_blank'>
                      <button className='rounded px-2 py-1 m-2 bg-white text-gray-700 font-bold'>Code</button>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div className='shadow-lg shadow-[#040c16] w-full rounded-md flex lg:flex-col items-center overflow-hidden'
                initial={{x:'-50%' , opacity:0}}
                whileInView={{x:0 , opacity:1}}
                viewport={{once:true}}
                transition={{type:'spring' , delay:0.2, stiffness:30}}
              >
                <img src={blogProject} alt="" className='w-[40%] lg:w-full h-full ' />
                <div className='w-[60%] lg:w-full flex flex-col lg:py-3 justify-center items-center'>
                  <span className='md:text-2xl md:font-bold text-white tracking-wider'>
                    Blog Personal Project
                  </span>
                  <div>
                    <a href="https://blog-project.liara.run/" target='_blank'>
                      <button className='rounded px-2 py-1 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                    </a>
                    <a href="https://github.com/homayoun77/blog-project" target='_blank'>
                      <button className='rounded px-2 py-1 m-2 bg-white text-gray-700 font-bold'>Code</button>
                    </a>
                  </div>
                </div>
              </motion.div>
              
            </div>
        </div>
    </div>
  )
}

export default Work