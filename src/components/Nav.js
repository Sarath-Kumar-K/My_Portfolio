import React, { useState } from 'react'
import resume from '../assets/resume.pdf'

const Nav = () => {
    const [togglerOpen,setToggler] = useState(false)
  return (
    <>
    <div className='mx-5 md:mx-10 lg:mx-20 py-4 text-white flex justify-between'>
        <h1 className='text-3xl font-bold'>
            &lt;SK /&gt;
        </h1>
        <div className='lg:hidden text-3xl cursor-pointer' onClick={(e)=>setToggler(!togglerOpen)}><i class="bi bi-list"></i></div>
        <div className='hidden lg:flex justify-between items-center gap-10 font-light text-gray-400 cursor-pointer'>
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
            <a href={resume} download="Sarath_kumar_Resume.pdf" type="application/octet-stream" className='font-semibold bg-white rounded-md text-[#000031] px-3 py-1'>Download CV</a>
            {/* <button className='font-semibold bg-white rounded-md text-[#000031] px-3 py-1'>Download CV</button> */}
        </div>
    </div>
    {togglerOpen&&<div className='lg:hidden flex flex-col py-5 gap-5 text-center text-white font-extralight'>
    <p>About</p>
    <p>Work</p>
    <p>Testimonials</p>
    <p>Contact</p>
    <button className='font-semibold bg-white mx-auto rounded-md text-[#000031] px-3 py-1'>Download CV</button>
    </div>}
    </>
  )
}

export default Nav