import React, { useState } from 'react'
import {Link} from 'react-scroll'
import resume from '../assets/resume.pdf'

const Nav = () => {
    const [togglerOpen,setToggler] = useState(false)
    // const handleSetActive = (to) => {
    //   let element = 
    // };
  return (
    <>
    <div className='px-5 md:px-10 lg:px-20 py-4 text-white flex justify-between fixed top-0 left-0 right-0 bg-[#000015] w-[100%] z-50'>
        <h1 className='text-3xl font-bold'>
            &lt;SK /&gt;
        </h1>
        <div className='lg:hidden text-3xl cursor-pointer' onClick={(e)=>setToggler(!togglerOpen)}><i class="bi bi-list"></i></div>
        <div className='hidden lg:flex justify-between items-center gap-10 font-light text-gray-400 cursor-pointer'>
            <Link to="about" spy={true} smooth={true} offset={-80} duration={900}><p className='hover:text-white'>About</p></Link>
            <Link to="skills" spy={true} smooth={true} offset={-50} duration={900}><p className='hover:text-white'>Skills</p></Link>
            <Link to="experience" spy={true} smooth={true} offset={-80} duration={900}><p className='hover:text-white'>Experience</p></Link>
            <Link to="works" spy={true} smooth={true} offset={-50} duration={900}><p className='hover:text-white'>Works</p></Link>
            <a href={resume} download="Sarath_kumar_Resume.pdf" type="application/octet-stream" className='font-semibold bg-white rounded-md text-[#000031] px-3 py-1'>Download CV</a>
            {/* <button className='font-semibold bg-white rounded-md text-[#000031] px-3 py-1'>Download CV</button> */}
        </div>
    </div>
    {togglerOpen&&<div className='lg:hidden flex flex-col py-5 gap-5 text-center text-gray-400 font-extralight fixed  left-0 right-0 w-[100%] z-50 bg-[#000015]'>
            <Link to="about" spy={true} smooth={true} offset={-80} duration={1000} onClick={(e)=>setToggler(!togglerOpen)}><p>About</p></Link>
            <Link to="skills" spy={true} smooth={true} offset={-50} duration={1000} onClick={(e)=>setToggler(!togglerOpen)}><p>Skills</p></Link>
            <Link to="experience" spy={true} smooth={true} offset={-80} duration={1000} onClick={(e)=>setToggler(!togglerOpen)}><p>Experience</p></Link>
            <Link to="works" spy={true} smooth={true} offset={-50} duration={1000} onClick={(e)=>setToggler(!togglerOpen)}><p>Works</p></Link>
    <a href={resume} download="Sarath_kumar_Resume.pdf" type="application/octet-stream" className='font-semibold bg-white mx-auto rounded-md text-[#000031] px-3 py-1'>Download CV</a>
    {/* <button className='font-semibold bg-white mx-auto rounded-md text-[#000031] px-3 py-1'>Download CV</button> */}
    </div>}
    </>
  )
}

export default Nav