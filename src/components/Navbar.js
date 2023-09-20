import React, { useState } from 'react'

import logo from '../assets/unnamed-Recovered.png'

import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import { Link } from 'react-scroll'


function Navbar() {

    const [toggle, setToggle] = useState(false)

    const clickHandler = () => {
        setToggle(!toggle)
    }

    return (
        <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-primary text-gray-300'>
            <div>
                <img src={logo} alt="logo" className='w-12' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            <div className='flex lg:hidden'>
                <ul className='flex text-white'>
                    <li className='bg-blue-600 p-1.5 mx-1 rounded-full'>
                        <a href="https://www.linkedin.com/in/homayoon-norozy/" target='_blank' className=''>
                            <FaLinkedin size={20} />
                        </a>
                    </li>
                    <li className='bg-[#333333] p-1.5 mx-1 rounded-full'>
                        <a href="https://github.com/homayoun77" target='_blank' className=''>
                            <FaGithub size={20} />
                        </a>
                    </li>
                    <li className='bg-[#6fc2b0] p-1.5 mx-1 rounded-full'>
                        <a href="mailto: homayounn77@gmail.com" target='_blank' className=''>
                            <HiOutlineMail size={20} />
                        </a>
                    </li>
                    <li className='bg-[#565f69] p-1.5 mx-1 rounded-full'>
                        <a href="#" className=''>
                            <BsFillPersonLinesFill size={20} />
                        </a>
                    </li>
                </ul>
            </div>

            {/* hamburger menu */}
            <div onClick={clickHandler} className='md:hidden z-10 cursor-pointer'>
                {!toggle ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            {/* mobile menu */}
            <ul className={!toggle ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center md:hidden'}>
                <li className='py-6 text-3xl font-medium'><Link onClick={clickHandler} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-3xl font-medium'><Link onClick={clickHandler} to="about" smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-3xl font-medium'><Link onClick={clickHandler} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-3xl font-medium'><Link onClick={clickHandler} to="work" smooth={true} duration={500}>Work</Link></li>
                <li className='py-6 text-3xl font-medium'><Link onClick={clickHandler} to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex flex-col fixed left-0 top-1/3'>
                <ul>
                    <li className='bg-blue-600 w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.linkedin.com/in/homayoon-norozy/" target='_blank' className='flex justify-between items-center w-full text-white'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='bg-[#333333] w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a href="https://github.com/homayoun77" target='_blank' className='flex justify-between items-center w-full text-white'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='bg-[#6fc2b0] w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a href="mailto: homayounn77@gmail.com" target='_blank' className='flex justify-between items-center w-full text-white'>
                            E-Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='bg-[#565f69] w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a href="#" className='flex justify-between items-center w-full text-white'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar