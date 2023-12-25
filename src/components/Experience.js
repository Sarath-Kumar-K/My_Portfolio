import React from 'react'
import pantech from '../assets/pantech-logo.png'

const Experience = () => {
  return (
    <div className='p-5 flex flex-col bg-[#0c1626]' id="experience">
        <div className='pt-10'>
            <h3 className='text-white w-fit mx-auto py-1 px-5 text-center bg-[#4e5a61] rounded-3xl'>Experience</h3>
        </div>
        <p className='py-6 text-gray-600 text-center'>Navigated through enriching internships, gaining hands-on experience across diverse projects, contributing significantly to my multifaceted skill set. </p>
        {/* exp 1 */}
        
        <div className='flex flex-col gap-4 bg-[#000015] rounded-md w-fit mx-auto lg:max-w-md'>
            {/* company logo and period */}
            <div className='flex justify-between'>
                <div className='p-4'>
                    <img className='w-[150px]' src={pantech} />
                </div>
                <div className='pr-6 pt-6 text-xs text-gray-400 lg:p-5 lg:text-base'>
                    <h3>Apr 2023 -  May 2023</h3>
                </div>
            </div>
            {/* Position and activities performed */}
            <div className='pl-4'>
                <h3 className='text-xl text-white font-bold'>Project Intern</h3>
                <ul className='list-disc text-gray-400 py-4 px-5 leading-8'>
                    <li>Internship at Pantech Solutions: Developed an ALPR system.</li>
                    <li>Gained experience in OpenCV, NumPy, Pandas, TensorFlow, and API integration.</li>
                    <li>Successfully trained a model with the OpenALPR dataset.</li>
                    <li>Enhanced skills and knowledge in computer vision and machine learning.</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Experience