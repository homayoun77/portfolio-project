import React from 'react'

import netflixProject from '../assets/projects/netflix-project.png'
import realestate from '../assets/projects/realestate.jpg'

function Work() {
  return (
    <div name='work' className='w-full lg:h-screen bg-primary text-gray-300 pt-20'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-4'>Check out some of my recent works.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

              <div style={{backgroundImage: `url(${netflixProject})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[230px] bg-cover bg-no-repeat bg-center hover:!bg-gradient-to-r from-gradient1 to-gradient2'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React js application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://netflix-project-homayoun77.vercel.app/" target='_blank'>
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="https://github.com/homayoun77/netflix-project" target='_blank'>
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>


              <div style={{backgroundImage: `url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[230px] bg-cover bg-no-repeat bg-center hover:!bg-gradient-to-r from-gradient1 to-gradient2'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React js application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>


              <div style={{backgroundImage: `url(${netflixProject})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[230px] bg-cover bg-no-repeat bg-center hover:!bg-gradient-to-r from-gradient1 to-gradient2'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React js application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>


              <div style={{backgroundImage: `url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[230px] bg-cover bg-no-repeat bg-center hover:!bg-gradient-to-r from-gradient1 to-gradient2'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React js application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>


              <div style={{backgroundImage: `url(${netflixProject})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[230px] bg-cover bg-no-repeat bg-center hover:!bg-gradient-to-r from-gradient1 to-gradient2'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React js application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>


              <div style={{backgroundImage: `url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[230px] bg-cover bg-no-repeat bg-center hover:!bg-gradient-to-r from-gradient1 to-gradient2'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React js application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="#1">
                      <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Work