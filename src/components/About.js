import React, { useEffect, useRef } from 'react'
import { motion, useAnimate, useAnimation, useInView } from 'framer-motion'

function About() {

    // const [scope , animate] = useAnimate()
    // const inView = useInView(scope)

    // useEffect(() => {
    //     if(inView){
    //         animate(scope.current , {opacity:1})
    //     }
    // } , [inView])

    return (
        <div name='about' className='w-full md:h-screen bg-primary text-gray-300 py-20'>
            <motion.div className='w-full h-full flex flex-col justify-center items-center '
                // ref={scope}
                initial={{ opacity: 0 }}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{type:'tween' , delay:0.4, duration:1}}
            >
                <div className='max-w-[1000px] w-full grid '>
                    <div className='px-4 md:text-center'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About Me</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4 mt-8'>
                    <div className='text-4xl font-bold'>
                        <p className='leading-tight'>Hi. I'm Homayoun Norozy, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>As a junior Front-End Developer, I am eager to apply my skills and passionfor web development in a challenging and growth-oriented environment . Seeking a position where I can contribute to dynamic projects, collaboratewith experienced professionals, and continue expanding my expertise.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About