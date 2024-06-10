import React from "react";
import crowdfundingapp from "../assets/cfa.png";
import HotstarClone from "../assets/hotstarClone.png";
import BlogApp from "../assets/blogApp.png";

const Projects = () => {
  return (
    <div className="p-5 md:p-10 lg:p-20" id="works">
      {/* heading */}
      <div className="pb-8">
        <p className="text-white w-fit mx-auto py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
          Works
        </p>
      </div>
      {/* summary */}
      <p className="pb-16 lg:w-1/2 mx-auto text-gray-600 text-center">
        Explore a compilation of my impactful works and projects, each a
        testament to my dedication, innovation, and problem-solving prowess.
      </p>
      {/* projects */}
      <div className="flex flex-col">
        {/* Blog App */}
        <div className="lg:w-5/6 p-5 mx-auto lg:flex">
          <div
            onClick={() => window.open("https://sarath-blog.onrender.com/")}
            className="lg:w-1/2 p-5 lg:p-10 rounded-t-lg lg:rounded-e-none lg:rounded-s-lg bg-[#3e4a61] cursor-pointer"
          >
            <img className="h-[200px] lg:h-[300px] rounded-lg" src={BlogApp} />
          </div>
          <div className="lg:w-1/2 bg-[#1c2636] rounded-b-lg lg:rounded-s-none lg:rounded-e-lg p-10 text-white">
            <p className="font-bold text-lg pb-3">
              <a href="https://sarath-blog.onrender.com/" target="_blank">
                Blog App
              </a>
            </p>
            <p className="text-gray-400 pb-8">
              Developed a full-stack Blog App using the MERN Stack Jwt
              authentication leveraging advanced hashing algorithms to ensure
              secure user accounts. Implemented different features for users and
              admin to securely upload and share photos, added features like
              liking and commenting to posts, fostering an engaging and
              interactive user experience.
            </p>
            <div className="flex flex-wrap text-sm gap-2">
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Javascript
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                react.js
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                API (Application Programming Interface)
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Responsive UI
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Frontend Development
              </p>
            </div>
          </div>
        </div>
        {/* Hotstar Clone */}
        <div className="lg:w-5/6 p-5 mx-auto lg:flex">
          <div className="lg:w-1/2 p-5 lg:p-10 rounded-t-lg lg:rounded-e-none lg:rounded-s-lg bg-[#3e4a61]">
            <img
              className="h-[200px] lg:h-[300px] rounded-lg"
              src={HotstarClone}
            />
          </div>
          <div className="lg:w-1/2 bg-[#1c2636] rounded-b-lg lg:rounded-s-none lg:rounded-e-lg p-10 text-white">
            <p className="font-bold text-lg pb-3">
              <a
                href="https://hotstar-clone-by-sarath-kumar.vercel.app/"
                target="_blank"
              >
                Hotstar Clone
              </a>
            </p>
            <p className="text-gray-400 pb-8">
              Created Hotstar clone using React and integrated API for video
              files, focusing on seamless playback and responsive design.
              Implemented robust user authentication, engaging user
              interactions, and optimized performance for enhanced user
              experience.
            </p>
            <div className="flex flex-wrap text-sm gap-2">
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Javascript
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                react.js
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                API (Application Programming Interface)
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Responsive UI
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Frontend Development
              </p>
            </div>
          </div>
        </div>
        {/* CrowdFunding DApp */}
        <div className="lg:w-5/6 p-5 mx-auto lg:flex">
          <div className="lg:w-1/2 p-5 lg:p-10 rounded-t-lg lg:rounded-e-none lg:rounded-s-lg bg-[#3e4a61]">
            <img
              className="h-[200px] lg:h-[300px] rounded-lg"
              src={crowdfundingapp}
            />
          </div>
          <div className="lg:w-1/2 bg-[#1c2636] rounded-b-lg lg:rounded-s-none lg:rounded-e-lg p-10 text-white">
            <p className="font-bold text-lg pb-3">CrowdFunding DAPP</p>
            <p className="text-gray-400 pb-8">
              This crowdfunding application leveraged the Ethereum blockchain
              and the Thirdwed framework, utilizing Solidity for smart contract
              creation. I deployed contracts on Thirdwed, interfacing with
              clients using Ether.js libraries.
            </p>
            <div className="flex flex-wrap text-sm gap-2">
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Smart Contract
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Ethereum Network
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                solidity
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Blockchain
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Ether.js
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Javascripty
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Reactjs
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Thirdweb
              </p>
              <p className="text-white w-fit py-1 px-5 text-center bg-[#4e5a61] rounded-3xl">
                Web3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
