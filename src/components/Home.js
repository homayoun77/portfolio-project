import React from 'react'

import { HiArrowNarrowRight } from 'react-icons/hi'

import { Link } from 'react-scroll'

function Home() {
    return (
        <div name='home' className='w-full h-screen bg-primary'>
            <div className='max-w-[1000px] flex flex-col justify-center h-full mx-auto px-8'>
                <p className='text-pink-600 text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl md:text-7xl font-bold text-[#ccd6f6]'>Homayoun Norozy</h1>
                <h2 className='text-4xl md:text-7xl font-bold py-2 text-[#8892b0]'>I'm a Frontend Developer.</h2>
                <p className='text-[#8892b0] max-w-[700px] py-4'>I'm a Frontend developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I'm focused on
                    building responsive web applications.</p>
                <div>
                <Link to="work" smooth={true} duration={500}>
                <button className='text-white group border-2 py-3 px-6 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work <span className='ml-2 group-hover:rotate-90 duration-300'><HiArrowNarrowRight /></span> </button>
                </Link>

                    
                </div>
            </div>
        </div>
    )
}

export default Home