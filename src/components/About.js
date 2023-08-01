import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen bg-primary text-gray-300'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='max-w-[1000px] w-full grid '>
                    <div className='px-4 md:text-center'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 mt-8'>
                    <div className='text-4xl font-bold'>
                        <p className='leading-tight'>Hi. I'm Homayoun Norozy, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software
                            for clients ranging from individuals and small-businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About