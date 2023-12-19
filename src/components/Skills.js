import React from 'react'
import python from '../assets/python-logo.png'
import react from '../assets/react-logo.png'
import mongodb from '../assets/mogodb-logo.png'
import mysql from '../assets/mysql-logo.png'
import cpp from '../assets/cpp-logo.png'
import js from '../assets/JavaScript-logo.png'
import php from '../assets/php-logo.png'
import nodejs from '../assets/nodejs-logo.png'
import git from '../assets/git-logo.png'
import postman from '../assets/postman-logo.png'
import tailwindcss from '../assets/tailwindcss-logo.png'
import figma from '../assets/figma-logo.png'
import nextjs from '../assets/nextjs-logo.png'


const Skills = () => {
  return (
    <div className='p-5 md:p-10 lg:p-20 md:mx-20 lg:mx-52'>
        <div className='pb-8'>
            <p className='text-white w-fit mx-auto py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Skills</p>
        </div>
        <p className='pb-16 text-gray-600 text-center'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 text-white'>
            {/* row 1 */}
            
                <div>
                    <img className='w-[100px] mx-auto' src={js}/>
                    <p className='mx-auto w-fit p-3'>JavaScript</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto' src={react}/>
                    <p className='mx-auto w-fit p-3'>ReactJs</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto' src={nodejs}/>
                    <p className='mx-auto w-fit p-3'>NodeJs</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto' src={nextjs}/>
                    <p className='mx-auto w-fit p-3'>NextJs</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto' src={mongodb}/>
                    <p className='mx-auto w-fit p-3'>Mongodb</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto py-5' src={tailwindcss}/>
                    <p className='mx-auto w-fit p-3'>TailwindCss</p>
                </div>
            
            {/* row 2 */}
            
                <div>
                    <img className='w-[100px] mx-auto' src={cpp}/>
                    <p className='mx-auto w-fit p-3'>C++</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto' src={python}/>
                    <p className='mx-auto w-fit p-3'>Python</p>
                </div>
                <div>
                    <img className='w-[150px] lg:w-[300px] py-3 lg:py-4 mx-auto' src={php}/>
                    <p className='mx-auto w-fit p-3'>Php</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto' src={postman}/>
                    <p className='mx-auto w-fit p-3'>Postman</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto' src={git}/>
                    <p className='mx-auto w-fit p-3'>Git</p>
                </div>
                <div>
                    <img className='w-[100px] mx-auto' src={mysql}/>
                    <p className='mx-auto w-fit p-3'>Mysql</p>
                </div>
            
        </div>
    </div>
  )
}

export default Skills