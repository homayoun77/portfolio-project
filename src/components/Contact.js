import React from 'react'

import { motion } from 'framer-motion'

function Contact() {
  return (
    <div name='contact' className='w-full lg:h-screen bg-primary flex justify-center items-center p-4 pt-20 pb-10'>
        <motion.form method='POST' action="https://getform.io/f/d77641c2-ff76-4a8a-82bc-f8fed95c954a" className='flex flex-col max-w-[600px] w-full'
        initial={{opacity:0 , scale:0}}
        whileInView={{opacity:1 , scale:1}}
        viewport={{once:true}}
        transition={{ delay:0.2, duration:0.7}}
        >
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - homayounn77@gmail.com</p>
            </div>
            <input type="text" name='name' placeholder='Name' className='p-2 bg-[#ccd6f6] outline-none' />
            <input type="email" name="email" placeholder='Email' className='p-2 my-4 bg-[#ccd6f6] outline-none' />
            <textarea name="message" placeholder='Message' cols="30" rows="10" className='p-2 bg-[#ccd6f6] outline-none'></textarea>
            <button className='text-white border-2 py-3 px-4 mt-4 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600'>Let's Collaborate</button>
        </motion.form>
    </div>
  )
}

export default Contact