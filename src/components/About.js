import React from "react";
import photo from "../assets/passport_size_photo.png";

const About = () => {
  return (
    <div className="bg-[#0c1626]" id="about">
      <div className="pt-10">
        <p className="text-white w-fit mx-auto py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
          About me
        </p>
      </div>
      <div className="flex">
        {/* photo */}
        {/* <div className='hidden lg:block w-1/5'>
                <img className='lg:p-32 p-20' src={photo}/>
            </div> */}
        {/* content */}
        <div className="p-5 md:p-10 lg:p-20 text-white">
          <h2 className="lg:text-2xl text-xl font-bold">
            Curious about me? Here you have it:
          </h2>
          <div className="text-gray-500 leading-6">
            <p className="mt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English.
            </p>
            <br></br>
            <div className="lg:flex lg:gap-10 flex lg:flex-row flex-col gap-5">
              {/* education */}
              <div className="lg:w-3/5">
                <p className="text-2xl py-4 text-white font-bold">Education</p>
                <div className="border-solid border-l-2 border-b-2 border-gray-500 ml-4 mt-4">
                  <div className="flex">
                  <p className="min-w-fit h-fit text-white rounded-3xl border-solid border-2 border-sky-500 px-2 py-1 inline-block -translate-x-4 bg-[#1d262e]">
                    2020-2024
                  </p>
                  <p className="pt-1">Adhiyamaan College of Engineering, Hosur</p>
                  </div>
                  <p className="text-white text-l pt-5 px-5">
                    B.E Computer Science and Engineering
                  </p>
                  <p className="py-2 px-5">
                    Affiliated to Anna University, I was able to explore various
                    opportunities particularly outside syllabus, that was the
                    mark of my beginning into IT field.
                  </p>
                </div>
                <div className=" border-t-0 border-solid border-l-2 border-gray-500 ml-4">
                  <div className="pt-5">
                    <div className="flex">
                       <p className="min-w-fit h-fit text-white rounded-3xl border-solid border-2 border-sky-500 px-2 py-1 inline-block -translate-x-4 bg-[#1d262e]">
                           2017-2019
                       </p>
                       <p className="pt-1">Sri Chaitanya Techno School, Bangalore</p>
                  </div>
                    <p className="text-white  text-l pt-5 px-5">
                      Higher Secondary
                    </p>
                    <p className="py-2 px-5">
                      Affiliated to Anna University, I was able to explore
                      various opportunities particularly outside syllabus, that
                      was the mark of my beginning into IT field.
                    </p>
                  </div>
                </div>
              </div>
              {/* what i do */}
              <div className="lg:w-2/5">
                <h3 className="text-2xl py-4 text-white font-bold">
                  What I Do
                </h3>
                <div className="flex flex-col">
                  <div className="flex gap-10 mt-4">
                    <div className="text-sky-500 text-5xl">
                      <i class="bi bi-display"></i>
                    </div>
                    <div>
                      <p className="text-white  text-l font-bold px-5">
                        Web App Development
                      </p>
                      <p className="px-5 py-1">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 mt-5">
                    <div className="text-sky-500 text-5xl">
                      <i class="bi bi-database-check"></i>
                    </div>
                    <div>
                      <p className="text-white  text-l font-bold px-5">
                        Database Administration
                      </p>
                      <p className="px-5 py-1">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10 mt-5">
                    <div className="text-sky-500 text-5xl">
                      <i class="bi bi-hdd-rack"></i>
                    </div>
                    <div>
                      <p className="text-white  text-l font-bold px-5">
                        Computer Networking
                      </p>
                      <p className="px-5 py-1">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
