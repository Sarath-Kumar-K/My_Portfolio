import React from 'react'
import photo from '../assets/dp.jpg'

const Profile = () => {
  return (
    <div className='text-white mx-5 md:mx-10 lg:mx-20 flex flex-col-reverse lg:flex-row mt-20'>
        <div className='py-10'>
           <div>
              <h1 className='lg:text-5xl text-3xl font-bold'>Hi, I'm <span className='text-blue-500'>Sarath</span>👋</h1>
              <p className='mt-5 lg:text-xl text-gray-500 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
           </div>
           <div className='mt-10 text-gray-500'>
             <p className='py-2'><i class="bi bi-geo-alt"></i> Bangalore, india</p>
             <p ><i class="bi bi-circle-fill text-green-500 text-[10px] px-1" ></i> Available for new projects</p>
           </div>
           <div className='mt-10 flex gap-5'>
             <i class="bi bi-linkedin"></i>
             <i class="bi bi-github"></i>
             <i class="bi bi-envelope-at-fill"></i>
           </div>
        </div>
        <div className='lg:p-5 '>
          {/* <div className='bg-[#4e5a61] w-fit'> 
            <img className='w-[700px] translate-x-4 -translate-y-4' src={photo}/>
          </div> */}

          {/* photo */}
          <div className='bg-[#4e5a61] w-fit rounded-full p-2 mx-auto'> 
            <img className='rounded-full lg:w-[900px] w-[250px]' src={photo}/>
          </div>
        </div>
    </div>
  )
}

export default Profile