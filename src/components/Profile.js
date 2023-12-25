import React from 'react'
import photo from '../assets/dp.jpg'

const Profile = () => {
  return (
    <div className='text-white mx-6 lg:mx-20 flex flex-col-reverse lg:flex-row lg:gap-10 lg:mt-16 mt-[68px]'>
      {/* welcome content */}
        <div className='lg:pb-10 lg:pt-20 py-10 lg:w-4/6'>
           <div>
              <h1 className='lg:text-5xl text-3xl font-bold'>Hi, I'm <span className='text-blue-500'>Sarath</span>👋</h1>
              <p className='mt-5 lg:text-xl text-gray-500 '>A dedicated Computer Science enthusiast with a passion for programming and devlopment. </p>
           </div>
           <div className='mt-10 text-gray-500'>
             <p className='py-2'><i class="bi bi-geo-alt"></i> Bangalore, india</p>
             <p ><i class="bi bi-circle-fill text-green-500 text-[10px] px-1" ></i> Available for new projects</p>
           </div>
           <div className='mt-10 flex gap-5'>
             <a href="https://www.linkedin.com/in/sarath-kumar-k-18493123a" target="_blank" rel="noopener noreferrer" className='curser-pointer'><i class="bi bi-linkedin"></i></a>
             <a href="https://github.com/Sarath-Kumar-K" target="_blank" rel="noopener noreferrer" className='curser-pointer'><i class="bi bi-github"></i></a>
             <a href="mailto:sarathkumar230302@gmail.com" className='curser-pointer' target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope-at-fill"></i></a>
           </div>
        </div>
        {/* photo */}
        <div className='mx-auto mt-8 lg:w-2/6 md:m-auto lg:ml-[100px]'>
          {/* <div className='bg-[#4e5a61] w-fit'> 
            <img className='w-[700px] translate-x-4 -translate-y-4' src={photo}/>
          </div> */}

          
          <div className='bg-[#4e5a61] w-fit lg:h-[300px] lg:w-[300px] rounded-full p-2 '> 
            <img className='rounded-full  w-[200px] lg:h-fit lg:w-[350px]' src={photo}/>
          </div>
        </div>
    </div>
  )
}

export default Profile