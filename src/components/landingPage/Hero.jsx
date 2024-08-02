import React from "react";
import { Link, NavLink } from "react-router-dom";


const Hero = () => {
  return (
    <div className="container mx-auto md:my-5 my-1">
      <div className="w-full flex flex-col justify-center items-center space-y-4">
        <NavLink to={"/"}>
          <img
            className="rounded-full size-36"
            src="https://framerusercontent.com/images/KwncUFvOHcwyCrBvsIzWSbIoxSc.png"
            alt=""
          />
        </NavLink>
        <button className="flex justify-center items-center font-primaryFont font-semibold text-primaryColor rounded-full border-2 p-2 md:px-6 px-4">
          <span class="relative flex h-3 w-3 mr-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Avalaible for work
        </button>
      </div>

      <div className="flex justify-center w-full ">
        <div className="md:mt-8 md:pl-52 md:w-[25%] hidden md:block">
          <a href="https://x.com/1st_2s?t=crHq9Iq7XNVWcYbxIp1b3w&s=09">
            <span>
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
              </svg>
            </span>
          </a>

          <a href="https://www.linkedin.com/in/festusandrew?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <span>
              <svg
                className="w-10 h-10 mt-8"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </span>
          </a>

        <a href="https://www.instagram.com/1st_2s?igsh=Y29kZG53b2ptbDlu">
          <span>
            <svg
              className="w-10 h-10 mt-8"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </span>
          </a>
        </div>

        <div className="md:w-[75%] w-full mt-5 md:mt-8 ">
          <p className="font-tertiaryFont md:ml-16 ml-12 md:mx-0 mx-3 md:text-6xl text-4xl font-semibold leading-tight">
            👋🏼Hey there, it's <br /> Festus Andrew.
          </p>

          <p className="md:mt-6 mt-3 md:mx-0 mx-3 font-tertiaryFont md:text-xl md:ml-36 ml-14 ">
            I am a Designer based in Jos, Nigeria.
          </p>

          <div href="contact" className="md:space-x-8 md:mt-6 mt-6 md:pl-20 md:mb-12 mb-10 space-x-4 md:ml-8 ml-8 mx-3 md:mx-0 ">
            <button className="border rounded-full md:px-6 px-20 p-3 md:p-2.5 ml-3 font-bold md:text-lg  bg-primaryColor text-white hover:bg-hoverColor">
              <a href="#contact">Let's work together</a>
            </button>

            <Link to={"./MoreAbout"}>
              <button className="border rounded-full mt-4 md:px-8 px-24 p-3 md:p-2.5 font-bold md:text-lg bg-slate-100 hover:bg-slate-200">
                My Experience
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
