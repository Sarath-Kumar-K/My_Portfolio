import React from 'react'
import pantech from '../assets/pantech-logo.png'

const Experience = () => {
  return (
    <div className='p-5 flex flex-col bg-[#0c1626]'>
        <div className='pt-10'>
            <h3 className='text-white w-fit mx-auto py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Experience</h3>
        </div>
        <p className='py-6 text-gray-600 text-center'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            {/* exp 1 */}
            <div className='lg:flex lg:justify-between mx-auto my-4 bg-[#000015] rounded-md w-5/6 lg:w-1/2'>
                <div className='flex justify-between'>
                <div className='p-4 pb-0'>
                <img className='w-[150px]' src={pantech} />
                </div>
                <div className='lg:hidden text-gray-400 pt-5 pr-4 text-xs'>
                    <h3>Apr 2023 -  May 2023</h3>
                </div>
                </div>
                <div className='flex flex-wrap flex-col lg:p-4 p-4 lg:w-1/2'>
                    <h3 className='text-xl text-white font-bold'>Project Intern</h3>
                    <ul className='list-disc text-gray-400 py-4 pl-4'>
                        <li className=''>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</li>
                        <li>The point of using Lorem Ipsum</li>
                        <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here The point of using Lorem Ipsum</li>
                        <li>The point of using Lorem Ipsum</li>
                    </ul>
                </div>
                <div className='hidden lg:block text-gray-400 lg:p-4 p-4'>
                    <h3>Apr 2023 -  May 2023</h3>
                </div>
            </div>
        
    </div>
  )
}

export default Experience